## Copilot / AI Agent Instructions — Millennium AI

**Purpose:** Enable AI agents to make productive, architecture-aware contributions to MillenniumAI's Vite + React SPA (AI data annotation platform).

**Key Challenge:** This is a content-driven site with **7 solutions + 12 industries** requiring the **Critical Three-Point Sync** pattern (see below). Content lives in one source of truth (`src/lib/content.js`), navigation menus must stay synchronized, and image mappings must be updated together.

### Quick Start
```bash
npm run dev                # Vite dev server on http://localhost:3000 (auto-opens)
npm run lint               # ESLint (errors block commits)
npm run build && preview   # Production build + preview
```

### Core Architecture

**Stack:** Vite 4.4 + React 18 + React Router v6 + TailwindCSS 3.4 + Framer-motion 11  
**Path alias:** `@` = `src/` (configured in vite.config.js, port 3000)

**Three-tier data structure (the critical foundation):**

1. **Content Authority:** [src/lib/content.js](../src/lib/content.js) (968 lines)  
   - Structure: `siteContent.solutions[slug]`, `siteContent.industriesComprehensive[slug]`, `siteContent.company[slug]`
   - Single source of truth for all copy and data
   - 7 solutions: generative-ai, nlp, computer-vision, content-moderation, document-analysis, speech-transcription, full-stack-dev
   - 12 industries: automotive, healthcare, finance, ecommerce, agriculture, manufacturing, retail, logistics, security, media, legal, education

2. **Explicit Routing:** [src/App.jsx](../src/App.jsx) (82 lines)
   - **Explicit routes FIRST** for hardcoded pages (e.g., `/solutions/nlp` → NLPSolutions)
   - **Fallback dynamic routes SECOND** for template pages (e.g., `/solutions/:slug` → SolutionPage)
   - Route precedence matters: explicit routes evaluated before wildcards

3. **Dynamic Templates:** [src/pages/PageTemplates.jsx](../src/pages/PageTemplates.jsx) (207 lines)
   - `SolutionPage`, `IndustryPage`, `CompanyPage`, `WorkPage`, `InsightPage`
   - Automatically renders content from `siteContent` using URL slug
   - Handles fallback to home if slug not found

4. **Hardcoded Pages** (19 specialized pages including [NLPSolutions.jsx](../src/pages/NLPSolutions.jsx), [ManufacturingSolutions.jsx](../src/pages/ManufacturingSolutions.jsx))
   - Used when page needs custom sections, interactive state, or unique layout
   - Each has explicit route in App.jsx
   - Can reuse data from `siteContent` via imports

**Component Organization:**
- **[src/components/layout/](../src/components/layout/)** — Header, Footer (Header syncs with siteContent solutions/industries)
- **[src/components/sections/](../src/components/sections/)** — Hero, reusable page sections with Framer-motion
- **[src/components/ui/](../src/components/ui/)** — Button, Toast (Radix-UI + Tailwind primitives)
- **[src/components/utilities/](../src/components/utilities/)** — ImageHelper (maps slugs to image URLs)
- **[src/lib/](../src/lib/)** — animations.js (Framer variants), utils.js (cn() utility), content.js (data authority)

### Routing & Data Flow

**CRITICAL: Route Precedence Pattern**  
Routes are evaluated in order — **explicit routes must be defined BEFORE fallback dynamic routes:**

```jsx
// src/App.jsx — actual precedence order:
<Route path="/solutions/nlp" element={<NLPSolutions />} />           // ← EXPLICIT: custom page
<Route path="/solutions/generative-ai" element={<GenerativeAISolutions />} />  // ← EXPLICIT
<Route path="/solutions/:slug" element={<SolutionPage />} />        // ← FALLBACK: dynamic template

// Same pattern for industries:
<Route path="/industries/automotive" element={<AutonomousMobilitySolutions />} />  // EXPLICIT
<Route path="/industries/:slug" element={<IndustryPage />} />  // FALLBACK
```

**When to create hardcoded vs. dynamic:**
- **Hardcoded page** (e.g., NLPSolutions.jsx): Complex UI with expandable sections, state management, multiple custom interactions
- **Dynamic via PageTemplates**: Simple pages fitting hero + content card layout, no custom state needed
- **Rule**: If hardcoded page exists for a slug, define explicit route. Otherwise, `:slug` route auto-renders from PageTemplates.

