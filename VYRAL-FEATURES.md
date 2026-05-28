# VYRAL App — Feature Inventory

## Feature Index

| # | Feature | Status | Plan |
|---|---------|--------|------|
| 1 | AI Coach | Fully Built | Pro |
| 2 | Analytics Dashboard | Fully Built | Creator + Pro |
| 3 | Data Analyst | Fully Built | Pro |
| 4 | Blueprint | Fully Built | Creator + Pro |
| 5 | Improve (Patterns, Timing, Recommendations) | Fully Built | Creator + Pro |
| 6 | Calendar & Scheduling | Fully Built | Creator + Pro |
| 7 | Post Scoring | Fully Built | Creator + Pro |
| 8 | Weekly Reviews | Fully Built | Creator + Pro |
| 9 | Posts Library | Fully Built | All |
| 10 | Ideas Generator | Fully Built | Creator + Pro |
| 11 | Campaigns | Fully Built | Creator + Pro |
| 12 | Outcomes / Lead Tracking | Fully Built | Creator + Pro |
| 13 | LinkedIn Integration | Fully Built | Creator + Pro |
| 14 | Goals | Fully Built | Creator + Pro |
| 15 | Notifications | Fully Built | All |
| 16 | Strategy Builder | Fully Built | Pro |
| 17 | Swipe File | Fully Built | Pro |
| 18 | Creator Intelligence | Partially Built | Pro |
| 19 | Writing Patterns / Fingerprint | Fully Built | Creator + Pro |
| 20 | Playbooks | Partially Built | Pro |
| 21 | Public Profile | Fully Built | All |
| 22 | Knowledge / Learning Modules | Fully Built | All |
| 23 | Data Hub (Export) | Fully Built | Creator + Pro |
| 24 | Onboarding Flow | Fully Built | All |
| 25 | Settings & Billing | Fully Built | All |
| 26 | Dashboard (Home) | Fully Built | All |
| 27 | Help Center | Fully Built | All |
| 28 | Command Palette | Fully Built | All |

---

## Detailed Feature Descriptions

---

### 1. AI Coach
**Status:** Fully Built  
**Plan:** Pro

The primary content creation workspace. A multi-tab interface where users can spar with Claude AI in real-time to develop post ideas, optimize drafts, and align content to their voice profile and Blueprint. The Sparring tab supports streaming chat with pattern-aware context; the Hooks tab surfaces a library of high-performing hook formats; the Top Posts tab lets users browse winning content for inspiration; and the Voice Examples tab lets users curate example posts that train their AI voice profile.

Post scoring runs inline within the coach — Hook Clarity, Structure, Tone Alignment, and Citability are all displayed live. Users can schedule or publish directly to LinkedIn from the Coach without leaving the page.

---

### 2. Analytics Dashboard
**Status:** Fully Built  
**Plan:** Creator + Pro

A multi-tab performance analytics system giving users a comprehensive view of their LinkedIn content metrics. The Overview tab shows a KPI hero strip (impressions, engagement rate, follower growth, post count) with period-over-period comparison. The Content tab breaks down performance by content type, hashtag, and Blueprint pillar. An AI-generated Performance Report synthesizes the period's results in plain language.

Includes a measurement mode selector (Views / Impressions / Engagement Rate), peer benchmarks, a top posts table, and customizable date ranges. Data syncs via the official LinkedIn Community Management API.

---

### 3. Data Analyst
**Status:** Fully Built  
**Plan:** Pro

A conversational data interface embedded within the analytics experience. Users type natural-language questions ("What content type got the most impressions last month?") and the AI generates queries against their actual data, returning answers in plain English with supporting figures. Maintains up to 10 conversation turns of history per session.

---

### 4. Blueprint
**Status:** Fully Built  
**Plan:** Creator + Pro (Free users can view, not edit)

