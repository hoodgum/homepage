# hoodgum.com

The website for **Hoodgum Game Studio**. It's a static site (plain HTML, CSS and JS, no build step) hosted on GitHub Pages.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The homepage |
| `styles.css` | All styling |
| `script.js` | Menu, gem collecting, lightbox, scroll effects |
| `404.html` | "Page not found" page |
| `assets/` | Logo, key art, gem, icons |
| `CNAME` | Tells GitHub Pages to serve the site on `hoodgum.com` |

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing on GitHub Pages

1. Merge this branch into `main`.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, then pick **`main`** and **`/ (root)`**, and save.
4. Under **Custom domain**, enter `hoodgum.com` and save. Once the DNS check passes, tick **Enforce HTTPS**.

### DNS records (at your domain registrar)

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `hoodgum.github.io` |

Remove any other A, AAAA or CNAME records on `@` or `www` (for example, a registrar "parking" page). DNS changes can take up to a day to spread.

## Editing content

- **Text:** edit `index.html`. The Fynn description, the studio values and the contact email (`hello@hoodgum.com`) are all there.
- **Images:** replace files in `assets/` and keep the same file names.
- **Colours:** change the variables at the top of `styles.css`.
