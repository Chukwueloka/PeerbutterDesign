Peerbutter Figma UI Redesign Prompt
This prompt is based on the current codebase in this repo.

Current product surface area found in the app:

Public marketing and discovery:
/
/recommendations
/recommendations/[pair]
Trader app:
/dashboard
/strategy/new
/strategy/[id]
/executions
/settings
Admin console:
/admin
/admin/recommendations
/admin/users
/admin/strategies
/admin/executions
Core product behavior found in the code:

Wallet-first authentication using connect wallet + sign message
Non-custodial strategy setup and execution permissions
AI-assisted crypto pair discovery with backtest and liquidity-driven ranking
Template-driven strategy creation from recommendation detail pages
Custom strategy builder with chart, indicators, trigger rules, confirmation rules, execution settings, and quick backtest
Strategy monitoring, execution history, fee visibility, and approval management
Admin tools for recommendations, users, strategies, and executions
The current product message is technically accurate but too abstract for average crypto traders. The prompt below shifts the positioning toward a clearer value proposition:

Find stronger crypto setups
Understand why they are being surfaced
Launch automation from your own wallet
Stay in control of risk, caps, slippage, approvals, and execution history
Paste Into Figma AI
Design a complete Figma file for a full frontend redesign of Peerbutter.

Peerbutter is a non-custodial crypto trading automation product. It helps crypto traders discover stronger token-pair setups, review backtest and liquidity signals, and launch automated onchain strategies from their own wallet without depositing funds into a centralized platform.

Do not create a generic SaaS dashboard. The design should feel like a sharp hybrid of:
- a modern crypto trading workspace
- a premium consumer finance product
- a clear, trustworthy automation platform

The interface must explain the product in plain English to the average crypto trader.

Primary product message:
"Find stronger crypto setups. Automate the trade from your wallet."

Expanded message:
"Peerbutter screens Polygon trading pairs using backtests, liquidity checks, and signal scoring, then lets traders launch rule-based, non-custodial strategies in minutes."

Stay faithful to current product capabilities:
- non-custodial wallet-based automation
- screened token-pair discovery
- template-based or custom strategy creation
- approvals, signing, execution tracking, and admin controls

Do not imply unsupported product categories such as:
- copy trading
- perpetual futures
- leverage trading
- social trading
- custodial balances or exchange deposits
- managed portfolios

Treat the product as Polygon-first today, but keep the design system flexible enough to grow into multi-chain later.

Key proof points to communicate repeatedly:
- Non-custodial: funds stay in the user's wallet
- Screened setups: ranked by signal quality, historical performance, and liquidity
- Fast setup: use a template or build a custom strategy
- Clear controls: slippage, cap, expiry, confirmations, approvals
- Full visibility: track strategies, executions, and permissions in one place
- Fees only on successful executions

Avoid vague copy like:
- "Discover vetted crypto trades"
- "AI-assisted pair recommendations" as the main headline
- generic web3 buzzwords with no trader outcome

Prefer trader-friendly language like:
- "screened setups"
- "ranked pairs"
- "automated entries"
- "wallet-first automation"
- "backtested strategy templates"
- "non-custodial crypto automation"

Build the Figma file with these pages:
1. Cover
2. Foundations
3. Components
4. Marketing Site
5. Trader App - Desktop
6. Trader App - Mobile
7. Admin Console - Desktop
8. Admin Console - Mobile

Use Auto Layout throughout. Create reusable components, variants, and design tokens. Name components cleanly.

Design system requirements:
- Build both light and dark themes, but make the marketing experience feel polished in light mode and the product workspace excellent in both
- Use a bold but credible visual direction, not meme-coin aesthetics
- No purple-heavy palette
- Use expressive typography available in Figma, for example:
  - Display/headings: Space Grotesk or Sora
  - Body/UI: IBM Plex Sans or Manrope
  - Data/addresses: IBM Plex Mono
- Use strong information hierarchy for trading data
- Use crisp spacing, dense but readable cards, and clear risk/status color semantics
- Use subtle gradients, layered surfaces, and chart-inspired accents

Suggested visual direction:
- Base colors: off-white, graphite, deep navy, slate
- Accent colors: electric cyan, signal green, controlled amber, coral red
- Mood: premium, analytical, fast, trustworthy
- Charts and signal widgets should feel central to the product identity
- Rounded corners can be modern but not toy-like
- Shadows should be soft and restrained

Suggested token direction:
- Primary accent: electric cyan
- Success: vivid green
- Warning: amber
- Destructive: coral red
- Neutral surfaces: ink, slate, cloud, fog