The content strategy foundation of the app. Users define up to four content pillars, each with a name, description, color, and target percentage. A Voice Profile card captures tone words, writing do's and don'ts, and style preferences. An AI-powered Blueprint Review dialog evaluates the strategy's structure and flags gaps. A Blueprint Alignment Score (visible in analytics) shows how well published content matches the defined pillars. Pillar migration tools handle renaming or restructuring without breaking historical data.

---

### 5. Improve (Patterns / Timing / Recommendations)
**Status:** Fully Built  
**Plan:** Creator + Pro

A three-tab optimization center for extracting strategic lessons from content performance.

- **Patterns tab** — Pillar-by-pillar performance breakdown, Writing Fingerprint analysis (hook styles, format preferences, tone consistency), and a "What's Actually Working" summary.
- **Timing tab** — Optimal posting time recommendations, an audience activity heatmap by day and hour, and a timing drilldown sheet showing which time slots correlate with better reach.
- **Recommendations tab** — A "Try This Next" card with a prioritized AI suggestion, instant recommendations by pillar, and broader content strategy nudges.

---

### 6. Calendar & Scheduling
**Status:** Fully Built  
**Plan:** Creator + Pro

A month/week grid calendar for planning and scheduling content. Users can drag and drop posts to new time slots, create new scheduled posts directly on the calendar, and use an AI-powered generation tool to auto-populate a content calendar based on their Blueprint pillars and posting cadence. Scheduled posts are color-coded by pillar. Publishing to LinkedIn is triggered directly from the calendar's schedule dialog.

---

### 7. Post Scoring
**Status:** Fully Built  
**Plan:** Creator + Pro

Each post in the library can be scored across four dimensions: **Hook Clarity**, **Structure**, **Tone Alignment**, and **Citability / Authenticity**. Scores are generated by Claude and displayed as visual breakdowns on the Post Detail page and inline in the Coach. Citability and Authenticity badges appear as quick-read indicators. Scores are stored in `post_analysis` and can be regenerated on demand.

---

### 8. Weekly Reviews
**Status:** Fully Built  
**Plan:** Creator + Pro

Auto-generated summaries produced by a cron job every week covering wins, risks, key stats, and forward recommendations. Users can view the full review archive on the Reviews page, drill into any individual review, and select custom date ranges (7d, 14d, 30d, or custom). Each review includes a Performance Delta card showing metric changes versus the prior period and a Trend chart. AI insights highlight patterns that may not be obvious from raw numbers.

---

### 9. Posts Library
**Status:** Fully Built  
**Plan:** All

The central repository of all user posts — published, drafted, and scheduled. Supports filtering by status, campaign, pillar, and date. Posts can be imported from LinkedIn via the official API or added manually. Bulk actions include archive, delete, and campaign assignment. Each post links through to Post Detail for deep analysis.

---

### 10. Ideas Generator
**Status:** Fully Built  
**Plan:** Creator + Pro

An idea bank that surfaces and stores AI-generated content ideas. Ideas can be generated from top-performing posts (surfacing what topics resonated), from a custom prompt, or auto-suggested based on pillar gaps. Each idea carries a rating, pillar tag, and optional campaign assignment. Users can filter the bank by pillar, rating, source, and campaign, and promote ideas directly into the Coach for drafting.

---

### 11. Campaigns
**Status:** Fully Built  
**Plan:** Creator + Pro

A campaign management layer for grouping posts around a specific initiative, launch, or topic sprint. Each campaign has a name, goal, status, and linked posts. The Campaign Detail page shows aggregated performance metrics across all posts in the campaign, including outcomes/leads attributed to it. Campaigns feed into the Outcomes tracking system for ROI measurement.

---

### 12. Outcomes / Lead Tracking
**Status:** Fully Built  
**Plan:** Creator + Pro

A lightweight CRM layer for tracking business results from content. Users log leads and opportunities (stage: prospect / opportunity / client), tag them to a source post or campaign, and optionally record a pipeline value. The Outcomes page shows total pipeline valuation, attribution by campaign, and a filterable lead list. Data is exportable via the Data Hub.

