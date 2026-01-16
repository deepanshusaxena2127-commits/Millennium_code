import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const EcommerceSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'product-classification',
      title: 'Product Classification & Tagging',
      icon: '🏷️',
      description: 'Category, attribute, and metadata annotation for catalogs.',
      content: 'E-commerce platforms manage millions of products across hierarchical categories. We annotate product categories, sub-categories, attributes (size, color, material), and brand information to power search and recommendation systems.',
      useCases: [
        'Product category and subcategory assignment',
        'Attribute extraction (size, color, material, fit)',
        'Brand and manufacturer identification',
        'Product type and variant classification',
        'Gender and age range targeting',
        'Seasonal and occasion-based tagging'
      ],
      benefits: [
        'Multi-level hierarchical taxonomy support',
        'Attribute consistency across product lines',
        'Cross-platform catalog harmonization',
        'Rapid catalog onboarding at scale',
        'Quality assurance for merchant uploads'
      ],
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop'
    },
    {
      id: 'visual-search',
      title: 'Visual Search & Image Annotation',
      icon: '📸',
      description: 'Product image annotation for visual AI systems.',
      content: 'Visual search enables customers to find products by uploading images. We annotate product images to identify key objects, angles, lighting conditions, and composition, enabling visual search and image-to-product matching.',
      useCases: [
        'Product detection and localization in images',
        'Image quality and suitability assessment',
        'Model pose and styling annotation',
        'Visual similarity group identification',
        'Counterfeit and authenticity assessment',
        'Lifestyle vs. product-centric image classification'
      ],
      benefits: [
        'High-resolution image handling',
        'Fashion and apparel domain expertise',
        'Mobile and mobile-first image optimization',
        'Style and aesthetic understanding',
        'Consistency across product variants'
      ],
      image: 'https://images.unsplash.com/photo-1488196871519-c21cc028cb29?w=800&h=600&fit=crop'
    },
    {
      id: 'review-sentiment',
      title: 'Product Review & Sentiment Analysis',
      icon: '⭐',
      description: 'Customer review labeling for quality and sentiment.',
      content: 'Customer reviews drive purchasing decisions. We label review sentiment, product quality assessment, shipping experience, and seller reliability to train models that predict review helpfulness and detect fake reviews.',
      useCases: [
        'Review sentiment classification (positive, negative, neutral)',
        'Review aspect extraction (product quality, shipping, price)',
        'Helpfulness and authenticity prediction labeling',
        'Fake review and manipulation detection',
        'Customer service quality assessment',
        'Defect and issue reporting identification'
      ],
      benefits: [
        'Linguistic and cultural sentiment expertise',
        'Multi-language review processing',
        'Product-specific terminology understanding',
        'Sarcasm and irony detection',
        'Emerging issue and trend identification'
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=800&h=600&fit=crop'
    },
    {
      id: 'pricing-analytics',
      title: 'Pricing & Competitor Intelligence',
      icon: '💰',
      description: 'Price tracking and competitive market analysis labeling.',
      content: 'Dynamic pricing requires competitive intelligence. We label price changes, competitor pricing, promotional strategies, and market positioning to train price optimization models.',
      useCases: [
        'Historical price and discount tracking',
        'Competitor price monitoring and labeling',
        'Promotional period and type classification',
        'Price elasticity and demand indicator labeling',
        'Market trend and seasonality identification',
        'Value positioning and price-to-quality assessment'
      ],
      benefits: [
        'E-commerce and retail market expertise',
        'Multi-channel price tracking',
        'Promotional strategy analysis',
        'Competitive intelligence gathering',
        'Price optimization model training'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=800&h=600&fit=crop'
    },
    {
      id: 'inventory-supply-chain',
      title: 'Inventory & Supply Chain Data',
      icon: '📦',
      description: 'Stock, fulfillment, and supply chain event labeling.',
      content: 'Supply chain optimization depends on accurate inventory and fulfillment data. We label stock movements, warehouse operations, shipping events, and supply chain disruptions.',
      useCases: [
        'Stock-out and shortage prediction labeling',
        'Warehouse operation event classification',
        'Shipping method and carrier performance',
        'Return reason and rate prediction labeling',
        'Vendor performance and reliability assessment',
        'Demand forecasting and seasonality patterns'
      ],
      benefits: [
        'Supply chain operations expertise',
        'Fulfillment center workflow understanding',
        'Multi-warehouse inventory tracking',
        'Last-mile delivery optimization data',
        'Real-time inventory synchronization'
      ],
      image: 'https://images.unsplash.com/photo-1576014175073-1ea016591da7?w=800&h=600&fit=crop'
    },
    {
      id: 'personalization-data',
      title: 'Customer & Personalization Data',
      icon: '👤',
      description: 'Customer behavior and preference labeling.',
      content: 'Recommendation engines power e-commerce revenue. We label customer browsing behavior, purchase intent, style preferences, and product affinities to train personalization models.',
      useCases: [
        'Customer intent classification (browsing vs. buying)',
        'Style and aesthetic preference labeling',
        'Brand loyalty and switching behavior',
        'Size and fit preference tracking',
        'Customer segment and persona classification',
        'Lifetime value and churn risk prediction'
      ],
      benefits: [
        'Customer behavior psychology expertise',
        'Fashion and lifestyle understanding',
        'Behavioral pattern recognition',
        'Privacy-compliant data handling',
        'Personalization engine optimization'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    }
  ];

  const coreCapabilities = [
    { icon: <Cpu className="w-6 h-6" />, title: 'Retail Scale', description: 'Process 10M+ products monthly with consistency and speed' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global E-Commerce', description: 'Multi-language and multi-currency catalog support' },
    { icon: <Lock className="w-6 h-6" />, title: 'Data Security', description: 'Secure handling of competitive pricing and customer data' },
    { icon: <Zap className="w-6 h-6" />, title: 'Real-Time Integration', description: 'API-driven catalog updates and live annotation workflows' }
  ];

  const whyChooseUs = [
    { title: 'Retail Domain Expertise', description: 'Fashion, electronics, groceries, and cross-category specialists understand e-commerce operations.' },
    { title: 'Catalog Management Experience', description: 'Proven workflows for merchant onboarding, taxonomy standardization, and quality assurance.' },
    { title: 'Scale & Performance', description: 'Process seasonal peaks and rapid inventory changes without quality degradation.' },
    { title: 'Personalization Data', description: 'Customer behavior and preference annotations enable recommender systems and targeting.' }
  ];

  const specs = [
    { title: 'Quality & Accuracy', items: ['99.5%+ accuracy across product data', 'Multi-annotator consensus', 'Consistency checking across catalogs', 'Real-time feedback loops'] },
    { title: 'Scale & Integration', items: ['Process 10M+ products/month', 'Real-time API integration', '100+ language support', '24/7 global operations'] }
  ];

  const caseStudies = [
    { title: 'Large Marketplace Catalog', description: '', challenge: '', solution: '', results: 'Categorized 5M+ products; improved search relevance, increased conversion 12%' }
  ];

  const faqs = [
    { question: 'How do you handle product images of varying quality?', answer: 'We assess image quality, flag low-quality images for re-shooting, and maintain standards while processing bulk uploads.' },
    { question: 'Can you support custom taxonomies and category structures?', answer: 'Yes — we work with your existing taxonomy or develop custom structures, and harmonize multiple vendor categorization systems.' }
  ];

  return (
    <>
      <Helmet>
          <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/ecommerce`} />
        <title>E-Commerce Data Annotation | MillenniumAI</title>
        <meta name="description" content="Product classification, visual search, review sentiment, and pricing analysis for e-commerce AI." />
        <meta name="keywords" content="ecommerce annotation, product classification, visual search, retail AI" />
        <meta property="og:title" content="E-Commerce Data Annotation" />
        <meta property="og:description" content="Enterprise e-commerce and retail data annotation." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">E-Commerce & Retail</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">Enterprise product classification, visual search, review sentiment, and pricing annotation for retail AI.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/contact')} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">Start Your Project <ArrowRight className="w-4 h-4" /></Button>
              <Button variant="outline" onClick={() => navigate('/company/about')} className="border-border text-foreground px-8 py-3 rounded-lg hover:bg-secondary">Learn More</Button>
            </div>
          </motion.div>
        </section>

        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Core Capabilities</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((cap, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{cap.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{cap.title}</h3>
                <p className="text-muted-foreground text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">E-Commerce Annotation Solutions</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-12">
              {categories.map((cat, idx) => (
                <button key={idx} onClick={() => setActiveCategory(idx)} className={`p-3 rounded-lg font-medium text-sm transition-all ${activeCategory === idx ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-card text-foreground border border-border hover:bg-muted'}`}>
                  {cat.icon} {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-xl p-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{categories[activeCategory].title}</h3>
                <p className="text-muted-foreground mb-6">{categories[activeCategory].content}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {categories[activeCategory].useCases.slice(0, 4).map((u, i) => (
                      <li key={i} className="flex gap-3 text-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{u}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {categories[activeCategory].benefits.map((b, i) => (
                      <li key={i} className="flex gap-3 text-foreground"><Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden border border-border">
                <img src={categories[activeCategory].image} alt={categories[activeCategory].title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Why Choose MillenniumAI</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Real-World E-Commerce Projects</motion.h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 gap-8">
              {caseStudies.map((study, idx) => (
                <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div><h4 className="font-semibold text-foreground mb-2">Challenge</h4><p className="text-muted-foreground text-sm">{study.challenge}</p></div>
                    <div><h4 className="font-semibold text-foreground mb-2">Solution</h4><p className="text-muted-foreground text-sm">{study.solution}</p></div>
                    <div><h4 className="font-semibold text-foreground mb-2">Results</h4><p className="text-muted-foreground text-sm">{study.results}</p></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Technical Specifications</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((spec, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-4">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.items.map((it, i) => (
                    <li key={i} className="flex gap-3 text-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 px-4 bg-secondary max-w-4xl mx-auto w-full">
          <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Frequently Asked Questions</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-primary mb-3 text-lg">{faq.question}</h3>
                <p className="text-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">Ready to Label Your E-Commerce Data?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.1 }} className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Get a custom annotation proposal for your retail and marketplace datasets</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.2 }} className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/contact')} className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-lg">Request Annotation Proposal</Button>
                            <Button onClick={() => navigate('/contact')} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-lg">Request Annotation Proposal</Button>
              <Button variant="outline" onClick={() => navigate('/')} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">View Other Solutions</Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EcommerceSolutions;
