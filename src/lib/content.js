/* =========================
   INSIGHTS / BLOG
========================= */

siteContent.insights = {
  categories: {
    aiData: {
      slug: "ai-data",
      title: "AI Data Annotation",
      description:
        "Trends, best practices, and insights in AI data annotation.",
      seo: {
        title: "AI Data Annotation Insights | MillenniumAI",
        description:
          "Expert insights on AI data annotation, labeling strategies, and quality frameworks.",
        schemaType: "CollectionPage",
      },
    },

    generativeAI: {
      slug: "generative-ai",
      title: "Generative AI",
      description:
        "Insights on LLMs, generative AI training, and RLHF.",
      seo: {
        title: "Generative AI Insights | MillenniumAI",
        description:
          "Articles on generative AI, LLM training, and instruction tuning.",
        schemaType: "CollectionPage",
      },
    },
  },

  articles: {
    scalableAnnotation: {
      slug: "scalable-data-annotation",
      category: "ai-data",
      title: "How to Scale AI Data Annotation Without Losing Quality",
      excerpt:
        "Scaling AI data annotation requires strong QA pipelines and workforce orchestration.",
      publishedAt: "2025-01-10",
      author: "MillenniumAI Research",
      seo: {
        title:
          "How to Scale AI Data Annotation Without Losing Quality | MillenniumAI",
        description:
          "Learn how enterprises scale AI data annotation while maintaining accuracy and compliance.",
        schemaType: "BlogPosting",
      },
      content: `
        <p>Scaling data annotation is one of the biggest challenges in AI development...</p>
        <p>This article explains best practices for quality control, workforce scaling, and governance.</p>
      `,
    },

    rlhfExplained: {
      slug: "rlhf-explained",
      category: "generative-ai",
      title: "RLHF Explained: Training Better Generative AI Models",
      excerpt:
        "Reinforcement Learning from Human Feedback (RLHF) is essential for safe AI.",
      publishedAt: "2025-01-15",
      author: "MillenniumAI Research",
      seo: {
        title: "RLHF Explained | Training Better Generative AI Models",
        description:
          "Understand how RLHF improves LLM alignment, safety, and performance.",
        schemaType: "BlogPosting",
      },
      content: `
        <p>RLHF is a technique used to align AI models with human expectations...</p>
      `,
    },
  },
};