---

### 13. LinkedIn Integration
**Status:** Fully Built  
**Plan:** Creator + Pro (publishing); All (import)

Full OAuth-based LinkedIn connection using the official Community Management and Share APIs. Covers: publishing posts directly from the app (Coach, Calendar, Post Detail), importing historical posts via the official API or CSV upload, syncing analytics data (impressions, engagement, follower growth) via scheduled cron jobs, and token expiry monitoring with an in-app banner when re-auth is needed.

---

### 14. Goals
**Status:** Fully Built  
**Plan:** Creator + Pro

Goals are defined during the Strategy Builder onboarding flow and tracked on the Dashboard via a Goals widget. Weekly progress toward posting cadence targets and engagement benchmarks is surfaced as a completion bar. Goals tie into the Outcomes system for business-level tracking (leads generated, pipeline created).

---

### 15. Notifications
**Status:** Fully Built  
**Plan:** All

A unified notification center accessible from the top navigation bell icon. Notifications are generated by backend edge functions for events like completed weekly reviews, LinkedIn token expiry warnings, and sync completions. Each notification carries a severity level (info / success / warning) and an optional CTA link. Users can mark individual notifications or all as read.

---

### 16. Strategy Builder
**Status:** Fully Built  
**Plan:** Pro

A seven-step guided wizard for constructing a full content strategy from scratch. Steps: (1) Positioning & goals, (2) Target audience, (3) Messaging & tone, (4) Content pillar definitions, (5) Format preferences & posting cadence, (6) Growth ladder tier selection, (7) Monetization model & conversion paths. Progress is saved per session so users can resume. The output populates the Blueprint.

---

### 17. Swipe File
**Status:** Fully Built  
**Plan:** Pro

An inspiration library for saving LinkedIn posts from other creators. Saved posts can be tagged, categorized, and analyzed (AI breaks down hook type, structure, and what makes the post effective). The Swipe File is accessible from the Coach for reference during drafting sessions.

---

### 18. Creator Intelligence
**Status:** Partially Built  
**Plan:** Pro

A competitor analysis module for tracking other LinkedIn creators. Designed to scrape public profile data, analyze posting frequency and content strategy, and produce comparison summaries. The page and components are built but the feature is currently gated behind an admin/feature flag — not visible to standard users. Full rollout pending.

---

### 19. Writing Patterns / Fingerprint
**Status:** Fully Built  
**Plan:** Creator + Pro

A component within the Improve > Patterns tab that maps a user's writing style across their post history. Surfaces dominant hook styles (question, stat, story, bold claim), preferred formats (list, narrative, short-form), tone consistency score, and the gap between their blueprint-defined voice and their actual published voice. Used by the AI Coach as live context when generating drafts.

---

### 20. Playbooks
**Status:** Partially Built  
**Plan:** Pro

A feature for surfacing and managing "winner" posts that define best-practice content for each pillar. The underlying pages and components exist in the codebase and the Coach references playbook posts as creative reference material. However, the Playbooks route currently redirects to the Posts library — the standalone UI is intentionally hidden while the feature is finalized.

---

### 21. Public Profile
**Status:** Fully Built  
**Plan:** All

A shareable public-facing creator portfolio page generated from VYRAL data. Displays the user's name, headline, featured posts, content pillars, and a brief strategy summary. Users control which content is featured and can toggle visibility. Intended as a lightweight portfolio for coaches and ghostwriters to share with prospects.

---

### 22. Knowledge / Learning Modules
**Status:** Fully Built  
**Plan:** All

A structured learning center with modular educational content on LinkedIn growth strategy, content frameworks, and platform mechanics. Users can track completion per module, take notes within modules, and resume where they left off. Progress is persisted per user in the database.

---

### 23. Data Hub (Export)
**Status:** Fully Built  
**Plan:** Creator + Pro

