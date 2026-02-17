# Ushan Shrestha – Professional Portfolio

A fast, responsive, single‑page portfolio for **Ushan Shrestha** built with semantic HTML, modern CSS, and a touch of JavaScript. Optimized for GitHub Pages deployment.

## Preview
Open `index.html` in a browser, or deploy with GitHub Pages (instructions below).

## Project Structure
```
ushan-shrestha-portfolio/
├─ index.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  └─ img/avatar.svg
└─ .github/workflows/github-pages.yml
```

## Deploy to GitHub Pages
### Using Git
1. Initialize the repository and make your first commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ushan Shrestha portfolio"
   git branch -M main
   ```
2. Create a new repository on GitHub (e.g., `ushan-shrestha-portfolio`). Copy its **HTTPS** URL.
3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/ushan-shrestha-portfolio.git
   git push -u origin main
   ```

### Enable Automatic Deployment (GitHub Actions)
This project includes a GitHub Actions workflow that publishes the site to **GitHub Pages** whenever you push to `main`.

After pushing:
- Go to **Settings → Pages** and ensure **Source = GitHub Actions**. If needed, save the setting.
- The workflow will produce a URL like `https://<YOUR_USERNAME>.github.io/ushan-shrestha-portfolio/`.

## Customize
- Replace `assets/img/avatar.svg` with your headshot (e.g., `profile.jpg`) and update `index.html` if needed.
- Edit text in `index.html` to add projects, awards, or a blog.
- Tweak colors in `assets/css/styles.css`.

## License
MIT
