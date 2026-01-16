# Quick Reference Guide

## Folder Purpose Guide

| Folder | Purpose | Contains |
|--------|---------|----------|
| `components/layout/` | Page structure | Header, Footer, Layouts |
| `components/sections/` | Page sections | Hero, Services, Industries, etc. |
| `components/ui/` | Reusable UI | Button, Toast, Form elements |
| `components/utilities/` | Helpers | Icons, Image mappers, small helpers |
| `pages/` | Route pages | Home, Contact, Page templates |
| `lib/` | Core utilities | Content, helper functions |
| `styles/` | Global CSS | Tailwind, animations, themes |
| `config/` | Configuration | Future: env, theme, settings |

## Common Tasks

### Add a New Section to Home Page
```javascript
// 1. Create in components/sections/
// src/components/sections/NewSection.jsx
import React from 'react';

export default function NewSection() {
  return <section>Your content</section>;
}

// 2. Import in Home page
// src/pages/Home.jsx
import NewSection from '@/components/sections/NewSection';

// 3. Add to JSX
export default function Home() {
  return (
    <>
      {/* ... other sections ... */}
      <NewSection />
    </>
  );
}
```

### Add a New Route
```javascript
// src/App.jsx
<Routes>
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

### Add New Content to Page Templates
```javascript
// lib/content.js - Add your data
export const siteContent = {
  solutions: {
    'new-solution': {
      title: 'New Solution',
      description: '...',
      content: '...',
      features: [...]
    }
  }
}

// Now accessible via /solutions/new-solution
```

### Use Toast Notifications
```javascript
import { useToast } from '@/components/ui/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  return (
    <button onClick={() => {
      toast({
        title: "Success",
        description: "Your action was successful"
      });
    }}>
      Click me
    </button>
  );
}
```

## File Location Quick Lookup

**Need to find...**

- Navigation bar → `components/layout/Header.jsx`
- Footer → `components/layout/Footer.jsx`
- Hero section → `components/sections/Hero.jsx`
- Services listing → `components/sections/Services.jsx`
- Industries → `components/sections/Industries.jsx`
- Company info → `components/sections/CompanyInfo.jsx`
- Blog/Insights → `components/sections/Insights.jsx`
- Case studies → `components/sections/WorkShowcase.jsx`
- Home page → `pages/Home.jsx`
- Contact form → `pages/Contact.jsx`
- Dynamic pages → `pages/PageTemplates.jsx`
- Button component → `components/ui/button.jsx`
- Toast system → `components/ui/use-toast.js`
- Static content → `lib/content.js`
- Utilities → `lib/utils.js`

## Import Aliases

```javascript
@/components/layout/Header      → Header component
@/components/sections/Hero       → Hero section
@/components/ui/button           → Button UI
@/pages/Home                     → Home page
@/lib/content                    → Content data
@/lib/utils                      → Utilities
@/styles/index.css              → Global styles
```

## Component Export/Import Examples

### Export a component
```javascript
// src/components/sections/NewSection.jsx
export default function NewSection() {
  return <div>Content</div>;
}
```

### Export named component
```javascript
// src/components/ui/button.jsx
export { Button, buttonVariants };
```

### Import default
```javascript
import NewSection from '@/components/sections/NewSection';
```

### Import named
```javascript
import { Button } from '@/components/ui/button';
```

## Component Props Pattern

```javascript
// Create flexible components
function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div>
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
```

## Styling Pattern

```javascript
// Use Tailwind utilities
<div className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
  Content
</div>

// Use cn() for conditional classes
import { cn } from '@/lib/utils';

<button className={cn(
  "p-2 rounded",
  isActive ? "bg-blue-600" : "bg-gray-200"
)}>
  Button
</button>
```

## Animation Pattern

```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Animated content
</motion.div>
```

## Navigation Pattern

```javascript
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/solutions/nlp')}>
      View NLP Solution
    </button>
  );
}
```

## Data Access Pattern

```javascript
import { siteContent } from '@/lib/content';

// Access any content
const solution = siteContent.solutions['generative-ai'];
const industry = siteContent.industries['healthcare'];
```

## File Naming Conventions

- **React Components**: PascalCase
  - `Header.jsx`, `ServiceCard.jsx`, `ContactForm.jsx`
  
- **Regular Functions**: camelCase
  - `utils.js`, `helpers.js`, `constants.js`
  
- **Folders**: kebab-case (lowercase with hyphens)
  - `components/`, `layout/`, `ui-components/`
  
- **CSS Classes**: kebab-case (from Tailwind)
  - `bg-blue-600`, `text-gray-700`, `rounded-lg`

## Testing the Structure

```bash
# Check if everything builds
npm run build

# Run development server
npm run dev

# Test routes
# Visit http://localhost:3000/
# Try different routes like /solutions/nlp, /contact, etc.
```

## Common Errors & Solutions

**Error**: `Module not found '@/components/...`
**Solution**: Check file path and ensure file exists in correct folder

**Error**: `Cannot find module 'use-toast'`
**Solution**: Make sure imports are from `@/components/ui/use-toast`

**Error**: Component not rendering
**Solution**: Check if route is added in `App.jsx`

**Error**: Content not showing
**Solution**: Verify data is added to `lib/content.js`

---

## Pro Tips

1. **Keep components focused** - One responsibility per component
2. **Use composition** - Build complex UI from simple components
3. **Reuse utilities** - Use existing functions/components
4. **Follow patterns** - Copy structure from existing components
5. **Check imports** - Use `@/` alias for clean paths
6. **Test after changes** - Run `npm run dev` to verify
7. **Keep content separate** - All static content in `lib/content.js`
8. **Use TypeScript** - Consider adding `.ts` for type safety later

---

**Happy Coding! 🚀**