A central export interface for downloading user data. Supports CSV export of posts (with metrics), outcomes/leads, and profile metric snapshots. Shows a history of past import jobs (LinkedIn API syncs). Intended for users who want to analyze their data in external tools or keep local backups.

---

### 24. Onboarding Flow
**Status:** Fully Built  
**Plan:** All

A multi-step onboarding wizard that runs on first login. Covers: LinkedIn connection, initial Blueprint creation (with AI-assisted pillar suggestions based on profile), historical post import, profile setup, and goal setting. Includes an upsell flow for free users. Post-onboarding, a product tour is available for the Coach and other key pages.

---

### 25. Settings & Billing
**Status:** Fully Built  
**Plan:** All

A tabbed settings area covering: account details, plan and subscription management (Stripe-integrated), LinkedIn integration status and reconnect flow, notification preferences, AI model preferences, privacy and data controls, and public profile visibility. Plan upgrades flow through a Stripe-hosted checkout.

---

### 26. Dashboard (Home)
**Status:** Fully Built  
**Plan:** All

The landing page after login. Shows a KPI strip (views, engagement, posts this week), a week-over-week comparison card, a follower growth strip with trend direction, a Goals completion widget, a Next Actions panel surfacing the most important thing to do next, and a recent activity feed. Data freshness indicators show when analytics last synced.

---

### 27. Help Center
**Status:** Fully Built  
**Plan:** All

An in-app help center with 40+ articles covering every major feature. Articles are organized by feature area and rendered at `/help/*` routes. Includes an AI-powered help chatbot (HelpChatbot) accessible from anywhere in the app via a floating trigger.

---

### 28. Command Palette
**Status:** Fully Built  
**Plan:** All

A Cmd+K (Mac) / Ctrl+K (Windows) command palette for fast navigation to any page, feature, or action in the app without using the sidebar. Supports search across routes and common actions.

---

## Plan Tier Summary

| Feature | Free | Creator ($49) | Pro ($99) |
|---------|:----:|:-------------:|:---------:|
| Dashboard | ✓ | ✓ | ✓ |
| Posts Library | ✓ (view) | ✓ | ✓ |
| Blueprint | View only | ✓ | ✓ |
| Analytics Overview | Limited | ✓ | ✓ |
| Advanced Analytics | ✗ | ✓ | ✓ |
| Improve / Patterns | ✗ | ✓ | ✓ |
| Calendar & Scheduling | ✗ | ✓ | ✓ |
| Ideas Generator | ✗ | ✓ | ✓ |
| Campaigns | ✗ | ✓ | ✓ |
| Outcomes / Lead Tracking | ✗ | ✓ | ✓ |
| LinkedIn Publishing | ✗ | ✓ | ✓ |
| Post Scoring | ✗ | ✓ | ✓ |
| Weekly Reviews | ✗ | ✓ | ✓ |
| Writing Patterns | ✗ | ✓ | ✓ |
| Goals Tracking | ✗ | ✓ | ✓ |
| Data Hub (Export) | ✗ | ✓ | ✓ |
| AI Coach (Claude) | ✗ | ✗ | ✓ |
| Data Analyst | ✗ | ✗ | ✓ |
| Strategy Builder | ✗ | ✗ | ✓ |
| Swipe File | ✗ | ✗ | ✓ |
| Creator Intelligence | ✗ | ✗ | ✓ (restricted) |
| Playbooks | ✗ | ✗ | ✓ (hidden) |
| Notifications | ✓ | ✓ | ✓ |
| Help Center | ✓ | ✓ | ✓ |
| Public Profile | ✓ | ✓ | ✓ |
| Knowledge Modules | ✓ | ✓ | ✓ |
| Command Palette | ✓ | ✓ | ✓ |
| Settings & Billing | ✓ | ✓ | ✓ |

---

*Generated: 2026-05-28. Based on codebase at `vyral-claude/brand-ampli-pro` main branch.*
