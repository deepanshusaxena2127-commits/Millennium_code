import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const AgricultureSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'crop-disease-detection',
      title: 'Crop Disease & Pest Detection',
      icon: '🦗',
      description: 'Plant health imagery annotation for disease identification.',
      content: 'Plant diseases and pest infestations threaten global food security. We annotate leaf and crop imagery to identify diseases (fungal, bacterial, viral), pest damage, and nutrient deficiencies, enabling early intervention and reduced pesticide use.',
      useCases: [
        'Leaf disease classification and severity grading',
        'Pest and insect damage identification',
        'Nutrient deficiency symptom recognition',
        'Weed and invasive plant detection'
      ],
      benefits: [
        'Agronomist and plant pathologist expertise',
        'Multi-crop disease knowledge',
        'Symptom progression and severity staging'
      ],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=800&fit=crop'
    },
    {
      id: 'crop-counting-yield',
      title: 'Crop Counting & Yield Prediction',
      icon: '🌾',
      description: 'Aerial and ground imagery for crop counting and forecasting.',
      content: 'Yield prediction requires accurate crop counting and growth stage assessment. We count plants, ears, and fruits in imagery from UAVs and satellites, enabling accurate yield forecasting and resource planning.',
      useCases: ['Plant and fruit counting', 'Corn ear and wheat head detection', 'Harvest readiness prediction'],
      benefits: ['UAV and drone imagery expertise', 'Counting algorithm training data generation'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=800&fit=crop'
    },
    {
      id: 'soil-water-management',
      title: 'Soil & Water Management',
      icon: '💧',
      description: 'Soil property, moisture and irrigation response annotation.',
      content: 'Efficient water and nutrient use requires understanding soil properties and moisture conditions. We annotate soil sample imagery, texture classification, and irrigation response data to improve resource allocation.',
      useCases: ['Soil texture classification', 'Soil moisture mapping', 'Irrigation performance evaluation'],
      benefits: ['Soil science and hydrology expertise', 'Sensor and IoT data interpretation'],
      image: 'https://images.unsplash.com/photo-1500382017468-7049fae79eba?w=1200&h=800&fit=crop'
    }
  ];

  const coreCapabilities = [
    { icon: <Cpu className="w-6 h-6" />, title: 'Enterprise Scale', description: 'Process millions of acres of imagery with production SLAs' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Coverage', description: 'Regional agronomy expertise across climate zones' },
    { icon: <Lock className="w-6 h-6" />, title: 'Security & Compliance', description: 'Secure BAA and data handling for farm data' },
    { icon: <Zap className="w-6 h-6" />, title: 'Speed & Efficiency', description: 'Fast turnarounds with quality gates and auditing' }
  ];

  const whyChooseUs = [
    { title: 'Agronomy Expertise', description: 'Teams with agronomists and plant pathologists for domain-accurate labels.' },
    { title: 'Multi-sensor Support', description: 'Satellite, drone, and ground imagery combined for comprehensive datasets.' },
    { title: 'Production Pipelines', description: 'Automated QA, reviewer consensus, and performance monitoring.' },
    { title: 'Sustainability Focus', description: 'Labeling that supports precision agriculture and reduced chemical use.' }
  ];

  const specs = [
    { title: 'Quality & Accuracy', items: ['High inter-rater agreement', 'Specialist review for edge cases', 'Continuous accuracy monitoring'] },
    { title: 'Data Capability', items: ['Multi-spectral imagery', 'Time-series analysis', 'IoT sensor integration'] }
  ];

  const caseStudies = [
    { title: 'Yield Forecasting Imagery', description: 'Drone-based plant counting and maturity annotation for a global cooperative', challenge: '', solution: '', results: 'Improved yield forecasts by 12%.' }
  ];

  const faqs = [
    { question: 'What crops are supported?', answer: 'We cover major global crops and specialty horticulture with region-specific expertise.' },
    { question: 'Can you work with client sensors?', answer: 'Yes — we ingest client-provided satellite, UAV, and IoT data with secure transfer.' }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/agriculture`} />
        <title>Agriculture & Precision Farming Data Annotation | MillenniumAI</title>
        <meta name="description" content="Enterprise agricultural data annotation: crop disease detection, yield forecasting, UAV and satellite imagery labeling." />
        <meta name="keywords" content="agriculture annotation, crop disease, yield prediction, UAV imagery" />
        <meta property="og:title" content="Agriculture & Precision Farming Data Annotation" />
        <meta property="og:description" content="Enterprise agricultural annotation for crop health, yield forecasting and soil mapping." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Agriculture & Precision Farming</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">Enterprise-grade crop health, yield forecasting and soil mapping datasets for agritech applications.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/contact')} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">Start Your Project <ArrowRight className="w-4 h-4" /></Button>
              <Button variant="outline" onClick={() => navigate('/insights')} className="border-border text-foreground px-8 py-3 rounded-lg hover:bg-secondary">Learn More</Button>
            </div>
          </motion.div>
        </section>

        {/* CORE CAPABILITIES */}
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

        {/* CATEGORIES */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Agriculture Annotation Solutions</motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
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

        {/* WHY CHOOSE US */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Why Choose MillenniumAI</motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Real-World Agriculture Projects</motion.h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 gap-8">
              {caseStudies.map((study, idx) => (
                <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Results</h4>
                      <p className="text-muted-foreground text-sm">{study.results}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TECH SPECS */}
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

        {/* FAQs */}
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

        {/* CTA */}
        <section className="py-20 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">Ready to scale agricultural AI?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.1 }} className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Get a custom dataset proposal tailored to your crop types, sensors, and operational timeline.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.2 }} className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/contact')} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-lg">Request Dataset Proposal</Button>
              <Button variant="outline" onClick={() => navigate('/insights')} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">View Other Solutions</Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgricultureSolutions;
