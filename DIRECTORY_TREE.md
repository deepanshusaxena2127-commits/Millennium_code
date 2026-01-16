# Complete Project Directory Tree

```
Millennium_code/
│
├── public/
│   └── [static assets]
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── CompanyInfo.jsx
│   │   │   ├── Insights.jsx
│   │   │   └── WorkShowcase.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── toast.jsx
│   │   │   ├── toaster.jsx
│   │   │   └── use-toast.js
│   │   │
│   │   └── utilities/
│   │       ├── ImageHelper.jsx
│   │       ├── CallToAction.jsx
│   │       ├── WelcomeMessage.jsx
│   │       └── HeroImage.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   └── PageTemplates.jsx
│   │
│   ├── lib/
│   │   ├── utils.js
│   │   └── content.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── config/
│   │   └── [future config files]
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
│
├── PROJECT_STRUCTURE.md
└── ORGANIZATION_SUMMARY.md
```

## Component Relationships

### Home Page (`pages/Home.jsx`) includes:
```
Home
├── Hero (sections)
├── Services (sections)
├── Industries (sections)
├── CompanyInfo (sections)
├── WorkShowcase (sections)
└── Insights (sections)
```

### App.jsx Routes:
```
/                          → Home page
/solutions/:slug           → SolutionPage (PageTemplates)
/industries                → Industries component
/industries/:slug          → IndustryPage (PageTemplates)
/company/:slug             → CompanyPage (PageTemplates)
/insights                  → Insights Hub
/insights/:slug            → InsightPage (PageTemplates)
/work                      → Work Showcase
/work/:slug                → WorkPage (PageTemplates)
/contact                   → Contact page
```

## Component Dependencies

### Layout Components
- **Header**: Uses Button from UI
- **Footer**: Uses Button from UI

### Section Components
- **Hero**: Uses Button, Framer Motion
- **Services**: Uses Button, useToast, useNavigate
- **Industries**: Uses useNavigate
- **CompanyInfo**: Uses Button, useNavigate
- **WorkShowcase**: Uses Button, useToast, useNavigate
- **Insights**: Uses Button, useToast

### Page Components
- **Home**: Uses all section components
- **Contact**: Uses Button, Framer Motion, useToast
- **PageTemplates**: Uses getPageImage from utilities, siteContent from lib

## Import Patterns

```javascript
// Layout imports
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Section imports
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';

// UI imports
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Utility imports
import { getPageImage } from '@/components/utilities/ImageHelper';

// Lib imports
import { siteContent } from '@/lib/content';
import { cn } from '@/lib/utils';

// Page imports
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
```

## Component Composition Example

```javascript
// pages/Home.jsx - Composes multiple sections
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      {/* ... */}
    </>
  );
}
```

## Styling Structure

- **Global Styles**: `src/styles/index.css`
  - Tailwind directives
  - Custom utilities
  - Global animations
  
- **Component Styles**: Inline Tailwind classes
  - Each component uses utility classes
  - Consistent with Tailwind approach
  
- **Animations**: Framer Motion
  - Used for entrance animations
  - Interactive transitions
  - Hover effects

## Data Flow

```
App.jsx (Root)
    ↓
Routes (React Router)
    ↓
Pages (Home, Contact, Templates)
    ↓
Sections/Components
    ↓
UI Components + Utilities
```

## Content Management

All static content is in `lib/content.js`:
```javascript
export const siteContent = {
  solutions: { /* ... */ },
  industries: { /* ... */ },
  company: { /* ... */ },
  insights: { /* ... */ },
  work: { /* ... */ }
}
```

Dynamic pages pull data from this centralized content object.

---

**This structure is:**
- ✅ Easy to navigate
- ✅ Simple to maintain
- ✅ Ready to scale
- ✅ Professional
- ✅ Well-organized
