#!/usr/bin/env bash
set -euo pipefail

# Deploy the contents of the html/ directory to the gh-pages branch of the
# repository remote (default: origin). This script creates a temporary
# clone, commits the html output and force-pushes to gh-pages.

BUILD_DIR="html"
REMOTE="${REMOTE:-$(git config --get remote.origin.url || true)}"

if [ -z "$REMOTE" ]; then
  echo "No git remote found (remote.origin.url). Set REMOTE or run from a git repo with an origin." >&2
  exit 1
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Build directory '$BUILD_DIR' does not exist. Make sure your site is in $BUILD_DIR." >&2
  exit 1
fi

TMPDIR=$(mktemp -d)
echo "Using temp dir: $TMPDIR"

# Copy files into temp dir
rsync -a --delete "$BUILD_DIR/" "$TMPDIR/"

# Also copy common static asset directories (if they exist) so CSS, JS and
# images are published at the site root on gh-pages.
for d in css js assets; do
  if [ -d "$d" ]; then
    echo "Including directory: $d"
    rsync -a "$d" "$TMPDIR/"
  fi
done

pushd "$TMPDIR" >/dev/null
git init
git remote add origin "$REMOTE"
git checkout -b gh-pages
git add -A
git commit -m "Deploy site: $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "Pushing to remote $REMOTE (branch gh-pages)"
git push --force origin gh-pages
popd >/dev/null

rm -rf "$TMPDIR"
echo "Deployed html/ to gh-pages." 
