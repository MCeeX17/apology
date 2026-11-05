# For Itumeleng 🌹

A small, step-by-step message page with falling petals and a flower reveal at the end. Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Structure

```
for-itumeleng/
├── index.html      # page markup
├── css/
│   └── style.css   # all styling and animations
├── js/
│   └── script.js   # message steps, petal canvas, flower reveal
├── .gitignore
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your page will be live at `https://<username>.github.io/<repo-name>/`.

## Editing the message

The lines live in the `steps` array at the top of `js/script.js`. Each step has an `emoji`, `badge`, `text` and button label (`btn`).

---

From Mopeli Mopeli
