# genai-finance-spa-template

The single page application template for students.

**Live demo:** https://kwartler.github.io/vienna-genai-spa-template/

> **⚠️ First-run setup (do this once): in your repo go to Settings → Pages and set Source to "GitHub Actions".** Without it your deployed page will be broken or unstyled. Full steps in [SETUP.md](SETUP.md).

## Local development

Step by step, the first time:

1. Open a terminal. On a Mac, press `Cmd + Space`, type `Terminal`, and press `Enter`.

2. Change into the folder you cloned, the one that contains `package.json`. For example, if it is on your Desktop:

   ```bash
   cd ~/Desktop/your-repo-name
   ```

3. Install the dependencies. You only need to do this once:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. The terminal prints a local address, usually `http://localhost:5173`. Open that address in your web browser. The page reloads automatically every time you save a file.

To stop the server, click back on the terminal and press `Ctrl + C`.

## API keys

This app calls two services, and needs a key for each before it returns anything. **Both keys are entered in the app's form fields at run time. Neither is stored in the code.**

1. **Twelve Data (price data):** get a free key at https://twelvedata.com/pricing. The free plan covers all US stocks and ETFs, capped at 8 requests per minute and 800 per day.
2. **OpenRouter (the AI research note):** get a key at https://openrouter.ai/.

Because no key is ever written into a file or committed, this repo is safe to make public and the deployed page is safe to share, including with prospective employers. Each visitor supplies their own keys, which stay in their browser tab only and are cleared on reload.

> Note: because this is a static app with no server, a typed key is sent straight from the browser to Twelve Data/OpenRouter over HTTPS while the app runs. That is fine for a classroom or portfolio demo. A production app would add a backend proxy so keys never reach the browser at all.

## Troubleshooting API errors

When a call fails, the app shows the real reason returned by the service, in the form `(HTTP <code>) <hint> <message>`. Read the code first, then the message.

Common **OpenRouter** (research note) codes:

| Code | Meaning | What to do |
|---|---|---|
| 401 | Key is invalid or missing | Recheck the OpenRouter key you pasted, watch for a stray space |
| 402 | Out of credits (the model is paid) | Add a little credit at https://openrouter.ai/settings/credits, or switch to a free model |
| 429 | Rate limited | Wait a moment, then try again |
| 400, "Provider returned error" | The model provider rejected the request | Read the part after `[provider: ...]`, it names the real problem (often a parameter limit) |

The most common **400** for this app was a reasoning model refusing a small token budget. This template already sets `max_tokens: 2000` and `reasoning: { enabled: false }` in `main.js` to avoid it, so if you change the model or those values and see a 400 again, that is the first thing to check.

**Twelve Data** (price data) errors show their own message too. Usually it is an invalid key, an unknown ticker, or the free plan's limit (8 requests per minute, 800 per day) being hit, in which case wait a minute and retry.

## Deploying to GitHub Pages

Every push to `main` builds the app and redeploys it automatically. No tags or version bumps needed.

```bash
git add .
git commit -m "your change"
git push
```

The site goes live at `https://<your-username>.github.io/<your-repo-name>/` about a minute later. You can also trigger a redeploy manually from the repo's **Actions** tab (Build and Deploy, "Run workflow").

### One-time setup (do this once per repo)

In your repo on GitHub: **Settings, then Pages, then set Source to "GitHub Actions".**

If Source is left on "Deploy from a branch," the build runs but its output is ignored and you will see a broken or unstyled page.

## Notes

- Asset paths in `index.html` are relative (`./style.css`, `./main.js`) and `vite.config.js` sets `base: './'`. This is what makes the site work under the `/<repo-name>/` subpath that GitHub Pages uses. Do not change these to start with a leading `/`.
