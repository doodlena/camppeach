#!/usr/bin/env bash
set -eu

BASE_URL=${BASE_URL:-https://doodlena.github.io/camppeach}
PAGES=("/" "/index.html" "/about.html" "/past.html" "/info.html" "/regi.html" "/contact.html")
ASSETS=("/css/style.css" "/js/menu.js" "/assets/peach1.png")

fail=0

echo "Running smoke tests against $BASE_URL"
for p in "${PAGES[@]}"; do
  url="$BASE_URL$p"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" != "200" ]; then
    echo "PAGE FAIL: $url -> HTTP $status"
    fail=1
  else
    echo "PAGE OK: $url -> HTTP $status"
  fi
done

for a in "${ASSETS[@]}"; do
  url="$BASE_URL$a"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" != "200" ]; then
    echo "ASSET FAIL: $url -> HTTP $status"
    fail=1
  else
    echo "ASSET OK: $url -> HTTP $status"
  fi
done

if [ "$fail" -ne 0 ]; then
  echo "Smoke tests failed"
  exit 2
fi

echo "Smoke tests passed"
exit 0
