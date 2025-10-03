# Camp PEACH — Static Site

This repository contains a small static website for Camp PEACH (HTML, CSS, JS and assets).

This README explains how to run the site locally, how the Replit config is set up, and how to use the included VS Code workspace tasks.

## Quick project layout

- html/ — site pages (index.html, about.html, contact.html, etc.)
- css/ — main stylesheet (`style.css`)
- js/ — client JavaScript
- assets/ — images and media
- .replit — Replit run/workflow configuration
- .config/static-web-server.toml — static-web-server configuration used by Replit
- .vscode/ — VS Code tasks & launch configs

## Run locally (simple)

Option A — Python http.server (no extra dependencies):

```bash
# serve the project root on port 8000
python3 -m http.server 8000 --directory .
# open http://127.0.0.1:8000/html/index.html
```

Option B — static-web-server (recommended to match Replit):

```bash
# if installed on your machine
static-web-server -w ./.config/static-web-server.toml
# open http://127.0.0.1:80/html/index.html (or  http://127.0.0.1:8000/html/index.html depending on your environment)
```

## VS Code usage

- Open the repository in VS Code.
- Recommended extensions (suggested by `.vscode/extensions.json`): Live Server, Debugger for Chrome, Prettier.
- Tasks: (Terminal → Run Task...)
	- "Serve (python)" — starts a lightweight server on port 8000
	- "Serve (static-web-server)" — runs the same server Replit uses (if installed locally)
- Debug: Run the launch configuration "Open Site in Browser" to open `http://127.0.0.1:8000/html/index.html` in Chrome and attach the debugger.

## Replit configuration notes

- `.replit` runs `static-web-server -w ./.config/static-web-server.toml` and installs `static-web-server` via Nix.
- The static-web-server TOML mounts the repository root and falls back to `html/index.html`. Pages in `html/` have been converted to use root-absolute resource paths (e.g. `/css/style.css`, `/assets/...`) and links target `/html/*.html` so the site works regardless of the server root.

## Troubleshooting

- CSS not loading: ensure the server serves the repository root. If you changed `.replit` or the server command, make sure requests to `/css/style.css` return `200`.
- If the server is running on port 80 but your local environment prevents binding to 80, use the Python server on port 8000 and update the VS Code launch URL if needed.

## Next steps (optional)

- Make the site URLs prettier by serving `html/` as the server root and changing links to `/index.html` etc. (I can do this if you'd prefer.)
- Add a simple CI (lint or HTML validation) or a tiny test that checks all linked assets exist.

---

If you want, I can also add a small deploy script or a GitHub Pages configuration. Which would you like next?
