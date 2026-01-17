// src/lib/schema.js
import { SITE } from "./seo";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  description: SITE.description,
  sameAs: [
    "https://www.linkedin.com/company/millenniumai",
    "https://twitter.com/millenniumai"
    // add more when available
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};
