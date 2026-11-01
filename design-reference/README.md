# VYRAL marketing redesign: build spec (Prompt C)

Read this first. `homepage.html` is the approved homepage design (open it in a browser, the hero loop animates). `tokens.json` is the VYRAL design system tokens. Port structure, tokens, copy and behaviour into real components. Do not ship `homepage.html` itself.

## Rules that apply to every new page
- Light site. Dark bands only where the design has them (Inside VYRAL, Official API, closing call to action plus footer). No dark-mode toggle.
- Fonts: Bricolage Grotesque (headings, 500 and 600), Public Sans (body, 400/500/600), IBM Plex Mono (numerals only, tabular figures). Load with next/font. Words next to a number stay in Public Sans.
- Colours from tokens only. Buttons with white text use `primary-strong` #C2402F, never #E2523F. Gold #F0A830 never as text on light backgrounds. Small labels on light use #C2402F.
- Radius: cards 20px, buttons 12px, loop panel 28px, pills fully round. Warm shadows as in the reference.
- Sentence case. No em dashes. No emoji. No competitor names or competitor claims on new pages.
- Every invented element shows a dashed placeholder pill. The pill component must render `data-placeholder="true"` so a pre-launch check can find any that remain.
- Focus ring 2px #C2402F, offset 2px. Tap targets at least 44px. Contrast AA.
- Mobile first. Below 860px: one column, nav links collapse (logo, Log in, Start free trial stay visible), loop cards stack with vertical connectors.
- Logo: use a placeholder until the real one is chosen. Put it in ONE component (`Logo`) and one favicon set so the swap later touches one place. Placeholder = the coral single-stroke V in the reference nav.

## Homepage sections (in order)
1. Nav: logo, Product (/how-vyral-works), Official API (/linkedin-tool-safe), Pricing (/pricing), Blog (/blog). Right: Log in (app login URL), Start free trial (APP_SIGNUP_URL). Links go to real pages, never anchors.
2. Hero: badge "Built on LinkedIn's official API", headline, subhead, two buttons, trial line, the three-card loop. Loop animation is CSS only, 9s cycle, finished state is the default (if CSS animation is off, everything shows). Respect prefers-reduced-motion. Pause the animation when the loop is off screen.
3. Inside VYRAL (dark band): three cards, Home / Insights / Coach, with dark skeleton screenshots and "Placeholder screenshot" pills.
4. Proof: three testimonial cards. All three are placeholders (names, quotes, stats, photos) and keep their pills.
5. Founders: video placeholder plus "Our story is coming soon" with placeholder pill.
6. Official API (dark band): copy as in the reference, button "Read how access works" to /how-vyral-works.
7. Pricing teaser: Creator, Pro (highlighted), Team. Prices from the single pricing source (below).
8. NEW, not in the reference: compact FAQ, five questions, collapsed accordion on light background, between Pricing and the closing band. Copy below. This keeps the homepage FAQ structured data honest (it must match visible text).
9. Closing band (dark) plus footer (dark).

## Homepage FAQ copy
- **What is VYRAL?** VYRAL is a LinkedIn content intelligence platform built on LinkedIn's official API. It reads the numbers on your own posts, shows what worked, and drafts your next post from it.
- **Is VYRAL safe for my LinkedIn account?** VYRAL only uses LinkedIn's official API. It never scrapes, never adds anything to your browser, and never automates likes, comments or connection requests. You can remove access any time in your LinkedIn settings.
- **How does the free trial work?** Every account starts with 14 days of Pro, no credit card. After the trial, choose Creator or Pro.
- **What happens if I stop paying?** Your account keeps read-only access to your existing history. Nothing new syncs and paid features are unavailable.
- **Who is VYRAL for?** Founders, creators, ghostwriters and teams who post on LinkedIn and want to know what actually works for them.

## Footer (dark)
Columns: Product (How it works, Analytics, AI Coach, Pricing), Resources (Blog, Help center, FAQ, Newsletter, Contact), Compare (every live comparison page, keep the current "vs X" links: these pages carry most of our search impressions, so they must stay linked from every page), Legal (Privacy, Terms, Cookies, DPA, GDPR, Security, Imprint, Cookie settings). Brand line: "Built on LinkedIn's official API." Keep the newsletter signup in the footer, restyled.

## Pricing
- One source of truth for plans and prices (Creator $49/mo or $39/mo yearly, Pro $99/mo or $79/mo yearly, Team custom; trial 14 days of Pro, no credit card; Creator 250 AI runs a month, Pro unlimited). Homepage and pricing page both read from it.
- No free plan anywhere. After trial or if payment stops: read-only access to existing history.
- Pricing page: hero, monthly/yearly toggle, three tier cards, short feature comparison built from the current page's facts, FAQ (visible, matches its structured data), closing band. Keep the facts of the current page; shorten wording.

## SEO and GEO, must hold
- No URL changes. Route group moves are fine; the list of built routes must be identical before and after.
- Every page sets its own title, description, canonical and og:url. Nothing inherits the homepage's canonical or og:url.
- Homepage title: "VYRAL: LinkedIn analytics and AI writing coach". Description: "VYRAL reads the numbers on your LinkedIn posts and drafts the next one from what worked. Built on LinkedIn's official API. 14 days of Pro free."
- Keep homepage JSON-LD types (Organization, SoftwareApplication, Offer, FAQPage) with text matching the visible page. Keep pricing JSON-LD (FAQPage, WebPage) matching its visible FAQ.
- Real text in HTML (server-rendered), not drawn in images or canvas.
