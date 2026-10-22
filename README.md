# The Sukoon Lab — website v2

A responsive static website concept for GitHub Pages, designed around cinematic Urdu poetry and contemporary AI-produced music.

## Files
- `index.html` — page structure and copy
- `styles.css` — responsive design and visual system
- `catalogue.js` — release data; add verified catalogue entries here
- `app.js` — release rendering, genre filters and mobile navigation
- `assets/` — artwork crops taken from the screenshots supplied in the conversation

## Preview locally
Open `index.html` in a modern browser. For a local server, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## Deploy to GitHub Pages
1. Download and extract the ZIP.
2. Back up the current repository.
3. Upload the contents of this folder to the repository root (keep the `assets` folder).
4. Commit and push; GitHub Pages should publish the static site from the configured branch/folder.

## Important catalogue note
This version contains the releases whose titles were visible in the current site screenshots or explicitly mentioned in the conversation. It does **not** invent the other titles from the 32-release Spotify catalogue. `catalogue.js` is deliberately data-driven: each additional verified release can be added as one object, and the catalogue grid and filters update automatically. Some platform links for catalogue entries are placeholders to platform home pages where the exact release URL was not available in the supplied material; replace those with exact links before publishing. The featured *Kuch To Hawa Bhi Sard Thi* links are taken from the existing website; the *Baat Karni* YouTube link is the one supplied in the conversation.

## Before publishing
- Add the remaining verified Spotify releases and exact platform URLs to `catalogue.js`.
- Replace reused/cropped artwork with original high-resolution cover files when available.
- Check rights before reproducing complete poems or lyrics.
- Review credits and descriptions for each release.
