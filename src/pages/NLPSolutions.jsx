import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import SEO from '@/components/SEO';
import { siteContent, siteMeta } from '@/lib/content';

const NLPSolutions = () => {
  const seo = siteContent.solutions && siteContent.solutions['nlp'];
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'text-annotation',
      title: 'Text Annotation & Labeling',
      icon: '📝',
      description: 'Foundation-level text data annotation for machine learning models.',
      content: 'Text annotation is the foundation of all NLP systems. Our teams systematically label text data across multiple dimensions to train models that understand context, structure, and meaning. From simple binary classifications to complex multi-label tagging, we handle classification tasks at enterprise scale.',
      useCases: [
        'Multi-class text classification (topic, category, sentiment)',
        'Multi-label tagging for flexible categorization',
        'Content tag attribution for recommendation systems',
        'Product review classification',
        'Document categorization and routing'
      ],
      benefits: [
        'Consistent taxonomy across millions of examples',
        'Quality assurance with consensus-based validation',
        'Support for 50+ languages and dialects',
        'Custom classification schemas'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'ner',
      title: 'Named Entity Recognition (NER)',
      icon: '🔍',
      description: 'Precise identification and classification of named entities in unstructured text.',
      content: 'Named Entity Recognition is critical for information extraction, knowledge graph construction, and contextual understanding. Our specialized annotators identify and classify entities—people, organizations, locations, dates, monetary values, and domain-specific terms—with precision that enables downstream NLP tasks.',
      useCases: [
        'Person, organization, and location identification',
        'Medical entity extraction (diagnoses, medications, procedures)',
        'Financial entity tagging (stocks, currencies, financial instruments)',
        'Legal document entity recognition',
        'Technical term and acronym identification'
      ],
      benefits: [
        'Hierarchical entity classification',
        'Nested entity handling for complex scenarios',
        'Domain-specific entity definitions',
        'Ambiguity resolution through contextual annotation'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'sentiment-intent',
      title: 'Sentiment & Intent Analysis',
      icon: '💭',
      description: 'Emotional and intentional understanding of customer communications.',
      content: 'Understanding customer sentiment and intent is essential for customer service automation, market intelligence, and product development. Our annotation teams label text with emotional tone, customer intent, urgency levels, and satisfaction indicators, enabling models to respond appropriately and route conversations intelligently.',
      useCases: [
        'Customer review sentiment analysis (positive, negative, neutral)',
        'Emotion classification (happy, angry, confused, satisfied)',
        'Customer support ticket intent classification',
        'Chat message intent prediction (complaint, request, feedback)',
        'Brand mention sentiment tracking across social media'
      ],
      benefits: [
        'Fine-grained emotion detection',
        'Intent hierarchies for multi-level classification',
        'Sarcasm and irony handling',
        'Cultural context awareness for global audiences'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'document-processing',
      title: 'Document Processing & Information Extraction',
      icon: '📄',
      description: 'Structured data extraction from unstructured documents.',
      content: 'Enterprise documents contain critical information buried in unstructured text. Our document processing services extract key information, identify relationships, and structure data for automation. From contracts to financial statements to regulatory filings, we unlock business intelligence from text.',
      useCases: [
        'Contract clause extraction and classification',
        'Key information extraction from forms and applications',
        'Table data extraction and structuring',
        'Financial document key metric identification',
        'Medical record section identification and extraction',
        'Legal document discovery and relevance tagging'
      ],
      benefits: [
        'Complex relationship extraction',
        'Hierarchical information structure',
        'Table and layout-aware annotation',
        'Legal and compliance terminology expertise'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    },
    {
      id: 'multilingual',
      title: 'Multilingual & Global NLP',
      icon: '🌍',
      description: 'Native-level annotation support for global language coverage.',
      content: 'Language is not universal. Idioms, cultural references, and linguistic structures vary fundamentally across languages. Our global network of native speakers ensures NLP models trained on our data are culturally aware and linguistically precise. We support 50+ languages with regional dialect expertise.',
      useCases: [
        'Multilingual sentiment analysis (consistent across languages)',
        'Machine translation quality evaluation',
        'Localization and cultural adaptation assessment',
        'Cross-lingual entity recognition',
        'Regional dialect and slang handling',
        'Language-specific intent classification'
      ],
      benefits: [
        'Native speaker expertise for 50+ languages',
        'Regional dialect and colloquial language support',
        'Cultural context and idiom handling',
        'Consistent annotation across language variants'
      ],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop'
    },
    {
      id: 'llm-support',
      title: 'LLM & Generative AI Data Support',
      icon: '✨',
      description: 'High-quality training data for Large Language Models and generative AI systems.',
      content: 'Large Language Models require massive amounts of diverse, high-quality text data for pre-training, fine-tuning, and evaluation. We provide text data collection, quality evaluation, bias detection, and RLHF (Reinforcement Learning from Human Feedback) annotation to help you build more capable, aligned, and responsible generative AI systems.',
      useCases: [
        'Prompt-response pair generation and quality evaluation',
        'Instruction-following dataset creation',
        'Preference ranking for RLHF training',
        'Bias and toxicity detection in model outputs',
        'Factuality and hallucination assessment',
        'Chain-of-thought reasoning annotation'
      ],
      benefits: [
        'Expert evaluators for LLM output quality',
        'Preference data generation at scale',
        'Safety and alignment evaluation',
        'Specialized knowledge domain expertise',
        'Diversity in reasoning patterns and perspectives'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Scale',
      description: 'Handle millions of text annotations with 99%+ accuracy and consistent quality standards across all projects.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Global Coverage',
      description: 'Native speakers for 50+ languages ensure culturally accurate and linguistically precise annotations worldwide.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'ISO 27001 certified with GDPR, HIPAA, and industry-specific compliance. Data sovereignty and secure infrastructure.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Speed & Efficiency',
      description: 'Optimized workflows with distributed teams enable faster turnaround without compromising quality.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'Expert Human-in-the-Loop: Linguists and domain experts guide every annotation project',
    'Enterprise-Grade Quality: 99%+ accuracy achieved through consensus validation and multi-layer QA',
    'Scalable Workforce: 1000+ annotators across 6 continents enable rapid scaling',
    'Domain Expertise: Industry specialists in finance, healthcare, legal, and technology sectors',
    'Flexible Engagement: Project-based, retainer, or full-time team augmentation models',
    'Custom Tooling: Purpose-built annotation platforms optimized for linguistic tasks'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={seo ? seo.seoTitle : `NLP Solutions | ${siteMeta.siteName}`}
        description={seo ? seo.metaDescription : siteMeta.defaultDescription}
        canonical={`${siteMeta.siteUrl}/solutions/nlp`}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 mb-12"
          >
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1 text-sm font-semibold">
              NLP SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Natural Language Processing Solutions for Enterprise AI
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Professional NLP data annotation across 50+ languages. From text classification to LLM fine-tuning, we provide the linguistic precision your models demand. Enterprise-grade quality, global scale, complete compliance.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-800"
              >
                Explore Capabilities
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise NLP Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete solutions for every NLP use case, from foundational text annotation to advanced LLM training.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NLP Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NLP Categories & Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed annotation services for every NLP application, from basic text classification to advanced language understanding.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  activeCategory === idx
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-blue-700' : 'text-gray-900'}`}>
                  {category.title.split(' ')[0]}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Active Category Detail */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{categories[activeCategory].icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900">{categories[activeCategory].title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {categories[activeCategory].content}
                </p>

                {/* Use Cases */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Real-World Use Cases</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Our Approach</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-blue-600 text-white hover:bg-blue-700 font-bold"
                  >
                    Discuss Your Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative h-96 lg:h-auto overflow-hidden bg-gray-100">
                <motion.img
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our NLP Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by AI teams globally for linguistic precision, enterprise compliance, and scalable quality.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Specifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technical capabilities and compliance standards that meet the demands of enterprise AI.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">99%+ accuracy through consensus validation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Multi-layer quality control with expert review</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Inter-annotator agreement metrics (Cohen&apos;s kappa {'>='} 0.85)</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Regular gold-standard validation</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">ISO 27001 Information Security Certification</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">GDPR, HIPAA, and SOC 2 Type II compliant</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Data residency options (EU, US, APAC)</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Encrypted infrastructure with access controls</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Language Support</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">50+ languages with native speaker expertise</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Regional dialects and colloquial language support</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Cultural context and idiom expertise</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Domain terminology in specialized fields</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-900 mb-6">Scale & Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Handle millions of annotations monthly</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">1000+ annotators across 6 continents</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Distributed teams for 24/7 operations</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Custom SLA and turnaround time agreements</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to power your NLP projects with enterprise-grade annotated data?
            </h2>
            <p className="text-lg text-blue-100">
              Let&apos;s discuss your specific NLP requirements and create a custom solution for your AI pipeline.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold"
              >
                Start Your NLP Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-700"
              >
                Learn NLP Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NLPSolutions;
