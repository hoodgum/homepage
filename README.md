# hoodgum.com

The website for **Hoodgum Game Studio**, hosted on GitHub Pages. It's plain HTML, CSS and JS, and the devlog uses [Jekyll](https://jekyllrb.com/), which GitHub Pages runs for you automatically every time you push.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The homepage |
| `_posts/` | **Devlog posts** (one Markdown file per post) |
| `devlog/index.html` | The devlog page listing every post |
| `_layouts/`, `_includes/` | Shared page pieces (header, footer, post layout) |
| `_config.yml` | Site settings |
| `styles.css` | All styling |
| `script.js` | Menu, gem collecting, lightbox, scroll effects |
| `404.html` | "Page not found" page |
| `assets/` | Logo, key art, gem, icons |
| `CNAME` | Tells GitHub Pages to serve the site on `hoodgum.com` |

## Writing a devlog post

You can do this entirely on github.com, with no tools needed.

1. Open the `_posts` folder in the repo and click **Add file → Create new file**.
2. Name the file `YEAR-MONTH-DAY-short-title.md`, for example `2026-11-15-new-level-sneak-peek.md`.
3. Paste this in and fill it out:

   ```markdown
   ---
   title: New level sneak peek
   description: One or two sentences shown on the post card and in link previews.
   cover: /assets/devlog/my-cover-image.webp
   cover_alt: Short description of the cover image
   tags: [fynn, levels]
   ---

   Write your post here. **Bold**, *italic* and [links](https://hoodgum.com) all work.

   ## A heading

   - A bullet point
   - Another one

   ![Describe the image](/assets/devlog/my-screenshot.png)
   ```

4. Click **Commit changes**. The post appears at hoodgum.com/devlog within a minute or two, and the newest three also show up on the homepage.

**Images:** upload them into `assets/devlog/` (**Add file → Upload files**), then use `/assets/devlog/your-file-name.png` as the `cover` or in `![...](...)`. Keep images under about 500 KB so pages stay fast; `.webp` or `.jpg` work best. `cover` and `tags` are optional.

**YouTube videos:** paste YouTube's embed code (`<iframe ...></iframe>`) straight into the post.

**Good to know**

- A post dated in the future stays hidden until that date (and until the next change to the site).
- To fix a post, open its file in `_posts`, click the pencil icon, edit and commit.
- To remove a post, delete its file.
- If a post doesn't show up, open the **Actions** tab on GitHub; a red ❌ on the "pages build and deployment" run means there's a typo, usually in the `---` block at the top.

People can follow the devlog with RSS at `https://hoodgum.com/devlog/feed.xml`.

## Preview locally (optional)

Requires Ruby.

```sh
bundle install
bundle exec jekyll serve
# then open http://localhost:4000
```

## Publishing on GitHub Pages

1. The site is published from the `main` branch, so anything pushed or committed there goes live.
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
- **Menu and footer:** edit `_includes/nav.html` and `_includes/footer.html`. These are shared by every page.
- **Images:** replace files in `assets/` and keep the same file names.
- **Colours:** change the variables at the top of `styles.css`.
