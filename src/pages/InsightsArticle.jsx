import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const InsightsArticle = () => {
  const navigate = useNavigate();

  // Mock article data
  const article = {
    title: 'Building Enterprise-Scale Data Annotation Pipelines',
    category: 'AI Data Annotation',
    readTime: '8 min',
    publishDate: 'Jan 8, 2026',
    updateDate: 'Jan 8, 2026',
    author: 'Dr. Sarah Chen',
    authorRole: 'Head of Data Quality',
    summary: 'Learn how to design, deploy, and scale annotation workflows that maintain 99.9% accuracy while managing millions of data points across distributed teams. This comprehensive guide covers architecture, quality assurance, team management, and cost optimization.',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Introduction'
      },
      {
        type: 'paragraph',
        text: 'Enterprise-scale data annotation is not just about quantity—it\'s about building systems that scale intelligently. In this article, we\'ll explore the architectural decisions, QA frameworks, and operational strategies that enable organizations to deliver millions of high-quality annotations.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Three Pillars of Annotation Pipelines'
      },
      {
        type: 'paragraph',
        text: 'Successful annotation pipelines rest on three foundational pillars: infrastructure, quality, and people. Let\'s examine each in detail.'
      },
      {
        type: 'heading',
        level: 3,
        text: '1. Infrastructure & Workflow Architecture'
      },
      {
        type: 'paragraph',
        text: 'The technical backbone of your annotation system must support high throughput, low latency, and seamless integrations with your ML pipeline. Consider cloud-native architectures, containerized workflows, and API-first design patterns.'
      },
      {
        type: 'heading',
        level: 3,
        text: '2. Multi-Layer Quality Assurance'
      },
      {
        type: 'paragraph',
        text: 'Quality doesn\'t happen by accident. Implement consensus-based validation, inter-annotator agreement metrics, and continuous monitoring of accuracy against gold-standard datasets.'
      },
      {
        type: 'heading',
        level: 3,
        text: '3. Effective Team Management'
      },
      {
        type: 'paragraph',
        text: 'Your annotation team is your greatest asset. Invest in training, standardized processes, clear guidelines, and regular feedback loops to maintain consistent quality across shifts and geographies.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Metrics to Track'
      },
      {
        type: 'paragraph',
        text: 'Monitor these metrics to ensure pipeline health: throughput (annotations per hour), accuracy (against gold standards), inter-annotator agreement (Cohen\'s kappa > 0.85), turnaround time, and cost per annotation.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'Building annotation pipelines that scale requires thoughtful architecture, rigorous quality control, and strategic team management. The organizations that master these elements gain a competitive advantage in AI development.'
      }
    ],
    relatedArticles: [
      {
        title: 'Quality Assurance Frameworks for AI Training Data',
        category: 'AI Data Annotation',
        readTime: '10 min'
      },
      {
        title: 'The Economics of Data Annotation: Cost vs. Quality',
        category: 'AI Data Annotation',
        readTime: '12 min'
      },
      {
        title: 'Human-in-the-Loop AI: When Automation Isn\'t Enough',
        category: 'Machine Learning',
        readTime: '9 min'
      }
    ],
    relatedSolution: {
      title: 'AI Data Annotation',
      slug: 'ai-data-annotation'
    },
    relatedIndustry: {
      title: 'Automotive',
      slug: 'automotive'
    }
  };

  const renderContent = () => {
    return article.content.map((block, idx) => {
      if (block.type === 'heading') {
        const HeadingTag = `h${block.level}`;
        const baseClasses = 'text-gray-900 leading-tight my-6 first:mt-0';
        const sizeClasses = {
          2: 'text-3xl font-bold',
          3: 'text-2xl font-bold'
        };
        return (
          <HeadingTag
            key={idx}
            className={`${baseClasses} ${sizeClasses[block.level]}`}
          >
            {block.text}
          </HeadingTag>
        );
      }
      if (block.type === 'paragraph') {
        return (
          <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {block.text}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Category Label */}
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              {article.title}
            </h1>

            {/* Summary */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {article.summary}
            </p>

            {/* Metadata */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} read</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published {article.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated {article.updateDate}</span>
              </div>
            </motion.div>

            {/* Author Info */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-gray-700 font-medium">
                By <span className="font-bold">{article.author}</span>
              </p>
              <p className="text-gray-600 text-sm">{article.authorRole}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Article Body */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto prose-lg">
          {renderContent()}
        </div>
      </motion.div>

      {/* Internal Linking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-16"
          >
            {/* Related Articles */}
            <motion.div
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Reading</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {article.relatedArticles.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Explore Solutions & Industries */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-all cursor-pointer group">
                <span className="text-xs font-bold text-purple-600 uppercase">Relevant Solution</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4 group-hover:text-purple-600 transition-colors">
                  {article.relatedSolution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn more about our comprehensive data annotation solutions for enterprise AI.
                </p>
                <button className="text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Solution <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-all cursor-pointer group">
                <span className="text-xs font-bold text-green-600 uppercase">Related Topic</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4 group-hover:text-green-600 transition-colors">
                  {article.relatedIndustry.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore annotation strategies and best practices specific to the automotive industry.
                </p>
                <button className="text-green-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <motion.div
              variants={sectionHeaderVariants}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Looking to apply these insights to your AI project?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experts can help you implement best practices and scale your AI initiatives.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Contact Our Team
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

export default InsightsArticle;
