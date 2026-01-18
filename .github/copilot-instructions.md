# Copilot Instructions — MillenniumAI

## Purpose
Guide AI coding agents to be immediately productive in this content-driven Vite + React SPA for enterprise AI data annotation services.

## Quick Commands
```bash
npm run dev       # Start Vite dev server (http://localhost:3000, hot-reload enabled)
npm run lint      # Run ESLint (CI will block PRs with errors)
npm run build     # Create production build in dist/
npm run preview   # Serve dist/ locally to test production build
```

## Big Picture: Why This Codebase Is Organized This Way

**Stack:** Vite 5 + React 18 + React Router v6 + TailwindCSS 3.4 + Framer-motion 11

**Architecture Pattern:** Content-driven SPA with single source of truth
- All copy, metadata, and structured data lives in [src/lib/content.js](src/lib/content.js) (`siteContent` object)
- Navigation UI in [src/components/layout/Header.jsx](src/components/layout/Header.jsx) is always derived from content
- Two page types: **hardcoded pages** (complex bespoke UI) and **dynamic templates** (auto-render from content)
- 7 solutions × 12 industries = 84 potential pages, mostly generated from templates, not hand-coded

**Why this matters:** Adding a new solution or industry requires updating 3 files in lockstep (the "Three-Point Sync" below). Missing one sync point breaks navigation, links, or images.

## ⚠️ Critical: Three-Point Sync Pattern

**Mandatory when adding/renaming ANY solution or industry slug:**

1. [src/lib/content.js](src/lib/content.js) — Add entry to `siteContent.solutions['slug']` or `siteContent.industriesComprehensive['slug']`
2. [src/components/layout/Header.jsx](src/components/layout/Header.jsx) — Add to `solutions` or `industries` dropdown array with path, icon, title
3. [src/components/utilities/ImageHelper.jsx](src/components/utilities/ImageHelper.jsx) — Add `case 'slug'` in `getPageImage()` with Unsplash image URL

**Example: Adding "video-annotation" solution**
```javascript
// content.js
siteContent.solutions['video-annotation'] = {
  title: 'Video Annotation',
  heroTitle: '...',
  description: '...',
  features: [...]
}

// Header.jsx — add to solutions array
{ title: 'Video Annotation', icon: Video, path: '/solutions/video-annotation' }

// ImageHelper.jsx — add case
case 'video-annotation':
  return <img alt="..." src="https://images.unsplash.com/..." />;
```

**Failure mode:** Missing one step = broken nav menu link OR missing hero image OR 404 on new page.

## Core Architecture Files

| File | Purpose |
|------|---------|
| [src/lib/content.js](src/lib/content.js) | **Content authority** — siteContent object with all copy, metadata, features |
| [src/App.jsx](src/App.jsx) | **Routing hub** — explicit routes first, then `:slug` fallbacks |
| [src/pages/PageTemplates.jsx](src/pages/PageTemplates.jsx) | **Template engine** — SolutionPage, IndustryPage, CompanyPage render from slug + content |
| [src/components/layout/Header.jsx](src/components/layout/Header.jsx) | **Navigation source** — dropdown arrays synced with content.js |
| [src/components/utilities/ImageHelper.jsx](src/components/utilities/ImageHelper.jsx) | **Image mapping** — getPageImage(slug, type) returns hero image JSX |
| [src/lib/animations.js](src/lib/animations.js) | **Animation library** — containerVariants, itemVariants, sectionHeaderVariants |
| [src/styles/index.css](src/styles/index.css) | **Global CSS vars** — --primary, --background, --card, etc. used in Tailwind |
| [tailwind.config.js](tailwind.config.js) | **Tailwind theme** — extends base colors from CSS variables |

## Route Precedence Pattern (Order Matters!)

Routes evaluated top-to-bottom in [src/App.jsx](src/App.jsx). **Explicit routes MUST come before fallback dynamic routes:**

```jsx
// ✅ CORRECT: specific routes first
<Route path="/solutions/nlp" element={<NLPSolutions />} />
<Route path="/solutions/generative-ai" element={<GenerativeAISolutions />} />
<Route path="/solutions/:slug" element={<SolutionPage />} />  // fallback

// ❌ WRONG: would catch /solutions/nlp before reaching explicit route
<Route path="/solutions/:slug" element={<SolutionPage />} />
<Route path="/solutions/nlp" element={<NLPSolutions />} />  // never reached
```

**Decision rule:**
- **Hardcoded page needed** (custom sections, state, unique interactions) → Create new component in `src/pages/`, add explicit route BEFORE `:slug` fallback
- **Data-driven template sufficient** (simple hero + content blocks) → Use dynamic route with `:slug`, PageTemplates auto-renders from content

## Common Workflows