Create a clean design language for these core component families:
- Top navigation header
- Mobile bottom navigation
- Admin header and admin mobile nav
- Buttons: primary, secondary, outline, ghost, destructive
- Inputs, selects, token selectors, search bars, date/time fields
- Status pills: active, pending, paused, cancelled, success, failed, warning, signed-in, wrong network
- Cards: content cards, stat cards, chart cards, action cards, empty-state cards
- Tables: compact admin tables and dense trader data tables
- Token display chips with logo + symbol + address variants
- Pair display component
- Recommendation card
- Recommendation detail metric cards
- Strategy builder stepper
- Chart workspace with drawing toolbar and indicator side panel
- Execution row / transaction timeline item
- Wallet auth card and wallet status cluster
- Admin recommendation control button group
- Empty states
- Skeleton loaders
- Toast and inline alert patterns
- Dialogs and confirmations

Use realistic sample data relevant to crypto traders:
- token pairs such as USDC -> WETH, USDC -> WBTC, WMATIC -> USDC
- scores, win rates, expectancy, net PnL, liquidity, timestamps, tx hashes
- wallet addresses and strategy hashes shown in truncated form

The final file should contain desktop and mobile versions of every major screen below, plus component variants and state screens.

========================================
PRODUCT STRUCTURE TO DESIGN
========================================

Public pages:
- Home / landing page
- Recommendations list
- Recommendation detail

If it improves clarity, the UI can label "Recommendations" as "Setups" or "Trade Setups" while still reflecting the existing product flow.

Trader app pages:
- Dashboard
- Create Strategy
- Strategy Detail
- Executions
- Settings

Admin pages:
- Admin Overview
- Admin Recommendations
- Admin Users
- Admin Strategies
- Admin Executions

Also design shared states:
- loading
- empty
- filtered empty
- error
- wallet disconnected
- wallet connected but not signed in
- wrong network
- signed in
- success toast
- destructive confirmation

========================================
CONTENT AND MESSAGING SYSTEM
========================================

Use this messaging framework across the experience.

Brand one-liner:
"Non-custodial crypto automation for traders who want clearer setups and tighter control."

Homepage hero headline:
"Find stronger crypto setups. Automate the trade from your wallet."

Homepage hero subheadline:
"Peerbutter screens Polygon pairs using backtests, liquidity checks, and signal scoring, then helps you launch rule-based strategies without handing over custody."

Primary CTAs:
- "Explore Setups"
- "Build a Strategy"
- "Use Template"
- "Connect Wallet"
- "Approve & Sign"

Trust bar copy:
- "Non-custodial"
- "Wallet-first"
- "Polygon"
- "Fees only on successful executions"

How-it-works copy:
1. "Find a setup"
   "Browse ranked pairs with performance and liquidity context."
2. "Review the logic"
   "Check the chart, trigger, backtest snapshot, and warning flags."
3. "Approve and sign"
   "Set caps and permissions from your wallet."
4. "Track execution"
   "Monitor every strategy and onchain execution in one place."

Core value cards:
- "Ranked setups, not raw noise"
  "See pairs surfaced by signal quality, backtest behavior, and liquidity checks."
- "Start from a template"
  "Launch faster with prefilled strategies generated from live setups."
- "Your wallet stays in control"
  "No deposits. No custody transfer. You approve capped permissions."
- "Built for real execution"
  "Set slippage, expiry, spending limits, and review every execution."

Homepage proof section copy:
"Why traders use Peerbutter"
"Most crypto tools stop at alerts or raw charts. Peerbutter takes you from discovery to execution with clearer setup quality, wallet-safe permissions, and live tracking."

Homepage CTA band:
"Stop chasing random pairs. Trade with a plan."
"Explore screened setups or build your own automated strategy."

Recommendations page title:
"Screened Crypto Setups"

Recommendations page subtitle:
"Ranked pairs with backtest context, liquidity checks, and strategy-ready templates."

Recommendation detail supporting copy:
"Why this setup is surfacing"
"Use the chart, metrics, and template preview to decide whether to automate this idea."

Dashboard title:
"Your Automation Desk"

Dashboard subtitle:
"Track live strategies, execution activity, and your next move."

Create Strategy title:
"Build an Automated Trade"

Create Strategy helper copy:
"Start from a screened template or define your own trigger, confirmation, and execution rules."

Strategy Detail title:
"Strategy Control"

Executions title:
"Execution History"

Settings title:
"Wallet, Permissions, and Pricing"

