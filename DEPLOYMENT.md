# Deployment Guide

This website should be treated as a standalone static site inside `new-site/`.

Do not initialize Git in `/home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt`.
That root folder contains the old exported site and an unusable `.git` directory.

Use `new-site/` as the repository root instead.

## Recommended workflow

1. Keep `new-site/` as the source of truth.
2. Push it to GitHub.
3. Use GitHub Pages as a temporary live preview while you keep editing.
4. When DSI is ready, give them either:
   - the GitHub repository link, or
   - a `.zip` of the contents of `new-site/`
5. Ask DSI to publish the contents of `new-site/` at the web root for `neaist.tecnico.ulisboa.pt`.

The important detail is this:
DSI should deploy the files inside `new-site/`, not a parent folder containing `new-site/`.

## First-time Git setup

Run these commands from inside `new-site/`:

```bash
cd /home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt/new-site
git init
git add .
git commit -m "Initial NEAIST website rebuild"
```

Then create a GitHub repository and connect it:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-ORG-OR-USER/neaist-site.git
git push -u origin main
```

## Ongoing updates

After future edits:

```bash
cd /home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt/new-site
git add .
git commit -m "Short description of changes"
git push
```

## Temporary deployment with GitHub Pages

GitHub Pages is useful while the site is still evolving.

1. Open the GitHub repository.
2. Go to `Settings`.
3. Open `Pages`.
4. Set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Save.

Your temporary live URL will be something like:

```text
https://YOUR-ORG-OR-USER.github.io/neaist-site/
```

## Moving to the official NEAIST domain

When you visit DSI, the simplest handoff is:

1. Tell them the new site is a static website.
2. Tell them the publishable files are the contents of `new-site/`.
3. Give them the GitHub repo or a zip export.
4. Ask them to replace the current site content served at `neaist.tecnico.ulisboa.pt`.
5. Confirm whether they want:
   - direct file upload,
   - Git-based deployment, or
   - a shared folder / server account.

## Before handing it to DSI

Verify these items:

- All links work locally.
- The email address is correct: `neaist.sa@aeist.pt`
- Social links are correct.
- All required images are present in `images/`.
- `index.html` is the homepage entry point.
- No local-only files or secrets are committed.

## Local preview

```bash
cd /home/ariusazrael/NEAIST/neaist.tecnico.ulisboa.pt/new-site
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