### Add a New Solution or Industry
1. Open [src/lib/content.js](src/lib/content.js), add to `solutions` or `industriesComprehensive` object
2. Update [src/components/layout/Header.jsx](src/components/layout/Header.jsx) → add to solutions/industries dropdown array
3. Update [src/components/utilities/ImageHelper.jsx](src/components/utilities/ImageHelper.jsx) → add case statement with image URL
4. ✅ Verify: `npm run lint && npm run dev` then visit the new route

### Create a Hardcoded Page (Complex UI)
1. Copy pattern from [src/pages/ManufacturingSolutions.jsx](src/pages/ManufacturingSolutions.jsx) or [src/pages/NLPSolutions.jsx](src/pages/NLPSolutions.jsx)
2. Structure: Hero → Feature sections (use state for expandable accordions) → Case studies → FAQs → CTA
3. Import data from `siteContent` or hardcode if intentionally unique
4. Add explicit route in [src/App.jsx](src/App.jsx) BEFORE `:slug` fallback
5. Add to [src/components/layout/Header.jsx](src/components/layout/Header.jsx) if it needs nav menu entry
6. Import Framer-motion variants from [src/lib/animations.js](src/lib/animations.js) for consistency

### Update Page Copy or Metadata
1. Find the slug in [src/lib/content.js](src/lib/content.js)
2. Edit `title`, `description`, `features`, `benefits`, `caseStudies`, or other fields
3. No JSX changes needed — components auto-read updated data
4. ✅ Test: `npm run dev`, refresh page, verify changes appear

### Add Animations to a Section
1. Import variants from [src/lib/animations.js](src/lib/animations.js):
   ```jsx
   import { containerVariants, itemVariants, viewportSettings } from '@/lib/animations'
   ```
2. Wrap section root:
   ```jsx
   <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings}>
   ```
3. Wrap child items:
   ```jsx
   {items.map(item => <motion.div variants={itemVariants} key={item}>{item}</motion.div>)}
   ```

### Create Expandable Accordion Sections
```jsx
const [activeIndex, setActiveIndex] = useState(0);

{sections.map((section, i) => (
  <div key={i}>
    <button onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}>
      {section.title}
    </button>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {section.content}
    </motion.div>
  </div>
))}
```

## Key Patterns & Conventions

| Pattern | Rule | Example |
|---------|------|---------|
| **Imports** | Always use `@` alias, never relative paths | `import Header from '@/components/layout/Header'` |
| **Content** | All copy in `siteContent`, never hardcode strings in JSX | Reference data via `siteContent.solutions[slug]` |
| **Styling** | Tailwind only; no new CSS files except [src/styles/index.css](src/styles/index.css) | Use `bg-card`, `text-foreground` classes |
| **Animations** | Reuse variants from [src/lib/animations.js](src/lib/animations.js) | Import `containerVariants`, `itemVariants` |
| **SEO** | Wrap every page in `<Helmet>` with title, description, canonical | See [src/pages/NLPSolutions.jsx](src/pages/NLPSolutions.jsx) |
| **Sync** | Any new slug → update content.js + Header.jsx + ImageHelper.jsx | Three-Point Sync above ↑ |

## Absolute "Do Not" Rules

1. **Don't skip Three-Point Sync** — New slug must update all 3 files or nav/images break
2. **Don't hardcode content in JSX** — All copy belongs in [src/lib/content.js](src/lib/content.js)
3. **Don't use relative imports** — Always use `@/path/to/file` alias
4. **Don't bypass ESLint** — Run `npm run lint` before committing
5. **Don't add new CSS files** — Use Tailwind classes + [src/styles/index.css](src/styles/index.css) variables
6. **Don't commit with lint errors** — CI will block PRs with violations
7. **Don't mix `industries` with `industriesComprehensive`** — Always use `siteContent.industriesComprehensive[slug]`

## Development Workflow

**Local Development:**
- `npm run dev` → opens http://localhost:3000 with hot reload
- Changes auto-save and refresh in browser
- Check console for React/ESLint warnings

**Before Committing:**
- Run `npm run lint` — fix all errors (warnings okay)
- Test affected routes in browser
- For new slugs, verify Three-Point Sync across all 3 files

**Production Build:**
- `npm run build` → creates optimized `dist/` folder
- `npm run preview` → test production build locally
- Static site ready to deploy (no server needed)

## Testing Checklist

When adding/updating content, verify:
- ✅ `npm run lint` passes with zero errors
- ✅ `npm run dev` starts without errors
- ✅ New route accessible in browser
- ✅ Hero image appears correctly
- ✅ Navigation menu link works
- ✅ For new solutions/industries: check all 3 sync points (content.js, Header.jsx, ImageHelper.jsx)
- ✅ Page metadata (title, description) correct in `<Helmet>`

---

**Last updated:** January 2026
