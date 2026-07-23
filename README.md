# AI Radar

基于 GitHub Actions 的 AI 技术情报自动化项目。系统在工作日自动采集 AI 工具、Agent、模型、行业资讯及医疗 AI 动态，调用 OpenAI 兼容模型生成中英文日报，并发布到 GitHub Pages、提交到仓库，最后通过飞书机器人发送报告摘要和阅读链接。

- GitHub 仓库：[BlackJack-Cao/agents-radar](https://github.com/BlackJack-Cao/agents-radar)
- Web UI：[https://blackjack-cao.github.io/agents-radar/](https://blackjack-cao.github.io/agents-radar/)
- RSS：[https://blackjack-cao.github.io/agents-radar/feed.xml](https://blackjack-cao.github.io/agents-radar/feed.xml)

## 工作流程

```text
GitHub Actions 定时触发
        ↓
并行采集 GitHub、Hugging Face、HN、官网及技术社区信息
        ↓
按时间范围筛选、去重并整理原始数据
        ↓
调用 OpenAI 兼容模型生成中英文分析
        ↓
保存 Markdown 日报、更新 manifest.json 和 feed.xml
        ↓
部署 GitHub Pages
        ↓
通过飞书 Webhook 推送摘要和报告链接
```

该项目是定时执行的一次性批处理程序，不需要长期运行的后端服务或数据库。

## 数据来源

| 来源 | 获取方式 | 主要内容 |
| --- | --- | --- |
| GitHub 项目 | GitHub API | AI CLI、Agent 项目的 Issue、PR 和 Release |
| Claude Code Skills | GitHub API | 社区关注度较高的 Skills、PR 和 Issue |
| GitHub Trending | 页面解析 + Search API | 热门 AI 项目和近期活跃仓库 |
| Hacker News | Algolia API | 最近 24 小时的 AI 热门讨论 |
| Product Hunt | GraphQL API | AI 产品动态，需要配置可选 Token |
| ArXiv | ArXiv API | cs.AI、cs.CL、cs.LG 最新论文 |
| Hugging Face | Hub API | 热门模型、下载量、任务类型和更新时间 |
| Dev.to、Lobste.rs | 公共 API | AI、LLM 和工程实践文章 |
| OpenAI、Anthropic | Sitemap | 官网新增研究、产品和工程文章 |
| 医疗 AI 专项来源 | GitHub Search、HF Hub、产业 RSS | 医疗 Agent、医疗模型和医疗 AI 产业资讯 |

医疗 AI 日报以项目和产业实践为主，不接入 PubMed，也不在医疗板块重复收录 ArXiv 论文。

## 报告板块

日报写入 `digests/YYYY-MM-DD/`，主要包括：

| 文件 | 内容 |
| --- | --- |
| `ai-cli.md` | AI CLI 工具动态和横向比较 |
| `ai-agents.md` | Agent 项目动态及生态比较 |
| `ai-medical.md` | 医疗 Agent、医疗模型和医疗 AI 产业资讯 |
| `ai-web.md` | OpenAI、Anthropic 官网动态 |
| `ai-trending.md` | GitHub AI 热门项目和趋势 |
| `ai-hn.md` | Hacker News AI 社区动态 |
| `ai-ph.md` | Product Hunt AI 产品 |
| `ai-arxiv.md` | 通用 AI 论文动态 |
| `ai-hf.md` | Hugging Face 热门模型 |
| `ai-community.md` | Dev.to、Lobste.rs 技术社区内容 |
| `ai-weekly.md` | 最近一周日报汇总 |
| `ai-monthly.md` | 上月趋势汇总 |

大部分报告同时生成英文版本，文件名以 `-en.md` 结尾。

## Web UI

访问 [AI Radar Web UI](https://blackjack-cao.github.io/agents-radar/) 可以按日期查看全部历史报告。

页面为纯静态站点：

- `manifest.json` 保存日期和报告目录；
- `digests/` 保存 Markdown 报告；
- `index.html` 在浏览器中加载并渲染 Markdown；
- GitHub Actions 每次生成报告后重新部署 GitHub Pages；
- 不需要单独部署 Web 服务器。

## 飞书推送

项目使用飞书群自定义机器人 Webhook 推送日报。消息包含当日各板块的重点摘要、中英文报告链接和 Web UI 入口。

在 GitHub 仓库中进入：

```text
Settings → Secrets and variables → Actions → Secrets
```

添加：

| Secret | 是否必需 | 说明 |
| --- | --- | --- |
| `FEISHU_WEBHOOK_URLS` | 是 | 飞书自定义机器人 Webhook；多个地址使用英文逗号分隔 |

Webhook 只应保存在 GitHub Actions Secrets 中，不要写入 README、`.env` 或提交记录。

## GitHub Actions 配置

### Secrets

进入仓库的 `Settings → Secrets and variables → Actions → Secrets`，配置：

| Secret | 是否必需 | 说明 |
| --- | --- | --- |
| `OPENAI_API_KEY` | 是 | OpenAI 兼容接口密钥 |
| `OPENAI_BASE_URL` | 是 | OpenAI 兼容接口地址，通常以 `/v1` 结尾 |
| `FEISHU_WEBHOOK_URLS` | 是 | 飞书机器人 Webhook |
| `PRODUCTHUNT_TOKEN` | 否 | Product Hunt 数据源 Token；未配置时自动跳过 |

`GITHUB_TOKEN` 由 GitHub Actions 自动提供，无需手动创建。

### Variables

进入 `Settings → Secrets and variables → Actions → Variables`，可配置：

| Variable | 默认值 | 说明 |
| --- | --- | --- |
| `OPENAI_MODEL` | `gpt-5.4-mini` | 实际调用的模型名称 |
| `LLM_CONCURRENCY` | `1` | 同时执行的模型请求数 |
| `LLM_MIN_INTERVAL_MS` | `22000` | 两次模型请求的最小间隔，单位毫秒 |

当前工作流固定使用：

```text
LLM_PROVIDER=openai
```

因此模型服务需要兼容 OpenAI Chat Completions 接口。

### GitHub Pages

进入：

```text
Settings → Pages → Build and deployment
```

将 `Source` 设置为 `GitHub Actions`。日报工作流会自动生成 Pages artifact 并完成部署。

## 定时计划

| 工作流 | Cron | 北京时间 | 说明 |
| --- | --- | --- | --- |
| Daily Agents Radar | `45 22 * * 0-4` | 周一至周五 06:45 | 生成日报、部署 Pages、推送飞书 |
| Weekly Agents Radar | `0 1 * * 1` | 每周一 09:00 | 汇总最近 7 天日报 |
| Monthly Agents Radar | `0 2 1 * *` | 每月 1 日 10:00 | 汇总上月报告 |

GitHub Actions 的 Cron 使用 UTC，因此日报中的周日到周四 22:45 对应北京时间周一到周五 06:45。

所有工作流都保留 `workflow_dispatch`，可在 Actions 页面手动测试。

## 本地运行

### 环境要求

- Node.js 22 或更高版本
- pnpm 9
- 可访问的 GitHub API 和 OpenAI 兼容接口

### 配置环境变量

```bash
export GITHUB_TOKEN=ghp_xxxxx
export LLM_PROVIDER=openai
export OPENAI_API_KEY=your-api-key
export OPENAI_BASE_URL=https://your-endpoint.example.com/v1
export OPENAI_MODEL=your-model-name

# 可选：仅在需要创建 GitHub Issues 时设置
export DIGEST_REPO=BlackJack-Cao/agents-radar
```

### 执行

```bash
pnpm install
pnpm start
pnpm manifest
```

生成完成后，可以使用以下命令发送飞书消息：

```bash
export FEISHU_WEBHOOK_URLS=https://open.feishu.cn/open-apis/bot/v2/hook/xxxx
export PAGES_URL=https://blackjack-cao.github.io/agents-radar/
pnpm notify:feishu
```

## 自定义监控项目

监控的 AI CLI 和 Agent 仓库由根目录的 `config.yml` 管理。修改配置后，下一次工作流运行时自动生效，无需修改 TypeScript 代码。

```yaml
cli_repos:
  - id: my-tool
    repo: owner/my-ai-cli
    name: My AI Tool

openclaw_peers:
  - id: my-agent
    repo: owner/my-agent
    name: My Agent
```

对于更新非常频繁的仓库，可以增加：

```yaml
paginated: true
```

## 常用命令

```bash
pnpm start          # 生成当日日报
pnpm weekly         # 生成周报
pnpm monthly        # 生成月报
pnpm manifest       # 更新 Web UI 清单和 RSS
pnpm notify:feishu  # 推送最新报告到飞书
pnpm test           # 运行测试
pnpm lint           # 检查代码规范
pnpm typecheck      # TypeScript 类型检查
```

## 安全说明

- API Key、GitHub Token 和飞书 Webhook 必须保存在 Secrets 中；
- `local/.env.local` 已被 `.gitignore` 忽略，仅用于本地运行；
- 不要在 Issue、日志、README 或提交历史中公开密钥；
- 如果密钥曾被公开，应立即在对应平台撤销并重新生成。
