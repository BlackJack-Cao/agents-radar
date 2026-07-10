# agents-radar local deployment

This folder contains local deployment glue for macOS.

## 1. Configure secrets

```bash
cd /Users/caoyue/Desktop/工作/AI雷达/agents-radar
cp local/.env.local.example local/.env.local
chmod 600 local/.env.local
```

Edit `local/.env.local` and fill:

- `GITHUB_TOKEN`
- one LLM provider key, for example `LLM_PROVIDER=openai` plus `OPENAI_API_KEY`, `OPENAI_BASE_URL`, and `OPENAI_MODEL`
- `FEISHU_WEBHOOK_URLS`
- `PAGES_URL`

For local-only viewing, `PAGES_URL=http://localhost:8080` is fine. If Feishu recipients need to open links from phone or another machine, set `PAGES_URL` to a reachable GitHub Pages or tunnel URL.

## 2. Manual test

```bash
./local/run-daily.sh
```

Expected output files:

```bash
ls digests/$(TZ=Asia/Shanghai date +%F)
```

## 3. Local Web UI

```bash
./local/serve-web.sh 8080
```

Open:

```text
http://localhost:8080
```

## 4. Install daily schedule

The included launchd plist runs every day at 08:00 local time.

```bash
./local/install-launchd.sh
launchctl list | grep com.caoyue.agents-radar.daily
```

Run immediately for verification:

```bash
launchctl start com.caoyue.agents-radar.daily
```

Logs:

```bash
tail -f local/logs/launchd.out.log
tail -f local/logs/launchd.err.log
```

## Notes

- `DIGEST_REPO` is intentionally unset by default, so the local run writes files only and does not create GitHub Issues.
- Product Hunt is skipped unless `PRODUCTHUNT_TOKEN` is set.
- The upstream MCP worker reads a hard-coded GitHub Pages URL. Local Feishu push does not need MCP.

## GitHub Pages deployment

The workflows in `.github/workflows/` deploy the static site to GitHub Pages after generating `digests/`, `manifest.json`, and `feed.xml`.

In your GitHub repository:

1. Open `Settings -> Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.
3. Add Actions secrets:
  - `OPENAI_API_KEY`
  - `OPENAI_BASE_URL`
  - variable `OPENAI_MODEL`, for example `gpt-5.4-mini`
  - `FEISHU_WEBHOOK_URLS`
  - optional `PRODUCTHUNT_TOKEN`
4. Run `Actions -> Daily Agents Radar -> Run workflow`.

The Feishu card uses the deployed Pages URL from `actions/deploy-pages`, so it does not need a hard-coded `PAGES_URL` in GitHub Actions.

Important: GitHub-hosted Actions cannot reach private LAN addresses such as `http://192.168.x.x:8080/v1`. For GitHub Actions deployment, use a public HTTPS OpenAI-compatible endpoint, expose the proxy securely, or run the workflow on a self-hosted runner inside the same network.