**Data lookups in PageTemplates:**
```jsx
const { slug } = useParams();
const data = siteContent.solutions[slug];  // or .industriesComprehensive[slug]
if (!data) return <Navigate to="/" />;     // 404 fallback
```

### Critical Three-Point Sync (Do NOT Forget)

**ANY time you add/rename a solution or industry, update ALL THREE:**
1. **[src/lib/content.js](../src/lib/content.js)** — Add entry in `siteContent.solutions[slug]` or `siteContent.industriesComprehensive[slug]`
2. **[src/components/layout/Header.jsx](../src/components/layout/Header.jsx)** — Add to `const solutions = [...]` or `const industries = [...]` dropdown arrays
3. **[src/components/utilities/ImageHelper.jsx](../src/components/utilities/ImageHelper.jsx)** — Add case to `getPageImage(slug, type)` with Unsplash URL

**Sync verification:** `grep -r "your-slug"` across all three files must return matches.  
**Failure = broken nav, missing menu links, broken images.**

### Content Data Structure

**content.js defines three main objects:**
```javascript
siteContent.solutions[slug]           // 7 solutions (generative-ai, nlp, etc.)
siteContent.industriesComprehensive[slug] // 12 comprehensive industry schemas
siteContent.company[slug]            // Company pages (about, leadership, etc.)
```

**Industry data schema (comprehensive):**
```javascript
{
  heroTitle, heroSubtitle, description,
  features: [],      // Key capabilities
  benefits: [],      // Business value
  caseStudies: [{ title, challenge, solution, results }],
  faqs: [{ question, answer }],
  cta: { primary, secondary, description }
}
```

Hardcoded industry pages (e.g., [ManufacturingSolutions.jsx](../src/pages/ManufacturingSolutions.jsx)) use this structure with expandable state. Dynamic PageTemplates render simpler schemas.

### Key Styling & Animation Patterns

**Tailwind + CSS variables** ([src/styles/index.css](../src/styles/index.css)):
- Define theme colors as CSS vars: `--primary`, `--background`, `--card`, etc.
- [tailwind.config.js](../tailwind.config.js) maps them: `primary: "hsl(var(--primary))"`
- **Rule:** No new global CSS; only use Tailwind classes and `cn()` utility

**Framer-motion reusable variants** ([src/lib/animations.js](../src/lib/animations.js)):
- `containerVariants` + `itemVariants` — staggered children animations
- `sectionHeaderVariants` — fade + slide up on scroll
- `viewportSettings` — common scroll-trigger config (`once: true`, `margin: '-80px'`)

Example (from [Hero.jsx](../src/components/sections/Hero.jsx)):
```jsx
<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings}>
  {items.map(item => <motion.div key={item} variants={itemVariants}>{item}</motion.div>)}
</motion.div>
```

**Typography:**
- `src/styles/index.css` defines font families: Inter (body), Poppins (headings), Playfair Display (hero/display)
- H1/H2 use `font-black` (weight 800) with tight letter-spacing
- Don't create custom CSS — all styling via Tailwind classes in JSX

### ⚠️ Critical Three-Point Sync Requirement

**MOST IMPORTANT:** ANY time you add/rename a solution or industry slug, update **ALL THREE** files in lockstep:

1. **[src/lib/content.js](../src/lib/content.js)** — Add entry in `siteContent.solutions[slug]` or `siteContent.industriesComprehensive[slug]`
2. **[src/components/layout/Header.jsx](../src/components/layout/Header.jsx)** — Add to `const solutions = [...]` or `const industries = [...]` dropdown arrays
3. **[src/components/utilities/ImageHelper.jsx](../src/components/utilities/ImageHelper.jsx)** — Add case to `getPageImage(slug, type)` with image URL

**Example: Adding "video-annotation" solution**
```javascript
// 1. content.js: Add to solutions object
'video-annotation': {
  title: 'Video Annotation',
  description: '...',
  content: '...',
  features: [...]
}

// 2. Header.jsx: Add to solutions array
{ title: 'Video Annotation', icon: Video, path: '/solutions/video-annotation' }

// 3. ImageHelper.jsx: Add to switch case
case 'video-annotation':
  return <img src="https://..." alt="..." />;
```

**Verification:** `grep -r "video-annotation" src/` must match all three files before commit.
**Failure mode** = broken nav, missing links, broken images on pages.

### Essential Conventions Quick Reference

