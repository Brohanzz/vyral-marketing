# CLAUDE.md — VYRAL Marketing Site

## Architecture — TWO SEPARATE REPOS
This repo (`vyral-marketing`) is the MARKETING SITE only.
It deploys to: `www.getvyral.io`

The APP is a completely separate repo (`vyral-claude/brand-ampli-pro`) at `/Users/johanmortensen/Desktop/VYRAL/vyral-claude/brand-ampli-pro`.
It deploys to: `app.getvyral.io`
Never edit app files from this repo or vice versa.

## Working directory
Main project: `/Users/johanmortensen/Desktop/VYRAL/vyral-marketing`
Git branch: `main`
If you are in a worktree, stop immediately and switch to main before doing anything.

## Stack
- Framework: Next.js 15, App Router, TypeScript
- Styling: Tailwind v4, inline styles
- Hosting: Vercel (auto-deploys from GitHub main branch)
- All pages are pure server components, no external UI libraries

## Design system
- Background: `#080510`
- Primary purple: `#7c3aed`
- Light purple: `#a78bfa`
- Teal: `#2dd4bf` — checkmarks only
- Amber: `#fbbf24` — warnings only
- Headings: Playfair Display 700
- Body: Inter
- Nav: HeroFloatingNav component (global via layout.tsx)
- Footer: MarketingFooter component (global via layout.tsx)

## URL rules — CRITICAL
- Log in button → `https://app.getvyral.io`
- ALL other CTAs (Sign up, Start free trial, Create account, etc.) → `https://www.getvyral.io/beta`
- Never point CTAs to `https://app.getvyral.io` directly

## Code rules
- Nav and Footer are global via `layout.tsx` — never import them per-page
- All pages are static server components — no `"use client"` unless absolutely necessary
- Inline styles only — no Tailwind classes in page files
- Before editing any file, verify it exists and is the right file
- Never touch existing pages when creating new ones

## Site structure
46 static pages across: core, product sub-pages, SEO hubs, solutions, alternatives, company, resources, help, legal
Sitemap: `public/sitemap.xml`
Robots: `public/robots.txt`
