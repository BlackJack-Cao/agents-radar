#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLIST_NAME="com.caoyue.agents-radar.daily.plist"
SOURCE_PLIST="$ROOT_DIR/local/$PLIST_NAME"
TARGET_DIR="$HOME/Library/LaunchAgents"
TARGET_PLIST="$TARGET_DIR/$PLIST_NAME"

cd "$ROOT_DIR"

echo "Validating local configuration..."
if ./local/run-daily.sh --validate-only 2>/tmp/agents-radar-validate.err; then
  :
else
  cat /tmp/agents-radar-validate.err >&2
  echo "Fix local/.env.local before installing the daily schedule." >&2
  exit 2
fi

mkdir -p "$TARGET_DIR"
cp "$SOURCE_PLIST" "$TARGET_PLIST"

launchctl unload "$TARGET_PLIST" 2>/dev/null || true
launchctl load "$TARGET_PLIST"

echo "Installed launchd job: com.caoyue.agents-radar.daily"
echo "It will run every day at 08:00 local time."