| What | How | Where |
|------|-----|-------|
| **Add new solution/industry** | Update all 3 files (content.js, Header, ImageHelper) | Critical sync above ↑ |
| **Page title/description** | Edit `src/lib/content.js`, never hardcode JSX | [siteContent object](../src/lib/content.js#L1) |
| **Import modules** | Always use `@` alias, never relative paths | `import X from '@/lib/content'` |
| **Choose page type** | Hardcoded for complex UI, PageTemplates for data-driven | See "Common Workflows" below |
| **Add page animations** | Use exported variants from animations.js | [containerVariants, itemVariants](../src/lib/animations.js) |
| **Style new elements** | Tailwind only, no CSS files except index.css | [tailwind.config.js](../tailwind.config.js) + Tailwind classes |
| **SEO metadata** | Always wrap page in `<Helmet>` component | Every page needs `<title>`, `<meta name="description">`, `<link rel="canonical">` |
| **Runtime dev issues** | Run `npm run lint` before pushing | CI blocks PRs with lint errors |

### Common Workflows

**Task: Add a new solution (e.g., "Video Annotation")**
1. Open `src/lib/content.js`, add entry under `solutions: { 'video-annotation': { title: '...', description: '...', features: [...], ... } }`
2. Update [src/components/layout/Header.jsx](../src/components/layout/Header.jsx) — add to `const solutions = [...]` array with title, icon, path `/solutions/video-annotation`
3. Optional: If video-annotation needs bespoke UI, create `src/pages/VideoAnnotationSolutions.jsx`, import in App.jsx, add explicit route
4. Otherwise, route to `<Route path="/solutions/:slug" element={<SolutionPage />} />` auto-renders from PageTemplates

**Task: Update an industry's features/benefits**
1. Find industry in `src/lib/content.js` under `industriesComprehensive['manufacturing']` (example)
2. Edit `features: [...]`, `benefits: [...]`, or `caseStudies: [...]` arrays
3. Manually hardcoded industry pages (e.g., [src/pages/ManufacturingSolutions.jsx](../src/pages/ManufacturingSolutions.jsx)) may reference this data — check for imports of `siteContent.industriesComprehensive['manufacturing']` and ensure component re-renders

**Task: Add animations to a new section**
1. Import variants from `src/lib/animations.js` (containerVariants, itemVariants, sectionHeaderVariants)
2. Wrap section root in `<motion.div variants={containerVariants} initial="hidden" animate="visible">`
3. Wrap child items in `<motion.div variants={itemVariants}>`
4. Pair with InView: `import { useInView } from 'framer-motion'; const ref = useRef(); const isInView = useInView(ref);` → `animate={isInView ? "visible" : "hidden"}`

**Task: Create a complex hardcoded industry/solution page**
1. Start by copying pattern from [src/pages/ManufacturingSolutions.jsx](../src/pages/ManufacturingSolutions.jsx) (reference model)
2. Structure: Hero → Expandable categories/sections → Specifications grid → Case studies → FAQs → CTA
3. Use state management (`useState`) for expandable sections (categories, FAQs)
4. Import animations and apply to all sections for consistency
5. Add Helmet for SEO (title, description, canonical URL)
6. Create route in App.jsx pointing to your new page component
7. Update Header.jsx dropdown with link to your page
8. Optionally populate ImageHelper.jsx with hero image for your page

**Task: Style a new page section**
1. Use grid `lg:grid-cols-2 gap-8` for responsive 1-col mobile → 2-col desktop
2. Import Tailwind colors from theme: `bg-card`, `border-border`, `text-foreground`
3. Apply animations via `motion.div`: wrap root in `containerVariants`, items in `itemVariants`
4. Use `viewportSettings` for scroll triggers: `whileInView="visible" viewport={viewportSettings}`
5. Example: `<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings}>`

**Task: Add interactive expandable sections (accordions)**
1. Initialize state: `const [activeIndex, setActiveIndex] = useState(0)`
2. Create button that toggles: `onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}`
3. Wrap content in `motion.div` with conditional height:
```jsx
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
  transition={{ duration: 0.3 }}
  className="overflow-hidden"
>
  {/* Expandable content */}
</motion.div>
```

### ESLint & Code Quality

**Before pushing code:**
```bash
npm run lint  # Enforces React hooks + exhaustive-deps
```

- `react-hooks/rules-of-hooks: error` — Required deps in useEffect/useCallback
- `exhaustive-deps: warn` — Warn if missing deps (enable strict when ready)
- `react/react-in-jsx-scope: off` — No `import React` needed (automatic JSX transform)
- `react/prop-types: off` — Use JSDoc comments or TypeScript instead
- **CI will block PRs with lint errors — fix locally first**

### Page Structure Conventions

**Every solution/industry page should include:**
- `<Helmet>` with `<title>`, `<meta name="description">`, `<link rel="canonical">` (see [NLPSolutions.jsx](../src/pages/NLPSolutions.jsx) for example)
- Hero section with problem/solution positioning
- Feature grid or accordion sections with Framer-motion animations
- Case studies or results demonstration
- CTA section encouraging contact
- Proper usage of `siteContent` for all copy (don't hardcode strings in JSX)

### Absolute "Do Not" Rules

1. **Don't bypass the `@` alias** — Always `import X from '@/components/ui'`, never relative `../../../../`
2. **Don't hardcode content in JSX** — All copy belongs in `src/lib/content.js`; reference from there
3. **Don't create single-use UI components** — Reuse `src/components/ui/*` primitives or delete unused ones
4. **Don't commit with lint errors** — Run `npm run lint` before any PR
5. **Don't manually sync routes/navigation** — Always update all 3 (content.js, Header, ImageHelper) together
6. **Don't modify industries vs industriesComprehensive mix-up** — Use `siteContent.industriesComprehensive` (the comprehensive industry data structure)
7. **Don't add hard-coded hardcoded industry/solution pages without corresponding content.js entry** — Data must exist first

### Key Files to Explore
- **Routing hub:** [src/App.jsx](../src/App.jsx) (82 lines) — all route definitions; explicit routes override fallback patterns
- **Dynamic template engine:** [src/pages/PageTemplates.jsx](../src/pages/PageTemplates.jsx) (207 lines) — `SolutionPage`, `IndustryPage`, `CompanyPage`, `WorkPage` exported; handles fallback `:slug` routes
- **Hardcoded page example:** [src/pages/ManufacturingSolutions.jsx](../src/pages/ManufacturingSolutions.jsx) (500+ lines) — detailed industry-specific page with categorized content; model for new complex pages
- **Navigation source of truth:** [src/components/layout/Header.jsx](../src/components/layout/Header.jsx) (243 lines) — solution/industry dropdown menus; must sync with content.js
- **Content authority:** [src/lib/content.js](../src/lib/content.js) (968 lines) — all copy, structured by solution/industry slug in `siteContent` object
- **Image mapping utility:** [src/components/utilities/ImageHelper.jsx](../src/components/utilities/ImageHelper.jsx) (106 lines) — `getPageImage(slug, type)` centralizes all hero images by page
- **Animation library:** [src/lib/animations.js](../src/lib/animations.js) (87 lines) — reusable framer-motion variants
- **Example section:** [src/components/sections/Hero.jsx](../src/components/sections/Hero.jsx) — master example of animation + responsive layout
- **UI primitives:** [src/components/ui/button.jsx](../src/components/ui/button.jsx), `toaster.jsx` — study before creating new components

### Development Workflow

**Dev Server & Hot Reload:**
- `npm run dev` starts Vite on port 3000 (auto-opens browser)
- Changes save instantly with hot reload
- Lint errors appear in terminal and browser console

**Before Committing:**
- Run `npm run lint` — must pass with **zero warnings** (exhaustive-deps warns but doesn't block)
- **CI blocks PRs with lint errors** — fix locally first using eslint-plugin-react-hooks rules

**Testing Changes:**
1. Start dev server: `npm run dev`
2. Navigate to your route and verify functionality
3. Check console for React warnings/errors
4. If adding a slug, verify all three sync points (content.js, Header.jsx, ImageHelper.jsx)
5. For complex pages, test expandable sections, animations, SEO metadata

**Production Build:**
- `npm run build` creates `dist/` folder with optimized assets
- `npm run preview` serves built files locally to test before deployment

### Questions to Ask Before Editing
- "Which data-source owns this?" (JSX hardcoding vs. `siteContent` vs. config file?)
- "Will this change break navigation?" (Updating slug? Update Header + App.jsx routes + PageTemplates)
- "Can I reuse existing UI/animations?" (Check `src/lib/animations.js` and `src/components/ui/`)
- "Is this scalable?" (If adding a 10th solution, should it be in `siteContent` + dynamic route, not a new hardcoded page?)

---
**Last updated:** January 2026