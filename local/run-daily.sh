#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NODE_BIN="/Users/caoyue/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"
LOG_DIR="$ROOT_DIR/local/logs"
ENV_FILE="$ROOT_DIR/local/.env.local"

mkdir -p "$LOG_DIR"
cd "$ROOT_DIR"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE. Copy local/.env.local.example to local/.env.local and fill secrets." >&2
  exit 2
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

export PATH="$NODE_BIN:$ROOT_DIR/node_modules/.bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "GITHUB_TOKEN is required." >&2
  exit 2
fi

if [[ "$GITHUB_TOKEN" == *xxxxxxxx* || "$GITHUB_TOKEN" == "ghp_xxxxxxxxxxxxxxxxxxxx" ]]; then
  echo "GITHUB_TOKEN still contains the placeholder value." >&2
  exit 2
fi

if [[ -z "${FEISHU_WEBHOOK_URLS:-${FEISHU_WEBHOOK_URL:-}}" ]]; then
  echo "FEISHU_WEBHOOK_URLS is required for Feishu push." >&2
  exit 2
fi

if [[ "${FEISHU_WEBHOOK_URLS:-${FEISHU_WEBHOOK_URL:-}}" == *xxxxxxxx* ]]; then
  echo "FEISHU webhook still contains the placeholder value." >&2
  exit 2
fi

case "${LLM_PROVIDER:-anthropic}" in
  deepseek)
    if [[ -z "${DEEPSEEK_API_KEY:-}" || "$DEEPSEEK_API_KEY" == *xxxxxxxx* ]]; then
      echo "DEEPSEEK_API_KEY is required for LLM_PROVIDER=deepseek." >&2
      exit 2
    fi
    ;;
  openai)
    if [[ -z "${OPENAI_API_KEY:-}" || "$OPENAI_API_KEY" == *xxxxxxxx* ]]; then
      echo "OPENAI_API_KEY is required for LLM_PROVIDER=openai." >&2
      exit 2
    fi
    ;;
  anthropic)
    if [[ -z "${ANTHROPIC_API_KEY:-}" || "$ANTHROPIC_API_KEY" == *xxxxx* ]]; then
      echo "ANTHROPIC_API_KEY is required for LLM_PROVIDER=anthropic." >&2
      exit 2
    fi
    ;;
  openrouter)
    if [[ -z "${OPENROUTER_API_KEY:-}" || "$OPENROUTER_API_KEY" == *xxxxxxxx* ]]; then
      echo "OPENROUTER_API_KEY is required for LLM_PROVIDER=openrouter." >&2
      exit 2
    fi
    ;;
esac

if [[ "${1:-}" == "--validate-only" ]]; then
  echo "Configuration looks valid."
  exit 0
fi

echo "[$(date '+%F %T')] agents-radar daily run started"

./node_modules/.bin/tsx src/index.ts
./node_modules/.bin/tsx src/generate-manifest.ts
./node_modules/.bin/tsx src/feishu.ts

echo "[$(date '+%F %T')] agents-radar daily run finished"
