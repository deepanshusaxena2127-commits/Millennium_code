// src/lib/seo.js

export const SITE = {
  name: "MillenniumAI",
  legalName: "MillenniumAI Private Limited",
  url: "https://www.millenniumai.com", // change when live
  logo: "/logo.png",
  description:
    "MillenniumAI is a global AI data services company specializing in data annotation, NLP, computer vision, and enterprise AI solutions.",
  locale: "en_US",
  twitterHandle: "@millenniumai", // optional
};

export const DEFAULT_SEO = {
  titleTemplate: "%s | MillenniumAI",
  defaultTitle: "Enterprise AI Data Annotation & NLP Services",
  description:
    "Enterprise-grade AI data annotation, NLP, and machine learning services trusted by global companies to build reliable AI systems.",
  canonical: SITE.url,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    site_name: SITE.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MillenniumAI – Enterprise AI Data Services",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
