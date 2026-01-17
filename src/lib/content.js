// src/lib/content.js

/* ======================================================
   GLOBAL SITE CONTENT (BACKWARD COMPATIBLE)
   ====================================================== */

export const siteContent = {
  company: {
    name: "MillenniumAI",
    legalName: "MillenniumAI Private Limited",
    description:
      "MillenniumAI is a global AI data services company delivering enterprise-grade data annotation, NLP, and machine learning solutions for scalable AI systems.",
  },

  contact: {
    email: "info@millenniumai.com",
    website: "https://www.millenniumai.com",
  },
};

/* ======================================================
   SOLUTIONS (PROGRAMMATIC SEO ENABLED)
   ====================================================== */

export const solutions = [
  {
    slug: "nlp",
    title: "Natural Language Processing",
    summary:
      "High-quality NLP data annotation and language AI services for enterprise applications.",

    seo: {
      title: "NLP Data Annotation & Language AI Services",
      description:
        "Enterprise NLP data annotation services including named entity recognition, sentiment analysis, text classification, and LLM fine-tuning.",
      canonical: "https://www.millenniumai.com/solutions/nlp",
    },

    hero: {
      heading: "Enterprise NLP Data Services",
      subheading:
        "Build accurate language models with expertly annotated multilingual text data.",
    },
  },

  {
    slug: "computer-vision",
    title: "Computer Vision",
    summary:
      "Image and video annotation services for advanced computer vision AI systems.",

    seo: {
      title: "Computer Vision Data Annotation Services",
      description:
        "High-precision image and video annotation services including bounding boxes, segmentation, and keypoint labeling.",
      canonical: "https://www.millenniumai.com/solutions/computer-vision",
    },

    hero: {
      heading: "Computer Vision Data Annotation",
      subheading:
        "Train robust visual AI systems with expertly labeled image and video datasets.",
    },
  },
];

/* ======================================================
   INDUSTRIES (PROGRAMMATIC SEO ENABLED)
   ====================================================== */

export const industries = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    summary:
      "AI data solutions supporting medical imaging, diagnostics, and healthcare analytics.",

    seo: {
      title: "AI Data Solutions for Healthcare & Life Sciences",
      description:
        "Secure and compliant AI data annotation services for healthcare, medical imaging, diagnostics, and life sciences research.",
      canonical: "https://www.millenniumai.com/industries/healthcare",
    },

    hero: {
      heading: "AI for Healthcare & Life Sciences",
      subheading:
        "Trusted AI data services powering innovation in healthcare and medical research.",
    },
  },
];
