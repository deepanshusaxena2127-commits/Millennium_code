# MillenniumAI - Project Structure Documentation

## Organized Project Architecture

Your project has been reorganized into a clean, scalable class-based structure with logical folder separation:

```
src/
├── components/
│   ├── layout/                    # Layout wrapper components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/                  # Page section components
│   │   ├── Hero.jsx               # Landing page hero section
│   │   ├── Services.jsx           # Services showcase section
│   │   ├── Industries.jsx         # Industries grid section
│   │   ├── CompanyInfo.jsx        # Company information section
│   │   ├── Insights.jsx           # Blog/insights section
│   │   └── WorkShowcase.jsx       # Case studies/portfolio section
│   │
│   ├── ui/                        # Reusable UI components
│   │   ├── button.jsx             # Button component with variants
│   │   ├── toast.jsx              # Toast notification component
│   │   ├── toaster.jsx            # Toast provider wrapper
│   │   └── use-toast.js           # Toast hook/context
│   │
│   └── utilities/                 # Helper/utility components
│       ├── ImageHelper.jsx        # Dynamic image mapping
│       ├── CallToAction.jsx       # CTA component
│       ├── WelcomeMessage.jsx     # Welcome message component
│       └── HeroImage.jsx          # SVG hero icon component
│
├── pages/                         # Page-level components
│   ├── Home.jsx                   # Home page
│   ├── Contact.jsx                # Contact page
│   └── PageTemplates.jsx          # Dynamic page templates
│       ├── SolutionPage
│       ├── IndustryPage
│       ├── CompanyPage
│       ├── InsightPage
│       └── WorkPage
│
├── lib/                           # Utility functions & constants
│   ├── utils.js                   # Helper utilities (cn function)
│   └── content.js                 # Static content data
│
├── styles/                        # Global styles
│   └── index.css                  # Tailwind + custom styles
│
├── config/                        # Configuration files
│   └── [future config files]
│
├── App.jsx                        # Root app component
└── main.jsx                       # Entry point
```

## Component Organization

### Layout Components (`components/layout/`)
- **Header.jsx**: Navigation bar with dropdowns for Solutions, Industries, Company, Insights
- **Footer.jsx**: Footer with contact info, links, and social media

### Section Components (`components/sections/`)
Used on the Home page for different sections:
- **Hero.jsx**: Landing hero with CTA buttons
- **Services.jsx**: Interactive services grid with details
- **Industries.jsx**: Industries we serve grid
- **CompanyInfo.jsx**: Company story and stats
- **WorkShowcase.jsx**: Featured case studies
- **Insights.jsx**: Latest blog posts/insights

### UI Components (`components/ui/`)
Reusable design system components:
- **button.jsx**: Flexible button component with variants (default, outline, secondary, ghost, link, destructive)
- **toast.jsx**: Toast notification components
- **toaster.jsx**: Toast provider
- **use-toast.js**: Hook for showing toasts

### Utility Components (`components/utilities/`)
- **ImageHelper.jsx**: Maps page slugs to images
- **CallToAction.jsx**: Animated CTA text
- **WelcomeMessage.jsx**: Welcome message
- **HeroImage.jsx**: SVG sparkle icon

### Pages (`pages/`)
- **Home.jsx**: Homepage combining all sections
- **Contact.jsx**: Contact form page
- **PageTemplates.jsx**: Template components for dynamic routes

### Libraries (`lib/`)
- **utils.js**: Utility functions (cn for className merging)
- **content.js**: Static content database for all dynamic pages

## Import Paths

All imports use the `@/` alias pointing to `src/`:

```javascript
// Examples:
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { siteContent } from '@/lib/content';
import Home from '@/pages/Home';
```

## Route Structure

```
/                           → Home page (all sections)
/solutions/:slug            → Solution detail page (dynamic)
/industries                 → Industries grid
/industries/:slug           → Industry detail page (dynamic)
/company/:slug              → Company page (dynamic)
/insights                   → Insights hub
/insights/:slug             → Insight detail page (dynamic)
/work                       → Work showcase
/work/:slug                 → Work detail page (dynamic)
/contact                    → Contact form page
```

## Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Radix UI**: Headless UI components (for Toast, etc.)
- **Custom CSS**: Global styles in `src/styles/index.css`

## Key Features

✅ **Modular Architecture**: Easy to find and update components
✅ **Scalable Structure**: Ready for growth and new features
✅ **Reusable Components**: UI components can be used anywhere
✅ **Centralized Content**: All content in `lib/content.js`
✅ **Dynamic Routing**: Template-based pages for scalability
✅ **Professional Layout**: Clear separation of concerns

## Adding New Features

### Add a new section:
1. Create component in `components/sections/`
2. Import and add to `pages/Home.jsx`

### Add a new UI component:
1. Create in `components/ui/`
2. Export from component file
3. Import where needed

### Add new page content:
1. Add data to `lib/content.js`
2. Create new route in `App.jsx`
3. Use template if applicable

## Development Tips

- Use existing components as templates for new ones
- Keep components focused and single-responsibility
- Leverage Tailwind utility classes for styling
- Use Framer Motion for entrance animations
- Test responsive design on mobile/tablet/desktop
- Keep imports organized and use path aliases

## Build & Deploy

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

**Last Updated**: January 8, 2026
**Project**: MillenniumAI Web Application
