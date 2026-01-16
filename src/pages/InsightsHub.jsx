import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const InsightsHub = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'ai-data-annotation',
      title: 'AI Data Annotation',
      description: 'Best practices, quality frameworks, and scalable annotation strategies for enterprise AI systems.',
      color: 'from-blue-500 to-cyan-500',
      articleCount: 12
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'Training data strategy, model optimization, and ML lifecycle management insights.',
      color: 'from-purple-500 to-pink-500',
      articleCount: 15
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Image, video, and 3D perception insights for industrial, medical, and autonomous AI.',
      color: 'from-green-500 to-emerald-500',
      articleCount: 10
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Text annotation, multilingual NLP, LLM data preparation, and enterprise NLP use cases.',
      color: 'from-orange-500 to-red-500',
      articleCount: 14
    },
    {
      id: 'responsible-ai',
      title: 'Responsible & Compliant AI',
      description: 'GDPR, ethical AI, data governance, and audit-ready AI workflows.',
      color: 'from-indigo-500 to-blue-500',
      articleCount: 8
    },
    {
      id: 'all-articles',
      title: 'All Blog Articles',
      description: 'Explore all AI, ML, and data engineering articles in one place.',
      color: 'from-gray-600 to-gray-800',
      articleCount: 59
    }
  ];

  const featuredArticles = [
    {
      title: 'Building Enterprise-Scale Data Annotation Pipelines',
      excerpt: 'Learn how to design, deploy, and scale annotation workflows that maintain 99.9% accuracy while managing millions of data points.',
      category: 'AI Data Annotation',
      readTime: '8 min',
      date: 'Jan 8, 2026'
    },
    {
      title: 'The Role of Human Feedback in Fine-Tuning LLMs',
      excerpt: 'RLHF and its variants are transforming how enterprises train generative AI. Discover best practices for feedback collection and model alignment.',
      category: 'Machine Learning',
      readTime: '12 min',
      date: 'Jan 5, 2026'
    },
    {
      title: 'Computer Vision in Healthcare: Quality & Compliance',
      excerpt: 'From radiology to pathology, precise image annotation is critical. Explore HIPAA-compliant workflows for medical imaging AI.',
      category: 'Computer Vision',
      readTime: '10 min',
      date: 'Dec 29, 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/insights`} />
        <title>Insights Hub | MillenniumAI</title>
        <meta name="description" content="AI, data, and machine learning insights for enterprise practitioners." />
      </Helmet>
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              AI, Data & Machine Learning Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Expert perspectives on AI data annotation, machine learning, computer vision, NLP, and responsible AI—built for global enterprises.
            </p>
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <button
                onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
                className="text-primary hover:text-primary/90 font-semibold text-lg flex items-center gap-2 transition-colors"
              >
                Explore Insights
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Category Grid */}
      <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                onClick={() => navigate(`/insights/${category.id}`)}
                className="group bg-card border border-border rounded-lg p-8 cursor-pointer hover:border-border hover:shadow-md transition-all duration-300"
              >
                {/* Category Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                    {category.title}
                  </h2>
                  {category.id !== 'all-articles' && (
                    <span className={`text-sm font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full shrink-0 ml-4`}>
                      {category.articleCount}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* CTA Link */}
                <div className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Articles
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest research and expert perspectives.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Category Label */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex-1">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 text-xs text-gray-500">
                  <span>{article.readTime} read</span>
                  <span>{article.date}</span>
                </div>

                {/* Read More Link */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="text-blue-600 font-semibold text-sm mt-6 flex items-center gap-2 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Need expert guidance for your AI initiative?
            </h2>
            <motion.div
              variants={itemVariants}
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Talk to Our AI Experts
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InsightsHub;