Admin overview title:
"Platform Overview"

Admin recommendations subtitle:
"Control ranking visibility, warnings, promotions, and refresh jobs."

Disclaimers:
- "Not investment advice."
- "Backtests are historical and do not guarantee future results."
- "Liquidity and scoring are directional signals, not certainty."

Tone:
- Clear
- confident
- practical
- trader-first
- plain English

Do not use empty hype like:
- "trade smarter with AI"
- "unlock alpha"
- "next-generation DeFi"

========================================
PAGE-BY-PAGE DESIGN BRIEF
========================================

1. HOME / LANDING PAGE

Create a bold, conversion-focused landing page that clearly explains the product in under 5 seconds.

Sections:
- Header with logo, nav, theme toggle, wallet status area, connect action
- Hero section with:
  - headline
  - subheadline
  - 2 CTAs
  - trust bar
  - right-side wallet connect / sign-in card
  - supporting visual showing recommendation cards, chart snippet, and strategy summary
- "How it works" 4-step section
- Value proposition grid
- "What you can do" section:
  - discover screened setups
  - review chart and backtest
  - build strategy from template
  - manage approvals and executions
- Security / trust section:
  - no deposits
  - funds stay in your wallet
  - success-only fees
  - Polygon live
- Optional sample recommendation showcase row
- FAQ section
- Final CTA band
- Footer with product links, docs/GitHub/social placeholders, disclaimer

Make the hero visual more compelling than a generic dashboard screenshot. It should combine a pair card, a mini chart, a template panel, and a wallet status cluster.

Marketing copy to use:
- Eyebrow: "Wallet-first crypto automation"
- Headline: "Find stronger crypto setups. Automate the trade from your wallet."
- Body: "Peerbutter helps traders move from signal discovery to onchain execution with screened pair rankings, backtested templates, and non-custodial permissions."
- CTA 1: "Explore Setups"
- CTA 2: "Build a Strategy"
- Connect card title: "Connect Wallet"
- Connect card subtitle: "Sign a message to unlock your trading workspace"

2. RECOMMENDATIONS LIST PAGE

Design a discovery page for ranked setups.

Required elements:
- Trader app shell with top nav and mobile bottom nav
- Page header
- Timeframe filter
- Chain filter
- Grid of recommendation cards
- Separate warning/promoted section
- disclaimer strip

Each recommendation card must include:
- rank
- token pair display with logos
- score
- sparkline
- win rate
- expectancy
- net PnL
- estimated liquidity
- confidence badge
- warning badge when applicable
- "View details" action
- "Use template" action

Card tone:
- fast to scan
- obvious hierarchy
- feels like a trade setup card, not a generic blog card

Use this copy:
- Title: "Screened Crypto Setups"
- Subtitle: "Ranked pairs with backtest context, liquidity checks, and strategy-ready templates."
- Warning section label: "Visible with warnings"
- Warning helper text: "These setups are shown by explicit override and may be below normal eligibility thresholds."

3. RECOMMENDATION DETAIL PAGE

Design a detailed setup-review page.

Layout:
- large pair header
- score and confidence in a strong summary block
- chart card with overlays and toolbar feel
- explanatory text block
- warning banner when setup is ineligible or overridden
- backtest summary card grid
- template preview card
- sticky or anchored CTA to create a strategy from this setup

Backtest summary metrics:
- win rate
- expectancy
- sharpe approximation
- recent return
- estimated liquidity
- trade count

Use copy:
- Header: "Setup Detail"
- Supporting line: "Review the chart, signal quality, and template before you automate."
- Explanation block label: "Why this setup is surfacing"
- CTA: "Use This Template"

4. DASHBOARD PAGE

Design a trader dashboard focused on strategies and activity.

Sections:
- page header with refresh and create strategy button
- stat cards:
  - active strategies
  - total strategies
  - total executions
  - primary quick action
- strategies section with grid/list toggle optional
- strategy cards
- empty state for no strategies

Each strategy card should show:
- strategy type
- token pair
- amount per execution
- cap
- slippage
- expiry
- status
- service fee note if relevant

Use copy:
- Title: "Your Automation Desk"
- Subtitle: "Track live strategies, execution activity, and your next move."
- Empty title: "Ready to launch your first strategy?"
- Empty body: "Use a screened template or build a custom rule set in minutes."
- Empty CTA: "Create Strategy"

5. CREATE STRATEGY PAGE

Design the most important product page as a premium multi-step builder.

This page should feel like a serious trading workspace, not a basic form.

