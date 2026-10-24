# The Sukoon Lab — website

The official static website for The Sukoon Lab, built for GitHub Pages.

## Pages
- `index.html` — homepage, featured song, selected poets and releases
- `music.html` — searchable, filterable 66-release catalogue
- `poets.html` — directory of the ten featured poets
- `story.html` — label story
- `*-*.html` — individual poet profiles

## Main assets and scripts
- `styles.css` — current responsive styles shared by the pages
- `site.js` — responsive navigation menu
- `catalogue.js` — the 66-release catalogue, based on the supplied platform-links workbook
- `music.js` — catalogue search, filters, sorting, pagination and embedded YouTube playback
- `poet-profile.js` — release cards on individual poet pages
- Artwork files in the repository root are used by the homepage and catalogue.

Legacy files such as `style.css`, `app.js`, and `script.js` are retained for now; the current HTML pages do not load them.

## Catalogue data policy
- Platform URLs are taken from the supplied workbook; blank fields remain blank.
- YouTube Music search links are labelled as searches when no direct track URL is available.
- Poet/lyricist credits follow the workbook's description-based evidence. Where a person is not explicitly identified, the catalogue says **“Unverified — official lyric credit needed”** rather than guessing.
- Release dates and durations match the supplied workbook.

## Updating the site
Edit the relevant HTML, CSS or JavaScript file, commit the change to the repository, and allow GitHub Pages to publish it. When `styles.css` changes, update the cache-busting query string on all HTML pages so visitors receive the current stylesheet.
