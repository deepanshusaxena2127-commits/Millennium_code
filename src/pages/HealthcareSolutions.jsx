import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, viewportSettings, containerVariants, sectionHeaderVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';
import PageHeader from '@/components/layout/PageHeader';

const HealthcareSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'radiology-annotation',
      title: 'Medical Imaging & Radiology',
      icon: '🔬',
      description: 'Expert annotation for X-rays, CT scans, and MRI images.',
      content: 'Medical image annotation requires domain expertise and regulatory compliance. Our radiologist-trained annotators identify pathologies, measure anatomical structures, and segment organs with HIPAA-compliant workflows. We handle diverse imaging modalities and organ systems.',
      useCases: ['Chest X-ray abnormality detection', 'CT tumor segmentation', 'MRI lesion identification', 'Ultrasound artifact detection'],
      benefits: ['Licensed radiologist QA', 'Multi-modal imaging workflows', 'Regulatory traceability'],
      image: 'https://images.unsplash.com/photo-1579154204601-01d1d1d23241?w=1200&h=800&fit=crop'
    },
    {
      id: 'pathology-annotation',
      title: 'Digital Pathology',
      icon: '🧬',
              description: 'Whole-slide image annotation for diagnostic models.',
              content: 'Our pathologist-reviewed teams label giga-pixel WSI, marking tumor boundaries, grading malignancy and capturing biomarker signals for robust model training.',
              useCases: ['Tumor boundary segmentation', 'Mitotic figure annotation', 'Tissue classification'],
              benefits: ['Pathologist consensus', 'Giga-pixel handling at scale'],
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop'
            },
            {
              id: 'clinical-documentation',
              title: 'Clinical Document Extraction',
              icon: '📋',
              description: 'OCR and structured data extraction from medical records.',
              content: 'We extract diagnoses, medications, lab values and clinical events from unstructured notes and scanned forms using clinician-validated annotation protocols.',
              useCases: ['Handwritten note transcription', 'Medication extraction', 'Adverse event labeling'],
              benefits: ['HIPAA-compliant pipelines', 'Clinical term normalization'],
              image: 'https://images.unsplash.com/photo-1584308666744-24d5f400f6f1?w=1200&h=800&fit=crop'
            }
          ];

          const coreCapabilities = [
            { icon: <Cpu className="w-6 h-6" />, title: 'Clinical Scale', description: 'Process millions of images and documents with clinical QA' },
            { icon: <Globe className="w-6 h-6" />, title: 'Global Medical Experts', description: 'Board-certified physicians and specialist reviewers' },
            { icon: <Lock className="w-6 h-6" />, title: 'Security & Compliance', description: 'HIPAA, ISO 27001, SOC 2 workflows and BAAs' },
            { icon: <Zap className="w-6 h-6" />, title: 'Turnkey Workflows', description: 'Validated pipelines for imaging and clinical trials' }
          ];

          const whyChooseUs = [
            { title: 'Clinician-Led Review', description: 'Physician-reviewed labels and adjudication for high-stakes models.' },
            { title: 'Regulatory Experience', description: 'FDA and clinical trial annotation experience for submission-grade data.' },
            { title: 'Modality Expertise', description: 'Support for X-ray, CT, MRI, WSI, ultrasound and device signals.' },
            { title: 'Secure Environments', description: 'On-prem or dedicated secure cloud with strict access controls.' }
          ];

          const specs = [
            { title: 'Quality & Compliance', items: ['HIPAA BAA', 'FDA 21 CFR Part 11', 'ISO 27001', 'SOC 2 Type II'] },
            { title: 'Data Capability', items: ['Giga-pixel WSI', 'DICOM and PACS support', 'Clinical text and OCR'] }
          ];

          const caseStudies = [
            { title: 'Chest X-ray AI Model for Rural Clinics', description: '', challenge: '', solution: '', results: 'Model achieved 97.2% sensitivity for pneumonia detection.' }
          ];

          const faqs = [
            { question: 'How do you ensure HIPAA compliance?', answer: 'We maintain de-identification, secure infrastructure, and staff training; BAAs are available.' },
            { question: 'Do you support clinical trials?', answer: 'Yes — we support ICH-GCP and FDA-compliant trial annotation and reporting.' }
          ];

          return (
            <>
              <Helmet>
                <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/healthcare`} />
                <title>Healthcare & Life Sciences Data Annotation | MillenniumAI</title>
                <meta name="description" content="Enterprise medical imaging, pathology and clinical data annotation with clinician-led QA and regulatory workflows." />
                <meta name="keywords" content="medical image annotation, pathology, clinical data, HIPAA, FDA" />
                <meta property="og:title" content="Healthcare & Life Sciences Data Annotation" />
                <meta property="og:description" content="Clinician-expert annotation for medical imaging, pathology, and clinical data." />
              </Helmet>

              <div className="min-h-screen bg-background">
                <PageHeader
                  variant="industries"
                  subtitle="HEALTHCARE & LIFE SCIENCES"
                  title="Healthcare & Life Sciences"
                  description="Clinician-expert annotation and regulatory-grade datasets for medical imaging, pathology and clinical AI."
                >
                  <motion.div className="flex gap-4 justify-center flex-wrap">
                    <Button onClick={() => navigate('/contact')} className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 py-3">Start Your Project</Button>
                    <Button variant="outline" onClick={() => navigate('/company/about')} className="border-white text-white hover:bg-purple-800 px-8 py-3">Learn More</Button>
                  </motion.div>
                </PageHeader>

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
                    <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Healthcare Annotation Solutions</motion.h2>
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
                              <li key={i} className="flex gap-3 text-foreground"><Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />{b}</li>
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
                    <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Real-World Healthcare Projects</motion.h2>
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
                            <li key={i} className="flex gap-3 text-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{it}</li>
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
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">Ready to Annotate Your Clinical Data?</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportSettings} transition={{ delay: 0.1 }} className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Get a custom annotation proposal for your medical imaging and clinical datasets with clinician review</motion.p>
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

        export default HealthcareSolutions;