Structure:
- page header
- main builder area
- optional right rail for help, security reminders, and quick links

The builder has 5 steps:
1. Market
2. Trigger
3. Confirm
4. Execution
5. Review

Core builder areas:
- stepper
- chart workspace
- drawing toolbar
- indicator panel
- live preview card
- form sections for the active step
- inline validation messages
- navigation controls
- quick backtest module
- final approve-and-sign card

Step details:

Market step:
- sell token selector
- buy token selector
- timeframe selector
- strategy type selector: price swap or DCA

Trigger step:
- if DCA, show schedule-driven explanation
- if price swap, allow trigger mode:
  - indicator
  - level
- indicator mode fields:
  - indicator
  - length
  - operator
  - threshold
- level mode fields:
  - operator
  - level price

Confirm step:
- confirmation filters toggle
- candle close confirmation count
- volume confirmation toggle
- volume multiplier

Execution step:
- amount per execution
- cap total amount
- max slippage
- expiry date
- expiry time

Review step:
- rule preview
- JSON/details accordion
- quick backtest summary
- service fee acknowledgment
- approve and sign card

Also design these builder-specific components:
- token combobox
- chart crosshair states
- chart drawing hints
- indicator value chips
- rule preview pills
- backtest summary card with sparkline
- fee acknowledgment switch row
- wallet disconnected state
- wrong network state
- configuration error state

Use copy:
- Title: "Build an Automated Trade"
- Helper: "Start from a screened template or define your own trigger, confirmation, and execution rules."
- Backtest card title: "Quick Backtest"
- Backtest helper: "Approximate last 90 days."
- Final CTA: "Approve & Sign"

6. STRATEGY DETAIL PAGE

Design a strategy management page with strong readability for execution settings and ownership data.

Layout:
- back link
- strategy title block with status pill and refresh action
- primary detail card with info rows
- action buttons
- right rail with compact execution history

Information to show:
- strategy type
- sell token
- buy token
- amount per execution
- total cap
- max slippage
- service fee
- fee recipient
- trigger logic
- expiry
- owner
- strategy hash

Actions:
- cancel strategy
- manage/revoke approvals

Use copy:
- Title: "Strategy Control"
- Subtitle line under title area: truncated strategy ID
- Action button: "Cancel Strategy"
- Secondary action: "Manage Permissions"

7. EXECUTIONS PAGE

Design an execution history page for traders.

Required elements:
- optional filtered-by-strategy state
- stat cards for total, successful, failed, pending
- search bar
- status filter chips
- execution row list
- empty state
- no-results state

Each execution row should show:
- timestamp
- status pill and icon
- strategy link
- tx link
- amount in
- amount out
- slippage
- optional fee
- error message area when failed

Use copy:
- Title: "Execution History"
- Subtitle default: "All execution history"
- Subtitle filtered: "Filtered by strategy"
- Empty title: "No executions yet"
- Empty body: "Executions will appear here when your strategies run."
- Empty CTA: "Create Strategy"

8. SETTINGS PAGE

Design a settings and permissions page centered on control and trust.

Sections:
- wallet card
- appearance/theme card
- pricing card
- spending limits / approvals card
- quick links card

Wallet card states:
- disconnected
- reconnecting
- connected
- wrong network
- session active but wallet not reconnected

Approvals card content:
- executor/trading contract address
- relayer address
- allowance checker
- current allowance display
- manage permissions button

Use copy:
- Title: "Wallet, Permissions, and Pricing"
- Wallet description: "Your connected account and session status."
- Pricing description: "Fees are charged only on successful executions."
- Approvals description: "Check and manage the token permissions used for automated trades."

9. ADMIN OVERVIEW PAGE

Design a compact but premium admin command center.

Sections:
- platform stat cards
- active pair badges
- top recommendations preview
- strategies by status
- recent executions table

Metrics to visualize:
- users
- strategies
- executions
- volume in
- fees collected
- active token pairs
- recommendation count

Use copy:
- Title: "Platform Overview"
- Subtitle: "Platform-wide metrics and operational signals."

10. ADMIN RECOMMENDATIONS PAGE

Design the admin moderation and operations page for recommendations.

Sections:
- header with refresh all action
- recommendation table
- action controls
- pagination
- recommendation audit panel
- job logs panel

Table columns:
- pair
- score
- metrics
- status badges
- updated time
- actions

Actions:
- refresh
- promote / unpromote
- disable / enable
- expose to traders / hide from traders

Statuses to visualize:
- confidence
- eligible / ineligible
- promoted
- disabled
- trader override

