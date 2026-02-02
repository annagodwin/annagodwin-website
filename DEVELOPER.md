# Developer Guide

Technical documentation for developing and maintaining this website.

## Site Structure

```
/
├── index.html          # Home — bio, headshot, intro
├── work.html           # Professional work — featured + chronological list
├── writing.html        # Links to Substack, featured posts
├── making.html         # Gallery grid with lightbox modal
├── assets/
│   ├── css/
│   │   └── styles.css  # Custom styles beyond Tailwind
│   ├── js/
│   │   └── main.js     # Lightbox logic, nav scroll effect
│   └── images/
│       ├── headshot.jpg
│       └── making/     # Gallery images
└── CNAME               # Custom domain configuration
```

## Local Development

This is a static site — no build process required. To preview locally:

1. **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then open http://localhost:8000

2. **Using Node.js (npx serve):**
   ```bash
   npx serve
   ```

3. **Using VS Code Live Server extension** or any other static file server.

## Deployment (GitHub Pages)

The site is configured for GitHub Pages with a custom domain.

1. Push to the `main` branch
2. Go to **Settings → Pages**
3. Set Source to "Deploy from a branch" and select `main`
4. Under Custom domain, enter `annagodwin.com`
5. Enable "Enforce HTTPS"

The `CNAME` file is already configured with `annagodwin.com`.

## Switching Color Palettes

The site uses Tailwind CSS with a configurable color palette. Six palettes are available:

| Key | Name | Description |
|-----|------|-------------|
| `a` | Cool Slate & Sage | Calm, professional, natural undertone (default) |
| `b` | Ochre & Navy | Warmer, confident, classic Bauhaus |
| `c` | Plum & Stone | Sophisticated, moody, distinctive |
| `d` | Rust & Forest | Earthy, grounded, warm |
| `e` | Steel & Coral | Modern, clean, subtle energy |
| `f` | Terracotta & Rose | Original warm palette |

To switch palettes, edit the `activePalette` value in each HTML file:

```javascript
const p = palettes['a'];  // Change 'a' to 'b', 'c', 'd', 'e', or 'f'
```

You'll need to update this in all four HTML files (`index.html`, `work.html`, `writing.html`, `making.html`) and the CSS variables in `styles.css`.

## Adding New Work Items

To add new work items to the Work page, edit `work.html`:

1. For **featured items**, add a new `<article>` card in the Featured section
2. For **list items**, add a new `<div class="work-list-item">` in the appropriate section

Example list item:
```html
<div class="work-list-item flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
  <span class="text-sm text-text/70 sm:w-16 flex-shrink-0">2026</span>
  <div class="flex-grow">
    <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="work-link transition-colors font-medium">
      Title of Work
    </a>
    <span class="text-text/70 ml-1">· Venue or Publication</span>
  </div>
</div>
```

## Adding Gallery Images

To add new images to the Making page:

1. Add the image file to `assets/images/making/`
2. Add a new gallery item in `making.html`:

```html
<div class="gallery-item" data-title="Image Title" data-description="Description of the piece.">
  <img src="/assets/images/making/filename.jpg" alt="Descriptive alt text">
</div>
```

## Technologies

- **Tailwind CSS** (via CDN) — utility-first styling
- **Inter** font family (Google Fonts) — clean, geometric sans-serif
- **Vanilla JavaScript** — lightbox, mobile menu, scroll effects
- **GitHub Pages** — static hosting
