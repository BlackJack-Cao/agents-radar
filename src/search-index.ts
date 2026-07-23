import { marked, type Token, type Tokens } from "marked";

export interface SearchIndexEntry {
  date: string;
  report: string;
  section: string;
  title: string;
  text: string;
  anchorText: string;
}

const ANCHOR_TEXT_LIMIT = 160;
const TITLE_LIMIT = 100;

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function normalizeText(value: string): string {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function tokensToText(tokens: Token[]): string {
  const parts: string[] = [];

  for (const token of tokens) {
    switch (token.type) {
      case "space":
      case "hr":
      case "def":
      case "code":
        break;
      case "br":
        parts.push(" ");
        break;
      case "list": {
        const list = token as Tokens.List;
        parts.push(...list.items.map((item) => tokensToText(item.tokens)));
        break;
      }
      case "table": {
        const table = token as Tokens.Table;
        for (const row of table.rows) {
          parts.push(row.map((cell) => tokensToText(cell.tokens)).join(" | "));
        }
        break;
      }
      case "html":
        parts.push(normalizeText((token as Tokens.HTML).text));
        break;
      default: {
        const nested = (token as Token & { tokens?: Token[] }).tokens;
        if (nested?.length) {
          parts.push(tokensToText(nested));
        } else if ("text" in token && typeof token.text === "string") {
          parts.push(token.text);
        }
      }
    }
  }

  return normalizeText(parts.join(" "));
}

function findFirstStrong(tokens: Token[]): string {
  for (const token of tokens) {
    if (token.type === "strong") return tokensToText((token as Tokens.Strong).tokens);

    if (token.type === "list") {
      for (const item of (token as Tokens.List).items) {
        const nestedStrong = findFirstStrong(item.tokens);
        if (nestedStrong) return nestedStrong;
      }
      continue;
    }

    const nested = (token as Token & { tokens?: Token[] }).tokens;
    if (nested?.length) {
      const nestedStrong = findFirstStrong(nested);
      if (nestedStrong) return nestedStrong;
    }
  }
  return "";
}

function titleFromText(text: string): string {
  const normalized = normalizeText(text);
  const firstPart = normalized.split(/(?:：|:\s|\s[—–-]\s|[。.!?]\s)/, 1)[0] ?? normalized;
  return (firstPart || normalized).slice(0, TITLE_LIMIT).trim();
}

function currentSection(headings: string[]): string {
  const meaningful = headings.slice(1).filter(Boolean);
  if (meaningful.length) return meaningful.join(" / ");
  return headings.filter(Boolean).at(-1) ?? "";
}

function summaryEntries(html: string): Array<{ title: string; text: string }> {
  const entries: Array<{ title: string; text: string }> = [];
  for (const match of html.matchAll(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi)) {
    const content = match[1] ?? "";
    const text = normalizeText(content);
    if (!text) continue;
    const strong = content.match(/<strong\b[^>]*>([\s\S]*?)<\/strong>/i)?.[1] ?? "";
    entries.push({ title: normalizeText(strong) || titleFromText(text), text });
  }
  return entries;
}

export function buildSearchEntries(markdown: string, date: string, report: string): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = [];
  const headings: string[] = [];

  const addEntry = (title: string, text: string): void => {
    const cleanText = normalizeText(text);
    if (!cleanText) return;
    entries.push({
      date,
      report,
      section: currentSection(headings),
      title: normalizeText(title).slice(0, TITLE_LIMIT),
      text: cleanText,
      anchorText: cleanText.slice(0, ANCHOR_TEXT_LIMIT),
    });
  };

  const walk = (tokens: Token[]): void => {
    for (const token of tokens) {
      switch (token.type) {
        case "heading": {
          const heading = token as Tokens.Heading;
          const text = tokensToText(heading.tokens);
          headings.length = heading.depth;
          headings[heading.depth - 1] = text;
          addEntry(text, text);
          break;
        }
        case "paragraph": {
          const paragraph = token as Tokens.Paragraph;
          const text = tokensToText(paragraph.tokens);
          addEntry(findFirstStrong(paragraph.tokens) || titleFromText(text), text);
          break;
        }
        case "list": {
          for (const item of (token as Tokens.List).items) {
            const text = tokensToText(item.tokens);
            addEntry(findFirstStrong(item.tokens) || titleFromText(text), text);
          }
          break;
        }
        case "table": {
          const table = token as Tokens.Table;
          for (const row of table.rows) {
            const cells = row.map((cell) => tokensToText(cell.tokens));
            addEntry(cells[0] ?? "", cells.join(" | "));
          }
          break;
        }
        case "html": {
          for (const summary of summaryEntries((token as Tokens.HTML).text)) {
            addEntry(summary.title, summary.text);
          }
          break;
        }
        case "blockquote":
          walk((token as Tokens.Blockquote).tokens);
          break;
        default:
          break;
      }
    }
  };

  walk(marked.lexer(markdown));
  return entries;
}
