import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const SecuritySolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'video-surveillance',
      title: 'Video Surveillance & Anomaly Detection',
      icon: '🔒',
      description: 'Person detection, loitering, and anomaly labeling for safety systems.',
      content: 'We annotate CCTV and camera feeds for people, behaviors, objects, and anomalous events to improve detection and reduce false positives.',
      useCases: ['Intrusion detection', 'Crowd analytics', 'Behavioral anomaly tagging'],
      benefits: ['Privacy-preserving labeling', 'Operational readiness testing'],
      image: 'https://images.unsplash.com/photo-1515548211310-1c9aa6f9a7d1?w=800&h=600&fit=crop'
    },
    {
      id: 'cyber-threat-intel',
      title: 'Cyber Threat & Log Annotation',
      icon: '🛡️',
      description: 'Label network events, threat indicators, and attacker behaviors.',
      content: 'We produce curated corpora of labeled logs, IOC mappings, and phishing examples to improve threat detection models.',
      useCases: ['Log event classification', 'Phishing content labeling', 'IOC enrichment'],
      benefits: ['Security analyst review', 'Integration with SIEM training pipelines'],
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop'
    },
    {
      id: 'access-control',
      title: 'Access Control & Identity Verification',
      icon: '🆔',
      description: 'Annotate identity documents and verification flows for KYC and access systems.',
      content: 'We label identity document fields, face-match examples, and verification outcomes for identity and access management models.',
      useCases: ['ID parsing', 'Liveness check datasets', 'Face match scoring'],
      benefits: ['Compliance-aware workflows', 'High-precision verification data'],
      image: 'https://images.unsplash.com/photo-1526378722454-0d0b961d5a8b?w=800&h=600&fit=crop'
    }
  ];

  const specifications = [
    { category: 'Security Review', items: ['Former security analysts, SOC operators, and threat hunters'] },
    { category: 'Data Types', items: ['Video feeds, logs, alerts, emails, and identity documents'] }
  ];

  const caseStudies = [
    { title: 'Anomaly Detection for Campus Safety', client: 'University Campus', scope: 'Annotated 2000+ hours of camera feeds for crowding and emergency events', result: 'Improved alert precision and reduced operator fatigue' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Security & Surveillance Annotation | Millennium AI</title>
        <meta name="description" content="Video surveillance, log annotation and identity verification datasets for security AI." />
      </Helmet>

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">Security & Surveillance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">Human-reviewed annotations for video analytics, cyber threat detection, and identity verification.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-slate-800 hover:bg-slate-900">Start Security Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg">Learn Security Best Practices</Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Security Specializations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Operational-grade labeled datasets for physical and cyber security.</p>
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
                            <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
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
                      <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0" />
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight">Ready to harden detection with labeled security datasets?</h2>
          <p className="text-lg text-slate-300 mt-4">Tell us about your sensors, logs and risk priorities and we&apos;ll recommend a secure annotation approach.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">Start Security Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-white text-white hover:bg-slate-800">Learn Security Best Practices</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecuritySolutions;
