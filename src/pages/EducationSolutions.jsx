import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const EducationSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'ed-tech-content-tagging',
      title: 'Learning Content Tagging & Alignment',
      icon: '📚',
      description: 'Align textbooks, videos and assessments to learning standards.',
      content: 'We annotate learning objects, map competencies to standards (Common Core, NGSS, etc.), and tag granular learning objectives to enable personalized learning and search.',
      useCases: [
        'Standards alignment for curriculum mapping',
        'Question-to-concept tagging for assessment banks',
        'Video chaptering and concept indexing',
        'Content difficulty and grade-level labeling'
      ],
      benefits: [
        'Instructional design expertise',
        'Grade-level and subject matter accuracy',
        'Support for adaptive learning systems'
      ],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
    },
    {
      id: 'grading-assessment',
      title: 'Automated Grading & Assessment Data',
      icon: '📝',
      description: 'Label student responses and rubric-driven scores for supervised models.',
      content: 'We produce high-quality graded examples across open-response, short-answer, and code assignments to train auto-grading and feedback models.',
      useCases: [
        'Short answer scoring',
        'Rubric-based essay grading',
        'Code submission feedback and annotation',
        'Formative assessment item tagging'
      ],
      benefits: [
        'Rater calibration and inter-rater agreement',
        'Pedagogical quality assurance',
        'Privacy-preserving labeling workflows'
      ],
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop'
    },
    {
      id: 'accessibility-annotation',
      title: 'Accessibility & Inclusive Content',
      icon: '♿',
      description: 'Annotate for readability, alt text, and accessibility metadata.',
      content: 'We label content for accessibility (alt text, reading level, transcripts) and tag inclusive language to support equitable learning experiences.',
      useCases: [
        'Alt text generation datasets',
        'Transcription and caption quality',
        'Reading level and readability scoring'
      ],
      benefits: [
        'Accessibility best-practice alignment',
        'Support for assistive technology',
        'Diverse learner representation in data'
      ],
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop'
    }
  ];

  const specifications = [
    {
      category: 'Domain Expertise',
      items: [
        'Educators and curriculum specialists',
        'Assessment designers and psychometricians',
        'Special education and accessibility experts'
      ]
    },
    {
      category: 'Data Types',
      items: ['Text, video, audio transcripts, code submissions, question banks']
    }
  ];

  const caseStudies = [
    {
      title: 'Automated Short Answer Scoring',
      client: 'Large EdTech Platform',
      scope: 'Graded 200K+ student responses across science and social studies',
      result: 'Trained models achieved human-level correlation and reduced manual grading workload by 60%'
    }
  ];

  const faqs = [
    {
      question: 'Can you label student submissions with privacy safeguards?',
      answer: 'Yes — we support anonymization, synthetic augmentation, and secure environments for learner data.'
    },
    {
      question: 'Do you support standards mapping?',
      answer: 'We map to common standards (Common Core, NGSS) and can ingest custom taxonomies.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/education`} />
        <title>Education Data Annotation | MillenniumAI</title>
        <meta name="description" content="Curriculum alignment, grading datasets, and accessibility labeling for education AI." />
        <meta name="keywords" content="education annotation, curriculum mapping, grading, assessment" />
        <meta property="og:title" content="Education Data Annotation" />
        <meta property="og:description" content="Enterprise education and EdTech data annotation." />
      </Helmet>

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-foreground">Education & EdTech</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Curriculum mapping, grading datasets, accessibility and learning analytics labeling.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Education Project
            </Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              Learn Education Best Practices
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Education Specializations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">High-quality labeled datasets for learning systems.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="space-y-4">
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <button onClick={() => setActiveCategory(activeCategory === index ? -1 : index)} className="w-full p-6 flex items-start justify-between hover:bg-secondary transition-colors text-left">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground mt-2">{category.description}</p>
                    </div>
                  </div>
                </button>

                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: activeCategory === index ? 'auto' : 0, opacity: activeCategory === index ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden border-t border-border">
                  <div className="p-6 bg-secondary space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">{category.content}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Key Use Cases</h4>
                      <ul className="space-y-2">
                        {category.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground">
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
                          <li key={idx} className="flex gap-3 text-foreground">
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
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
                    <li key={itemIdx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
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
                    <p className="text-foreground">{study.scope}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Result</p>
                    <p className="text-foreground">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight">Ready to build education datasets that improve learning outcomes?</h2>
          <p className="text-lg text-primary-foreground/90 mt-4">Tell us about your curriculum, assessments, and platform requirements and we&apos;ll design a labeling plan.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold">Start Education Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Learn Education Best Practices</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSolutions;
