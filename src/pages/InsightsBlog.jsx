import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ChevronDown } from 'lucide-react';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const InsightsBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'ai-data-annotation', label: 'AI Data Annotation' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'natural-language-processing', label: 'Natural Language Processing' },
    { id: 'responsible-ai', label: 'Responsible & Compliant AI' }
  ];

  const allArticles = [
    {
      id: 1,
      title: 'Building Enterprise-Scale Data Annotation Pipelines',
      excerpt: 'Learn how to design, deploy, and scale annotation workflows that maintain 99.9% accuracy while managing millions of data points across distributed teams.',
      category: 'AI Data Annotation',
      readTime: '8 min',
      date: 'Jan 8, 2026',
      views: 2500
    },
    {
      id: 2,
      title: 'The Role of Human Feedback in Fine-Tuning LLMs',
      excerpt: 'RLHF and its variants are transforming how enterprises train generative AI. Discover best practices for feedback collection and model alignment.',
      category: 'Machine Learning',
      readTime: '12 min',
      date: 'Jan 5, 2026',
      views: 3100
    },
    {
      id: 3,
      title: 'Computer Vision in Healthcare: Quality & Compliance',
      excerpt: 'From radiology to pathology, precise image annotation is critical. Explore HIPAA-compliant workflows for medical imaging AI.',
      category: 'Computer Vision',
      readTime: '10 min',
      date: 'Dec 29, 2025',
      views: 1800
    },
    {
      id: 4,
      title: 'Quality Assurance Frameworks for AI Training Data',
      excerpt: 'Implement multi-layer QA strategies, consensus validation, and accuracy metrics that ensure your training data meets production requirements.',
      category: 'AI Data Annotation',
      readTime: '10 min',
      date: 'Dec 24, 2025',
      views: 2200
    },
    {
      id: 5,
      title: 'The Economics of Data Annotation: Cost vs. Quality',
      excerpt: 'Balance cost-efficiency with quality requirements. A detailed analysis of pricing models, scaling strategies, and ROI metrics for annotation operations.',
      category: 'AI Data Annotation',
      readTime: '12 min',
      date: 'Dec 20, 2025',
      views: 2800
    },
    {
      id: 6,
      title: 'Human-in-the-Loop AI: When Automation Isn\'t Enough',
      excerpt: 'Explore use cases where human judgment is essential, strategies for effective human-machine collaboration, and cost-benefit analysis.',
      category: 'Machine Learning',
      readTime: '9 min',
      date: 'Dec 15, 2025',
      views: 1900
    },
    {
      id: 7,
      title: 'Scaling Annotation Teams Across Time Zones',
      excerpt: 'Best practices for managing distributed annotation teams, ensuring consistency, and maintaining quality across 24/7 operations.',
      category: 'AI Data Annotation',
      readTime: '11 min',
      date: 'Dec 10, 2025',
      views: 2100
    },
    {
      id: 8,
      title: 'Domain-Specific Annotation: Healthcare Applications',
      excerpt: 'How specialized domain knowledge improves annotation quality. Explore best practices for healthcare imaging, DICOM standards, and clinical data challenges.',
      category: 'Computer Vision',
      readTime: '13 min',
      date: 'Dec 5, 2025',
      views: 1600
    },
    {
      id: 9,
      title: 'GDPR Compliance in AI Training Data',
      excerpt: 'Navigate regulatory requirements when building training datasets. Essential compliance strategies for European enterprises.',
      category: 'Responsible & Compliant AI',
      readTime: '11 min',
      date: 'Nov 28, 2025',
      views: 2400
    },
    {
      id: 10,
      title: 'Multilingual NLP: Data Strategy for Global AI',
      excerpt: 'Building robust NLP systems across languages. Learn annotation strategies, quality metrics, and common pitfalls to avoid.',
      category: 'Natural Language Processing',
      readTime: '14 min',
      date: 'Nov 20, 2025',
      views: 2700
    }
  ];

  // Filter articles
  const filteredArticles = allArticles.filter(article => {
    if (selectedCategory === 'all') return true;
    return article.category.toLowerCase().replace(/ /g, '-').includes(selectedCategory);
  });

  // Sort articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'most-read') {
      return b.views - a.views;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              AI & Machine Learning Blog
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Articles on AI training data, machine learning workflows, computer vision, NLP, and AI governance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 bg-white border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Category Filter */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-900">Filter by Category</label>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <label className="text-sm font-bold text-gray-900">Sort by</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500"
              >
                <option value="latest">Latest</option>
                <option value="most-read">Most Read</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-700 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Article Listing */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-12"
          >
            {sortedArticles.length > 0 ? (
              sortedArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  className="pb-12 border-b border-gray-200 last:border-b-0 last:pb-0 group cursor-pointer"
                >
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found in this category.</p>
              </div>
            )}
          </motion.div>

          {/* Results Count */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing <span className="font-bold">{sortedArticles.length}</span> of{' '}
              <span className="font-bold">{allArticles.length}</span> articles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsBlog;
