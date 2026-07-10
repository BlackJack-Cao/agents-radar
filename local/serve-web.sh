#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PYTHON_BIN="/Users/caoyue/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
PORT="${1:-8080}"

cd "$ROOT_DIR"
exec "$PYTHON_BIN" -m http.server "$PORT"
