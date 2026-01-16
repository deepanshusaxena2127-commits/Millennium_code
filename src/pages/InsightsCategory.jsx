import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const InsightsCategory = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Category data
  const categoryData = {
    'ai-data-annotation': {
      title: 'AI Data Annotation Insights',
      intro: 'Expert insights on enterprise-scale data annotation, quality assurance, and human-in-the-loop workflows for machine learning systems. Discover best practices, scaling strategies, and ROI metrics for annotation operations.',
      description: 'Best practices, quality frameworks, and scalable annotation strategies for enterprise AI systems.'
    },
    'machine-learning': {
      title: 'Machine Learning Insights',
      intro: 'Strategic perspectives on training data, model optimization, and ML lifecycle management. Learn how to architect ML systems that scale, improve model performance, and maintain production reliability.',
      description: 'Training data strategy, model optimization, and ML lifecycle management insights.'
    },
    'computer-vision': {
      title: 'Computer Vision Insights',
      intro: 'Deep dive into image, video, and 3D perception technologies for industrial automation, medical imaging, and autonomous systems. Explore annotation strategies for visual AI at scale.',
      description: 'Image, video, and 3D perception insights for industrial, medical, and autonomous AI.'
    },
    'natural-language-processing': {
      title: 'Natural Language Processing Insights',
      intro: 'Expert guidance on text annotation, multilingual NLP, LLM data preparation, and real-world NLP use cases. Master the data foundations for language understanding and generation.',
      description: 'Text annotation, multilingual NLP, LLM data preparation, and enterprise NLP use cases.'
    },
    'responsible-ai': {
      title: 'Responsible & Compliant AI Insights',
      intro: 'Navigate GDPR, ethical AI principles, data governance, and audit-ready workflows. Learn how to build AI systems that are compliant, transparent, and trustworthy.',
      description: 'GDPR, ethical AI, data governance, and audit-ready AI workflows.'
    }
  };

  const categoryInfo = categoryData[slug] || {
    title: 'Insights Category',
    intro: 'Explore our curated insights and expert perspectives.',
    description: 'Loading category information...'
  };

  // Mock articles for each category
  const articles = [
    {
      id: 1,
      title: 'Building Enterprise-Scale Data Annotation Pipelines',
      excerpt: 'Learn how to design, deploy, and scale annotation workflows that maintain 99.9% accuracy while managing millions of data points across distributed teams.',
      readTime: '8 min',
      date: 'Jan 8, 2026'
    },
    {
      id: 2,
      title: 'Quality Assurance Frameworks for AI Training Data',
      excerpt: 'Implement multi-layer QA strategies, consensus validation, and accuracy metrics that ensure your training data meets production requirements.',
      readTime: '10 min',
      date: 'Jan 5, 2026'
    },
    {
      id: 3,
      title: 'The Economics of Data Annotation: Cost vs. Quality',
      excerpt: 'Balance cost-efficiency with quality requirements. A detailed analysis of pricing models, scaling strategies, and ROI metrics for annotation operations.',
      readTime: '12 min',
      date: 'Dec 29, 2025'
    },
    {
      id: 4,
      title: 'Human-in-the-Loop AI: When Automation Isn\'t Enough',
      excerpt: 'Explore use cases where human judgment is essential, strategies for effective human-machine collaboration, and cost-benefit analysis.',
      readTime: '9 min',
      date: 'Dec 20, 2025'
    },
    {
      id: 5,
      title: 'Scaling Annotation Teams Across Time Zones',
      excerpt: 'Best practices for managing distributed annotation teams, ensuring consistency, and maintaining quality across 24/7 operations.',
      readTime: '11 min',
      date: 'Dec 15, 2025'
    },
    {
      id: 6,
      title: 'Domain-Specific Annotation: Healthcare Applications',
      excerpt: 'How specialized domain knowledge improves annotation quality. Explore best practices for healthcare imaging, DICOM standards, and clinical data challenges.',
      readTime: '13 min',
      date: 'Dec 10, 2025'
    }
  ];

  const relatedCategories = [
    { title: 'Machine Learning', id: 'machine-learning' },
    { title: 'Computer Vision', id: 'computer-vision' },
    { title: 'Responsible & Compliant AI', id: 'responsible-ai' }
  ].filter(cat => cat.id !== slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              {categoryInfo.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {categoryInfo.intro}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Article Listing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-2 space-y-12"
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                className="pb-12 border-b border-gray-200 last:border-b-0 last:pb-0 group cursor-pointer"
              >
                {/* Article Row */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    {slug.replace(/-/g, ' ')}
                  </span>
                </div>

                {/* Read More Link */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all group-hover:text-blue-700"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8 lg:sticky lg:top-32 lg:h-fit"
          >
            {/* Categories Widget */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Topics</h3>
              <ul className="space-y-3">
                {[
                  'AI Data Annotation',
                  'Machine Learning',
                  'Computer Vision',
                  'Natural Language Processing',
                  'Responsible & Compliant AI',
                  'All Articles'
                ].map((category) => (
                  <li key={category}>
                    <button className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium text-left">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Reading */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Related Topics</h3>
              <ul className="space-y-3">
                {relatedCategories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => navigate(`/insights/${category.id}`)}
                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium text-left flex items-center gap-2 group"
                    >
                      {category.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Widget */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-6 space-y-4"
            >
              <h3 className="text-lg font-bold">Apply These Insights</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Ready to implement these strategies in your AI projects?
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold"
              >
                Contact Our Experts
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InsightsCategory;