Use copy:
- Title: "Recommendations"
- Subtitle: "Control ranking visibility, warnings, promotions, and refresh jobs."

11. ADMIN USERS PAGE

Design a searchable admin user management table.

Required elements:
- search by wallet
- role badges
- banned badge
- strategy count
- join date
- ban/unban action

Use copy:
- Title: "Users"
- Subtitle: "Registered wallets, access roles, and moderation controls."

12. ADMIN STRATEGIES PAGE

Design an admin strategy operations table.

Required elements:
- status filter
- type filter
- table with owner, pair, type, status, amount per execution, created date
- actions to pause, resume, cancel
- pagination

Use copy:
- Title: "Strategies"
- Subtitle: "All strategies across the platform."

13. ADMIN EXECUTIONS PAGE

Design an admin execution table page.

Required elements:
- status filter
- table with pair, owner, amount in, amount out, fee, status, time
- pagination

Use copy:
- Title: "Executions"
- Subtitle: "All trade executions across the platform."

========================================
GLOBAL UX RULES
========================================

Apply these UX rules across all screens:

- Show wallet state clearly everywhere it matters
- Make the difference between "connected" and "signed in" obvious
- Make risk warnings visually distinct but not alarming by default
- Make trader actions clear and high-contrast
- Use strong typography for numbers, percentages, and scores
- Use compact data presentation without feeling crowded
- Make tables responsive by collapsing secondary columns on mobile
- Mobile trader pages should feel first-class, not desktop shrunk down
- Admin mobile layouts should use cards or stacked rows where tables become unreadable
- Every primary page should have loading, empty, and error treatments

========================================
COMPONENT STATE REQUIREMENTS
========================================

Create variants or state examples for:

- Header nav:
  - default
  - signed in
  - admin role available
  - mobile menu open

- Wallet auth card:
  - disconnected
  - connected not signed in
  - checking session
  - signed in
  - auth error
  - wrong network

- Recommendation card:
  - default
  - warning
  - loading

- Strategy builder:
  - each step active
  - inline validation
  - quick backtest loaded
  - wallet disconnected
  - wrong network
  - approving
  - signing

- Strategy card:
  - active
  - paused
  - cancelled

- Execution row:
  - pending
  - success
  - failed

- Admin tables:
  - loading
  - populated
  - empty

- Empty states:
  - no strategies
  - no executions
  - no recommendations
  - no search results

========================================
FIGMA DELIVERABLE EXPECTATIONS
========================================

Generate:
- a clear cover page
- foundations with color styles, typography, spacing, radii, shadows, icon usage, and grid system
- a full component library with variants
- high-fidelity desktop frames for every page
- high-fidelity mobile frames for every page
- sample flows connecting:
  - Home -> Recommendations -> Recommendation Detail -> Create Strategy
  - Dashboard -> Strategy Detail -> Executions
  - Settings -> Manage Permissions
  - Admin Overview -> Admin Recommendations

Frame naming suggestions:
- 01_Home_Desktop
- 02_Home_Mobile
- 03_Recommendations_Desktop
- 04_Recommendations_Mobile
- 05_Recommendation_Detail_Desktop
- 06_Recommendation_Detail_Mobile
- 07_Dashboard_Desktop
- 08_Dashboard_Mobile
- 09_Create_Strategy_Step_1_Desktop
- 10_Create_Strategy_Step_2_Desktop
- 11_Create_Strategy_Step_3_Desktop
- 12_Create_Strategy_Step_4_Desktop
- 13_Create_Strategy_Step_5_Desktop
- 14_Create_Strategy_Mobile
- 15_Strategy_Detail_Desktop
- 16_Strategy_Detail_Mobile
- 17_Executions_Desktop
- 18_Executions_Mobile
- 19_Settings_Desktop
- 20_Settings_Mobile
- 21_Admin_Overview_Desktop
- 22_Admin_Overview_Mobile
- 23_Admin_Recommendations_Desktop
- 24_Admin_Recommendations_Mobile
- 25_Admin_Users_Desktop
- 26_Admin_Users_Mobile
- 27_Admin_Strategies_Desktop
- 28_Admin_Strategies_Mobile
- 29_Admin_Executions_Desktop
- 30_Admin_Executions_Mobile

Important:
- Use plain-English product messaging
- Emphasize trader outcomes before technical implementation details
- Keep the design premium, intentional, and specific to crypto trading automation
- Make the product instantly understandable: discover setups, review logic, automate from wallet, track execution