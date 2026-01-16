import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const Insights = () => {
  const { toast } = useToast();

  const articles = [
    {
      title: 'The Future of AI Data Annotation: Trends for 2026',
      excerpt: 'Explore the latest developments in data annotation technologies and how they\'re shaping the future of AI...',
      category: 'Industry Trends',
      author: 'Sarah Johnson',
      date: 'Jan 2, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
    },
    {
      title: 'Best Practices for Computer Vision Dataset Quality',
      excerpt: 'Learn how to ensure your image annotation projects meet the highest quality standards for production AI...',
      category: 'Best Practices',
      author: 'Michael Chen',
      date: 'Dec 28, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
    },
    {
      title: 'RLHF: Training Better Language Models with Human Feedback',
      excerpt: 'Understanding Reinforcement Learning from Human Feedback and its impact on generative AI performance...',
      category: 'Technical Guide',
      author: 'Dr. Emily Roberts',
      date: 'Dec 20, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop'
    }
  ];

  const handleArticleClick = (title) => {
    toast({
      title: title,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]">
            Latest{' '}
            <span className="text-blue-600">Insights</span>
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Stay informed with expert articles, industry trends, and best practices in AI data annotation
          </motion.p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={article.title}
                  src={article.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleArticleClick(article.title)}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={() => handleArticleClick('View All Insights')}
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Insights
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
