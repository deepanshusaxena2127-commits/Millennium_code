import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const RetailSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'shelf-and-planogram',
      title: 'Shelf & Planogram Recognition',
      icon: '🛒',
      description: 'Detect products, stock levels and shelf compliance from images.',
      content: 'We label POS and shelf imagery to detect products, facings, price tags, and out-of-stock events to improve assortment and merchandising models.',
      useCases: ['Product detection and SKU matching', 'Out-of-stock detection', 'Planogram compliance'],
      benefits: ['Retail domain expertise', 'High-density SKU labeling'],
      image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?w=800&h=600&fit=crop'
    },
    {
      id: 'transaction-and-receipt',
      title: 'Receipt & Transaction OCR',
      icon: '🧾',
      description: 'Structured extraction from receipts, invoices and POS logs.',
      content: 'We produce high-quality OCR corrections and field extraction for receipts and invoices to power expense, loyalty and analytics systems.',
      useCases: ['Line-item extraction', 'Total and tax parsing', 'Item normalization'],
      benefits: ['High-recall OCR training sets', 'Localization and currency handling'],
      image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=800&h=600&fit=crop'
    },
    {
      id: 'customer-behavior',
      title: 'Customer Behavior & Heatmaps',
      icon: '📈',
      description: 'Annotate camera feeds for footfall, dwell time and pathing.',
      content: 'We label shopper movement, queue lengths, and dwell zones to improve store layout, staffing and campaign effectiveness.',
      useCases: ['Footfall counting', 'Dwell time measurement', 'Queue detection and staffing signals'],
      benefits: ['Privacy-conscious anonymization', 'High-volume label pipelines'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
    }
  ];

  const specifications = [
    { category: 'Retail Expertise', items: ['Category managers, merchandisers, and retail analysts'] },
    { category: 'Data Types', items: ['Shelf images, receipt scans, POS logs, camera feeds'] }
  ];

  const caseStudies = [
    { title: 'Out-of-Stock Detection Pilot', client: 'Regional Grocery Chain', scope: 'Annotated 50K shelf images for stock-level models', result: 'Reduced OOS incidents by 15% in pilot stores' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Retail & Commerce Annotation | Millennium AI</title>
        <meta name="description" content="Shelf recognition, receipt OCR, and customer behavior labeling for retail AI." />
      </Helmet>

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">Retail & Commerce</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">Product recognition, receipt extraction and in-store analytics to optimize retail operations.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-pink-600 hover:bg-pink-700">Start Retail Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg">Learn Retail Best Practices</Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Retail Specializations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Labels and pipelines built for high SKU cardinality and real-world store conditions.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="space-y-4">
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <button onClick={() => setActiveCategory(activeCategory === index ? -1 : index)} className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 mt-2">{category.description}</p>
                    </div>
                  </div>
                </button>

                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: activeCategory === index ? 'auto' : 0, opacity: activeCategory === index ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden border-t border-gray-200">
                  <div className="p-6 bg-gray-50 space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Overview</h4>
                      <p className="text-gray-700 leading-relaxed">{category.content}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Use Cases</h4>
                      <ul className="space-y-2">
                        {category.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {category.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Specifications</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-700 font-semibold mb-4">Client: {study.client}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase">Scope</p>
                    <p className="text-gray-700">{study.scope}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase">Result</p>
                    <p className="text-gray-700">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight">Ready to operationalize retail insights with labeled data?</h2>
          <p className="text-lg text-pink-100 mt-4">Share your catalog and in-store imagery and we&apos;ll propose a labeling plan optimized for scale.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-bold">Start Retail Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-white text-white hover:bg-rose-700">Learn Retail Best Practices</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailSolutions;
