import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check, Globe, Shield, Users, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const WorkShowcasePage = () => {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(0);

  const workCategories = [
    {
      id: 'autonomous-mobility',
      title: 'Autonomous Mobility',
      icon: '🚗',
      description: 'LiDAR, camera, and sensor fusion annotation supporting self-driving and ADAS systems with high accuracy and scalable delivery.',
      details: [
        '3D Object Detection & Tracking',
        'LiDAR Point Cloud Annotation',
        'Camera Image Segmentation',
        'Sensor Fusion Data Labeling',
        'Real-time Performance Monitoring'
      ],
      stats: {
        projects: '15+',
        dataPoints: '2.5M+',
        accuracy: '99.8%'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: '🏥',
      description: 'Medical image annotation for radiology and diagnostics, following strict data privacy and regulatory standards.',
      details: [
        'X-Ray & CT Scan Annotation',
        'Pathology Image Labeling',
        'Clinical Document OCR',
        'Patient Data Privacy Compliance',
        'FDA & HIPAA Certified Processes'
      ],
      stats: {
        projects: '8+',
        dataPoints: '500K+',
        accuracy: '99.9%'
      },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'fintech',
      title: 'FinTech & Insurance',
      icon: '💰',
      description: 'NLP data labeling for financial documents, fraud detection, sentiment analysis, and risk intelligence.',
      details: [
        'Contract Document Analysis',
        'Fraud Pattern Identification',
        'Sentiment & Intent Analysis',
        'Risk Assessment Data Labeling',
        'Regulatory Compliance Annotation'
      ],
      stats: {
        projects: '12+',
        dataPoints: '1.2M+',
        accuracy: '99.7%'
      },
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce',
      icon: '🛍️',
      description: 'Product image annotation and attribute tagging to power visual search, personalization, and recommendation engines.',
      details: [
        'Product Image Tagging',
        'Attribute Extraction',
        'Visual Search Training Data',
        'Catalog Data Quality Assurance',
        'Price & Competitor Intelligence'
      ],
      stats: {
        projects: '20+',
        dataPoints: '5M+',
        accuracy: '99.5%'
      },
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'geospatial',
      title: 'Geospatial Intelligence',
      icon: '🛰️',
      description: 'Satellite and aerial image labeling for land-use analysis, infrastructure monitoring, and spatial AI systems.',
      details: [
        'Satellite Image Classification',
        'Land-Use Mapping',
        'Infrastructure Detection',
        'Environmental Change Monitoring',
        'Urban Planning Analytics'
      ],
      stats: {
        projects: '10+',
        dataPoints: '3M+',
        accuracy: '98.9%'
      },
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Global Delivery Capability',
      description: 'Distributed teams across multiple continents delivering 24/7 support for time-sensitive projects.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant Workflows',
      description: 'ISO 27001, SOC 2 Type II, HIPAA, and GDPR certified processes for regulated industries.'
    },
    {
      icon: Users,
      title: 'Domain-Trained Annotation Teams',
      description: 'Specialists with industry expertise in healthcare, finance, autonomous systems, and more.'
    },
    {
      icon: BarChart3,
      title: 'Enterprise-Scale Accuracy',
      description: 'Multi-layer QA, consensus-based validation, and continuous accuracy monitoring systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Showcase</span>
            </h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Real-World AI & Data Annotation Projects Delivered Globally
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver enterprise-grade AI, machine learning, and data annotation solutions for organizations across the United States, Europe, and the Middle East. Our work spans regulated industries, large-scale AI systems, and mission-critical deployments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From autonomous vehicles to medical imaging, from financial intelligence to geospatial analysis, our teams have consistently delivered the high-quality training data that powers tomorrow&apos;s AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized teams have delivered transformative data annotation solutions across key industries.
            </p>
          </motion.div>

          {/* Work Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-4"
          >
            {workCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === index ? -1 : index)}
                  className="w-full p-6 md:p-8 flex items-start justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-6 flex-1 text-left">
                    <div className="text-4xl mt-1">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">{category.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 mt-2"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCategory === index ? 'auto' : 0,
                    opacity: expandedCategory === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-gray-200"
                >
                  <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white space-y-6">
                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Specialized Services</h4>
                        <ul className="space-y-3">
                          {category.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <Check className="w-5 h-5 text-green-500 shrink-0" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className={`rounded-xl bg-gradient-to-br ${category.color} p-6 text-white`}>
                          <div className="text-3xl font-black mb-2">{category.stats.projects}</div>
                          <div className="text-sm font-medium opacity-90">Projects Delivered</div>
                        </div>
                        <div className={`rounded-xl bg-gradient-to-br ${category.color} p-6 text-white`}>
                          <div className="text-3xl font-black mb-2">{category.stats.dataPoints}</div>
                          <div className="text-sm font-medium opacity-90">Data Points</div>
                        </div>
                        <div className={`rounded-xl bg-gradient-to-br ${category.color} p-6 text-white`}>
                          <div className="text-3xl font-black mb-2">{category.stats.accuracy}</div>
                          <div className="text-sm font-medium opacity-90">Accuracy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Clients Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Clients <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence, industry expertise, and unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Build AI With Trusted Data
            </h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              Talk to our experts about your AI training data or machine learning requirements.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 text-lg font-bold shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-bold"
              >
                Request Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '65+', label: 'Global Clients' },
              { value: '12.2M+', label: 'Annotations Delivered' },
              { value: '99.8%', label: 'Average Accuracy' },
              { value: '50+', label: 'Languages Supported' }
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkShowcasePage;
