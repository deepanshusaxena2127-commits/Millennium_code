// src/lib/content.js

/* ============================
   GLOBAL SITE META (SEO)
============================ */
export const siteMeta = {
  siteName: "MillenniumAI",
  siteUrl: "https://www.millenniumai.com",
  defaultTitle: "MillenniumAI | Enterprise AI Data Annotation & AI Solutions",
  defaultDescription:
    "MillenniumAI provides enterprise-grade AI data annotation, NLP, computer vision, and AI development services globally.",
  twitterHandle: "@millenniumai"
};

/* ============================
   SITE CONTENT (SOURCE OF TRUTH)
============================ */
export const siteContent = {
  company: {
    about: {
      title: "About MillenniumAI",
      description:
        "MillenniumAI is a global AI data annotation and AI solutions company helping enterprises build scalable and accurate AI systems.",
      sections: [
        {
          heading: "Who We Are",
          content:
            "We specialize in AI data annotation, NLP, computer vision, and enterprise AI development services."
        },
        {
          heading: "Our Mission",
          content:
            "To empower organizations worldwide with ethical, scalable, and reliable AI solutions."
        }
      ]
    }
  }
  ,

  /* ============================
     SOLUTIONS - single-source copy for solution pages
  ============================ */
  solutions: {
    'generative-ai': {
      title: 'Generative AI Services',
      seoTitle: 'Generative AI Services | MillenniumAI',
      metaDescription: 'Enterprise-grade data and human feedback services for training and aligning large language models and generative systems.',
      heroTitle: 'Generative AI Data & Alignment',
      heroSubtitle: 'High‑quality preference data, RLHF, and evaluation datasets for LLMs and generative models.',
      description: 'Data collection, preference labeling, safety evaluation, and RLHF pipelines to build aligned, reliable generative AI for enterprise use.',
      features: [
        'Prompt‑response pair generation and quality labeling',
        'Preference ranking and RLHF datasets',
        'Bias and safety evaluation at scale',
        'Human review pipelines and specialist annotators'
      ]
    },

    'nlp': {
      title: 'Natural Language Processing',
      seoTitle: 'NLP Data Annotation Services | MillenniumAI',
      metaDescription: 'Accurate, scalable NLP datasets: classification, NER, entity linking, document understanding and multilingual support.',
      heroTitle: 'NLP Data Annotation & Engineering',
      heroSubtitle: 'Structured language datasets, entity extraction, sentiment and intent labeling across 50+ languages.',
      description: 'End‑to‑end NLP data services including taxonomy design, multi‑language annotation, entity extraction, sentiment, intent and document understanding.',
      features: ['Text classification', 'Named entity recognition', 'Document information extraction', 'Multilingual annotation']
    },

    'computer-vision': {
      title: 'Computer Vision',
      seoTitle: 'Computer Vision Annotation | MillenniumAI',
      metaDescription: 'Bounding boxes, segmentation, keypoints and 3D labeling for autonomous systems, inspection and visual search.',
      heroTitle: 'Computer Vision Annotation',
      heroSubtitle: 'Precise image & video labeling for detection, segmentation, tracking and 3D perception.',
      description: 'High‑fidelity image and video annotation for object detection, semantic/instance segmentation, keypoints, tracking and sensor fusion datasets.',
      features: ['Bounding boxes & polygons', 'Semantic & instance segmentation', 'Video object tracking', '3D lidar and point cloud labeling']
    },

    'content-moderation': {
      title: 'Content Moderation',
      seoTitle: 'Content Moderation Services | MillenniumAI',
      metaDescription: 'Trust & safety datasets and review workflows for moderation, classification and policy enforcement at enterprise scale.',
      heroTitle: 'Trust & Safety Data',
      heroSubtitle: 'Policy-driven moderation datasets, toxicity labeling and review workflows for platforms and products.',
      description: 'Create moderation datasets, enforce policy labels, build human review queues and automate unsafe content detection with curated training data.',
      features: ['Toxicity and harassment labeling', 'Policy-specific taxonomies', 'Image & video moderation', 'Human review tooling']
    },

    'document-analysis': {
      title: 'Document Analysis & OCR',
      seoTitle: 'Document Analysis & OCR | MillenniumAI',
      metaDescription: 'OCR, key-value extraction, table parsing and semantic document understanding for enterprise automation.',
      heroTitle: 'Document Understanding & Extraction',
      heroSubtitle: 'Accurate OCR, structured extraction and table parsing for finance, legal and operations workflows.',
      description: 'Structured data extraction from documents: OCR, key‑value pairs, table extraction, semantic segmentation and contract clause tagging.',
      features: ['High-accuracy OCR', 'Key-value and table extraction', 'Contract clause tagging', 'Document classification']
    },

    'speech-transcription': {
      title: 'Speech & Audio',
      seoTitle: 'Speech & Audio Annotation | MillenniumAI',
      metaDescription: 'Transcription, diarization, speaker labeling and audio classification with language and dialect coverage for enterprise speech models.',
      heroTitle: 'Speech, Audio & Transcription',
      heroSubtitle: 'Human-verified transcription, diarization and audio event labeling for voice AI systems.',
      description: 'Enterprise transcription, speaker diarization, audio event labeling and multilingual voice datasets for ASR and voice assistants.',
      features: ['Human transcription', 'Speaker diarization', 'Audio event detection', 'Multilingual audio coverage']
    },

    'full-stack-dev': {
      title: 'Full-Stack AI Development',
      seoTitle: 'Full-Stack AI Development | MillenniumAI',
      metaDescription: 'Custom AI pipelines, data infrastructure and model integration services to deploy production-ready AI systems.',
      heroTitle: 'End-to-End AI Engineering',
      heroSubtitle: 'Architecture, data pipelines, model integration and MLOps to operationalize AI safely and reliably.',
      description: 'From data ingestion to deployed models: build production pipelines, monitoring, retraining workflows and secure deployment for enterprise scale.',
      features: ['Custom data pipelines', 'Model integration & API', 'Monitoring & retraining', 'Security & compliance']
    }
  },

  /* ============================
     INDUSTRIES - comprehensive industry pages
  ============================ */
  industriesComprehensive: {
    automotive: {
      title: 'Automotive & Autonomous Systems',
      seoTitle: 'Automotive AI Solutions | MillenniumAI',
      metaDescription: 'Data pipelines and annotated sensor datasets for autonomous driving, ADAS and in-cabin monitoring.',
      heroTitle: 'Automotive & Autonomous Driving',
      heroSubtitle: 'Sensor fusion datasets, semantic segmentation and labeling for safe autonomy.',
      description: 'High-resolution camera, lidar and radar annotation for perception stacks, ADAS features, and in-cabin analytics for passenger safety and UX.'
    },

    healthcare: {
      title: 'Healthcare AI',
      seoTitle: 'Healthcare AI Data & Annotation | MillenniumAI',
      metaDescription: 'Medical imaging annotation, clinical text extraction and privacy-first workflows for regulated healthcare environments.',
      heroTitle: 'Healthcare & Medical AI',
      heroSubtitle: 'HIPAA-aware annotation, medical imaging labels and clinical NLP for validated healthcare models.',
      description: 'Radiology, pathology and clinical note annotation with strict privacy, expert reviewers and audit trails suitable for regulated deployments.'
    },

    finance: {
      title: 'Finance AI',
      seoTitle: 'Financial AI Solutions | MillenniumAI',
      metaDescription: 'Document extraction, fraud detection datasets and transaction labeling for financial services and compliance.',
      heroTitle: 'Finance & Risk',
      heroSubtitle: 'Document parsing, entity extraction and fraud-label datasets for financial workflows.',
      description: 'Extraction of structured fields from financial documents, transaction tagging and model datasets for fraud detection and compliance.'
    },

    ecommerce: {
      title: 'E‑Commerce & Retail',
      seoTitle: 'Ecommerce AI Solutions | MillenniumAI',
      metaDescription: 'Product tagging, visual search datasets and recommendation support to improve discovery and conversion.',
      heroTitle: 'E‑Commerce & Retail AI',
      heroSubtitle: 'Product metadata, visual search and inventory annotation for merchandising and search.',
      description: 'High-quality product labels, attribute extraction and shelf monitoring datasets that improve search relevance and recommendation accuracy.'
    },

    agriculture: {
      title: 'Agriculture & Precision Farming',
      seoTitle: 'Agriculture AI | MillenniumAI',
      metaDescription: 'Crop monitoring, plant health labeling and aerial imagery annotation for precision agriculture.',
      heroTitle: 'Agriculture & Crop Intelligence',
      heroSubtitle: 'Drone and satellite imagery labeling for yield prediction, disease detection and resource optimization.',
      description: 'Annotated multispectral imagery, plant health indices and field-level labels to train agronomy and yield forecasting models.'
    },

    manufacturing: {
      title: 'Manufacturing & Quality',
      seoTitle: 'Manufacturing AI Solutions | MillenniumAI',
      metaDescription: 'Visual inspection, defect detection and process analytics datasets for manufacturing optimization.',
      heroTitle: 'Manufacturing & Industrial AI',
      heroSubtitle: 'Defect detection, predictive maintenance and production analytics for industrial operations.',
      description: 'Image and video annotation for defect detection, equipment health labeling and production optimization to reduce downtime and costs.'
    },

    logistics: {
      title: 'Logistics & Supply Chain',
      seoTitle: 'Logistics AI Solutions | MillenniumAI',
      metaDescription: 'Inventory tracking, routing event annotation and camera-based warehouse automation datasets.',
      heroTitle: 'Logistics & Supply Chain AI',
      heroSubtitle: 'Inventory, routing and warehouse automation data to optimize fulfillment and routing.',
      description: 'Annotations for package tracking, anomaly detection and robotics training to improve throughput and reduce errors.'
    },

    security: {
      title: 'Security & Surveillance',
      seoTitle: 'Security AI Solutions | MillenniumAI',
      metaDescription: 'Surveillance annotation, threat detection datasets and privacy-preserving workflows for security applications.',
      heroTitle: 'Security & Surveillance AI',
      heroSubtitle: 'Camera and sensor labeling for threat detection, access control and behavioral analytics.',
      description: 'Labeling for perimeter detection, object behavior, and event correlation with options for privacy masking and redaction.'
    },

    media: {
      title: 'Media & Entertainment',
      seoTitle: 'Media AI Solutions | MillenniumAI',
      metaDescription: 'Metadata extraction, video tagging and content moderation datasets for media workflows.',
      heroTitle: 'Media & Content AI',
      heroSubtitle: 'Automated metadata, tagging and moderation datasets to power content discovery and safety.',
      description: 'Scene-level tagging, speech-to-text alignment and moderation labels that improve search, recommendations and compliance.'
    },

    legal: {
      title: 'Legal & Compliance',
      seoTitle: 'Legal AI Solutions | MillenniumAI',
      metaDescription: 'Contract parsing, clause extraction and discovery datasets for legal automation and review.',
      heroTitle: 'Legal & Contract Intelligence',
      heroSubtitle: 'Contract analysis, clause extraction and e-discovery datasets for legal workflows.',
      description: 'High-accuracy extraction of clauses, obligations and dates with schema support for discovery and contract lifecycle automation.'
    },

    education: {
      title: 'Education & EdTech',
      seoTitle: 'Education AI Solutions | MillenniumAI',
      metaDescription: 'Student assessment datasets, content tagging and personalization data for learning platforms.',
      heroTitle: 'Education & Learning AI',
      heroSubtitle: 'Assessment datasets, content metadata and personalization for adaptive learning systems.',
      description: 'Annotation for question/answer datasets, grading rubrics, content tagging and learner behavior modeling to power adaptive platforms.'
    }
  }

  // future: insights, work
};

/* ============================
   DEFAULT EXPORT (BACKWARD SAFE)
============================ */
export default siteContent;
