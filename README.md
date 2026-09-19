# MakerSense IQ Website

This repository contains the public-facing website for MakerSense IQ.

## Overview

MakerSense IQ is a fabrication pricing and quoting platform focused on 3D printing, CNC, laser, and small shop workflows.

## Live Site

https://makersenseiq.com

## Tech Stack

* Static HTML / CSS
* Cloudflare Pages hosting
* Cloudflare DNS

## Deployment

This site is automatically deployed via Cloudflare Pages.

Workflow:

* Edit files
* Commit to GitHub
* Cloudflare deploys automatically

## Structure

* `index.html`
* `site.webmanifest`
* `images/`
* `learn/` — static Learn index, shared styles, and reusable article template
* `assets/learn/<article-slug>/` — images and other media owned by an article

## Publishing an article

The public site intentionally remains build-free. To add an article, copy
`learn/article-template.html` to `learn/<article-slug>/index.html`, place its
assets in `assets/learn/<article-slug>/`, complete the unique page metadata and
`Article` JSON-LD, then add its card to `learn/index.html`. This keeps pages
fast and directly deployable by Cloudflare Pages without coupling the site to a
CMS before one is needed.

## Notes

This repository is strictly for the website. The pricing engine and hosted application logic are maintained separately.
