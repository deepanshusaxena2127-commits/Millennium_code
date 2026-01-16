import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const FinanceSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'document-intelligence',
      title: 'Financial Document & OCR',
      icon: '📄',
      description: 'Contract, loan, and financial statement digitization.',
      content: 'Financial institutions process thousands of documents daily. We extract structured data from contracts, loan applications, financial statements, and regulatory filings using specialized financial OCR and NLP.',
      useCases: ['Loan application data extraction', 'Contract clause identification', 'Financial statement extraction', 'Tax document processing'],
      benefits: ['Finance terminology expertise', 'Regulatory document handling', 'Handwritten amount extraction'],
      image: 'https://images.unsplash.com/photo-1554224311-beee415c15c7?w=1200&h=800&fit=crop'
    },
    {
      id: 'fraud-detection',
      title: 'Fraud & Anomaly Labeling',
      icon: '🚨',
      description: 'Transaction and behavior data labeling for fraud prevention.',
      content: 'Fraud detection requires labeled historical data. We identify and classify fraudulent transactions, suspicious patterns, and anomalous behaviors across all financial instruments.',
      useCases: ['Credit card fraud classification', 'Wire transfer anomaly detection', 'KYC data validation', 'AML transaction flagging'],
      benefits: ['Fraud investigator expertise', 'Multi-language data handling', 'Regulatory compliance (FinCEN, OFAC)'],
      image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=800&fit=crop'
    },
    {
      id: 'sentiment-nlp',
      title: 'Sentiment & Intent Analysis',
      icon: '💬',
      description: 'Customer communication and news sentiment labeling.',
      content: 'Market sentiment drives trading and investment decisions. We label customer service transcripts, earnings calls, news sentiment, and social media discussions to enable predictive models.',
      useCases: ['Earnings call sentiment', 'Customer service quality', 'News sentiment analysis', 'Brand mention sentiment'],
      benefits: ['Financial analyst perspective', 'Multi-language expertise', 'Real-time news processing'],
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=800&fit=crop'
    },
    {
      id: 'risk-assessment',
      title: 'Credit Risk & Underwriting',
      icon: '📊',
      description: 'Borrower profile and creditworthiness labeling.',
      content: 'Credit decisions depend on historical default data. We label borrower attributes, financial metrics, and outcomes to train credit risk models covering retail, commercial, and sovereign risk.',
      useCases: ['Loan outcome classification', 'Borrower health assessment', 'Credit score assignment', 'Collateral valuation'],
      benefits: ['Credit analyst expertise', 'Financial ratio standardization', 'Default database knowledge'],
      image: 'https://images.unsplash.com/photo-1591092228996-e5e99e9fffe9?w=1200&h=800&fit=crop'
    }
  ];

  const coreCapabilities = [
    { icon: <Cpu className="w-6 h-6" />, title: 'Financial Scale', description: 'Process millions of transactions and documents with compliance precision' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Expertise', description: 'Multi-currency and multi-jurisdictional financial workflows' },
    { icon: <Lock className="w-6 h-6" />, title: 'Security & Compliance', description: 'SOX, PCI-DSS, and regulatory-grade secure workflows' },
    { icon: <Zap className="w-6 h-6" />, title: 'High-Precision Labeling', description: 'Financial accuracy with auditable quality assurance' }
  ];

  const whyChooseUs = [
    { title: 'Financial Services Experience', description: 'Teams with banking, fintech, and investment background understand compliance and risk landscapes.' },
    { title: 'Regulatory Expertise', description: 'SEC, KYC, AML, and sanctions compliance built into every dataset.' },
    { title: 'Data Integrity', description: 'Cryptographic validation and audit trails for regulated workflows.' },
    { title: 'Sensitive Data Handling', description: 'SOX-compliant and PCI-DSS secure processing for financial data.' }
  ];

  const specs = [
    { title: 'Quality & Compliance', items: ['SOX compliance', 'PCI-DSS secure processing', 'Regulatory audit trails', 'Data encryption and access controls'] },
    { title: 'Data Capability', items: ['Multi-currency support', 'OCR for 50+ document types', 'Real-time transaction labeling', 'Regulatory filing extraction'] }
  ];

  const caseStudies = [
    { title: 'Loan Portfolio Risk Labeling', description: '', challenge: '', solution: '', results: 'Labeled 5M+ loan records; enabled risk model with 94% prediction accuracy for defaults.' }
  ];

  const faqs = [
    { question: 'How do you handle sensitive financial data?', answer: 'We maintain SOX, PCI-DSS compliance, encrypted workflows, and can operate in secure, air-gapped environments.' },
    { question: 'Can you handle international formats and currencies?', answer: 'Yes — multi-currency support, localized OCR, and regional compliance expertise across 50+ countries.' }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/finance`} />
        <title>Financial Services Data Annotation | MillenniumAI</title>
        <meta name="description" content="Enterprise financial document extraction, fraud detection, and credit risk labeling with compliance-grade quality." />
        <meta name="keywords" content="financial document annotation, fraud detection, credit risk, loan labeling" />
        <meta property="og:title" content="Financial Services Data Annotation" />
        <meta property="og:description" content="Regulatory-grade annotation for financial AI and risk models." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground">Financial Services</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">Enterprise-grade annotation for loan portfolios, document extraction, fraud detection and credit risk models.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all flex items-center gap-2">Start Your Project <ArrowRight className="w-4 h-4" /></Button>
              <Button variant="outline" onClick={() => navigate('/company/about')} className="border-border text-foreground hover:bg-secondary">Learn More</Button>
            </div>
          </motion.div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
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
            <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Financial Annotation Solutions</motion.h2>
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

        {/* WHY CHOOSE US */}
        <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
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

        {/* CASE STUDIES */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Real-World Financial Projects</motion.h2>
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

        {/* TECH SPECS */}
        <section className="py-20 px-4 max-w-7xl mx-auto bg-background">
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

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">Ready to Label Your Financial Data?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.1 }} className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Get a custom annotation proposal for your financial datasets and compliance requirements</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.2 }} className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/contact')} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-lg">Request Annotation Proposal</Button>
              <Button variant="outline" onClick={() => navigate('/')} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">View Other Solutions</Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinanceSolutions;
