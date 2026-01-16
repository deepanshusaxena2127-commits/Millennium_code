import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const LegalSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'contract-extraction',
      title: 'Contract Extraction & Clause Tagging',
      icon: '📄',
      description: 'Extract obligations, dates, parties, and risk clauses from contracts.',
      content: 'We annotate legal documents for clause boundaries, obligation extraction, and metadata normalization to power contract analytics and review automation.',
      useCases: ['Clause extraction', 'Obligation detection', 'Renewal and termination date extraction', 'Risk and liability tagging'],
      benefits: ['Legal SME-reviewed labels', 'High precision extraction for downstream workflows', 'Support for multi-jurisdiction documents'],
      image: 'https://images.unsplash.com/photo-1555371363-0f8d50b0740b?w=800&h=600&fit=crop'
    },
    {
      id: 'e-discovery',
      title: 'E-Discovery & Document Classification',
      icon: '🔎',
      description: 'Classify and prioritize documents for discovery and litigation.',
      content: 'We create labeled corpora for privileged vs non-privileged, relevant vs irrelevant, and topic classification to accelerate legal review.',
      useCases: ['Privilege identification', 'Relevance tagging', 'Topic clustering for review'],
      benefits: ['Scalable review support', 'Reduced review hours', 'Consistent reviewer guidance'],
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop'
    },
    {
      id: 'compliance-monitoring',
      title: 'Regulatory & Compliance Labeling',
      icon: '⚖️',
      description: 'Annotate text for compliance signals and regulatory obligations.',
      content: 'We tag regulatory requirements, non-compliance events, and remediation language across policy, reporting, and communications corpora.',
      useCases: ['Policy-to-text mapping', 'Compliance violation detection', 'Regulatory change impact analysis'],
      benefits: ['Legal and compliance expert reviewers', 'Audit-ready labeling workflows'],
      image: 'https://images.unsplash.com/photo-1485561233682-0c3440e6a63e?w=800&h=600&fit=crop'
    }
  ];

  const specifications = [
    { category: 'Expert Review', items: ['Licensed attorneys and paralegals', 'Domain-specific legal reviewers'] },
    { category: 'Data Types', items: ['PDF, Word, email, discovery exports, contracts'] }
  ];

  const caseStudies = [
    { title: 'Contract Clause Extraction', client: 'Global Enterprise', scope: 'Annotated 100K+ contracts for renewals and indemnity clauses', result: 'Reduced manual review time by 70%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/legal`} />
        <title>Legal & Compliance Annotation | Millennium AI</title>
        <meta name="description" content="Contract extraction, e-discovery labeling, and compliance datasets for legal AI." />
      </Helmet>

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-foreground">Legal & Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">Contract analytics, e-discovery, and regulatory labeling with legal expert review.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-primary hover:bg-primary/90">Start Legal Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-border text-foreground">Learn Legal Best Practices</Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Legal Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Accurate, auditable labels produced under legal review.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="space-y-4">
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <button onClick={() => setActiveCategory(activeCategory === index ? -1 : index)} className="w-full p-6 flex items-start justify-between hover:bg-muted transition-colors text-left">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground mt-2">{category.description}</p>
                    </div>
                  </div>
                </button>

                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: activeCategory === index ? 'auto' : 0, opacity: activeCategory === index ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden border-t border-border">
                  <div className="p-6 bg-card space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">{category.content}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Key Use Cases</h4>
                      <ul className="space-y-2">
                        {category.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {category.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Enterprise Specifications</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Case Studies</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground font-semibold mb-4">Client: {study.client}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Scope</p>
                    <p className="text-muted-foreground">{study.scope}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Result</p>
                    <p className="text-muted-foreground">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight">Ready to accelerate contract review and compliance with labeled legal data?</h2>
          <p className="text-lg text-primary-foreground mt-4">Describe your document types and review priorities and we&apos;ll prepare a secure annotation plan.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-card text-foreground hover:opacity-95 font-bold">Start Legal Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-border text-primary-foreground hover:bg-primary/90">Learn Legal Best Practices</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalSolutions;
