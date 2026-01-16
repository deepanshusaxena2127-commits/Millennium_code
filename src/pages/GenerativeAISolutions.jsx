import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const GenerativeAISolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'rlhf-training',
      title: 'RLHF Training Data',
      icon: '🔄',
      description: 'Preference ranking and human feedback for model alignment.',
      content: 'Reinforcement Learning from Human Feedback is essential for creating AI systems that align with human values and preferences. Our expert annotators evaluate and rank model outputs, capturing nuanced preference judgments that teach models to generate higher-quality, more helpful, and safer responses.',
      useCases: [
        'Response quality ranking for instruction-following models',
        'Safety and harmfulness assessment across diverse scenarios',
        'Preference data for alignment training and fine-tuning',
        'Multi-dimensional feedback on helpfulness, accuracy, and style',
        'Edge case and jailbreak attempt identification',
        'Cultural sensitivity and bias evaluation'
      ],
      benefits: [
        'Expert human evaluators with domain expertise',
        'Nuanced preference capture for complex tradeoffs',
        'Bias detection and mitigation throughout feedback',
        'Large-scale preference dataset generation'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering & Evaluation',
      icon: '💬',
      description: 'High-quality prompt creation and model output evaluation.',
      content: 'Effective prompts are the foundation of generative AI performance. We create diverse, challenging, and well-structured prompts that test model capabilities across domains, languages, and reasoning complexity. Our evaluation teams assess outputs for accuracy, coherence, factuality, and alignment with requirements.',
      useCases: [
        'Diverse prompt dataset generation across 50+ domains',
        'Few-shot example creation for in-context learning',
        'Chain-of-thought and reasoning prompt development',
        'Model output quality evaluation and scoring',
        'Factuality and hallucination assessment',
        'Multi-turn conversation data creation'
      ],
      benefits: [
        'Domain-specific prompt expertise across industries',
        'Comprehensive reasoning pattern coverage',
        'Factuality verification by subject matter experts',
        'Diversity-focused prompt generation'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'instruction-tuning',
      title: 'Instruction-Tuning Datasets',
      icon: '📋',
      description: 'Task-specific training data for model fine-tuning and adaptation.',
      content: 'Instruction-tuning enables models to follow user directions and adapt to specific tasks. We create task-specific instruction-output pairs that teach models to be helpful across diverse domains. Our datasets span classification, extraction, summarization, generation, and reasoning tasks.',
      useCases: [
        'Task-specific instruction-output pair generation',
        'Domain adaptation datasets for specialized fields',
        'Multilingual instruction dataset creation',
        'Complex reasoning task annotations',
        'Code generation and technical task instruction data',
        'Creative writing and content generation guidelines'
      ],
      benefits: [
        'Task diversity across 100+ instruction types',
        'Expert-level output quality across domains',
        'Multilingual instruction-output pairs',
        'Complexity scaling from simple to advanced'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'data-synthesis',
      title: 'Synthetic Data Generation & Curation',
      icon: '🎨',
      description: 'Creating diverse training data through generation and quality curation.',
      content: 'High-quality training data is the bottleneck in generative AI. We combine human creation and curation to generate diverse, representative datasets that improve model performance. Our teams create synthetic data, verify quality, and ensure comprehensive coverage of use cases and edge cases.',
      useCases: [
        'Synthetic dialogue and conversation generation',
        'Creative content and story generation with quality gates',
        'Technical documentation and code examples',
        'Q&A pair generation for knowledge domains',
        'Edge case and adversarial example creation',
        'Domain-specific language and terminology datasets'
      ],
      benefits: [
        'Large-scale synthetic data generation',
        'Quality curation and verification by experts',
        'Diversity and edge case coverage',
        'Domain-specific language authenticity'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    },
    {
      id: 'safety-alignment',
      title: 'Safety & Alignment Evaluation',
      icon: '🛡️',
      description: 'Comprehensive safety assessment and harmful content detection.',
      content: 'Building safe and aligned AI systems requires rigorous evaluation of model behavior. Our safety experts identify harmful outputs, assess alignment with guidelines, detect biases, and evaluate responses across sensitive topics. We help you build responsible AI systems.',
      useCases: [
        'Toxicity, hate speech, and harmful content detection',
        'Bias and fairness evaluation across demographic groups',
        'Jailbreak and adversarial prompt resistance testing',
        'Misinformation and factuality verification',
        'Privacy-sensitive information handling assessment',
        'Compliance with content policies and regulations'
      ],
      benefits: [
        'Expert safety and alignment assessment',
        'Comprehensive bias and fairness evaluation',
        'Adversarial robustness testing',
        'Regulatory compliance verification'
      ],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop'
    },
    {
      id: 'multimodal-support',
      title: 'Multimodal Data Support',
      icon: '🖼️',
      description: 'Image captioning, visual reasoning, and multimodal alignment data.',
      content: 'Generative AI increasingly handles multiple modalities. We provide image captioning, visual question answering, scene understanding, and alignment between images and text. Our annotators create comprehensive multimodal training data for vision-language models.',
      useCases: [
        'Image captioning at scale with quality evaluation',
        'Visual question answering (VQA) dataset creation',
        'Object identification and scene understanding',
        'Image-text alignment and matching pairs',
        'Visual reasoning and explanation generation',
        'Chart, diagram, and technical image interpretation'
      ],
      benefits: [
        'Large-scale image captioning expertise',
        'Diverse visual understanding coverage',
        'Multilingual caption generation',
        'Technical and specialized visual domain expertise'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Scale',
      description: 'Generate and evaluate millions of data points for large language models. Distributed teams ensure continuous throughput and rapid iteration cycles.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Global Coverage',
      description: 'Multilingual content creation and evaluation across 50+ languages with cultural sensitivity and localization expertise.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'ISO 27001 certified with GDPR, HIPAA, and industry compliance. Secure handling of sensitive training data.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Speed & Efficiency',
      description: 'Optimized workflows for rapid data generation and iteration. Meet aggressive project timelines without quality compromise.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'AI Expertise: Our team understands LLM training, alignment, and deployment requirements',
    'Quality at Scale: Generate millions of high-quality training examples without quality degradation',
    'Domain Specialists: Expert annotators across healthcare, finance, legal, technology, and more',
    'Safety Focus: Dedicated safety and alignment evaluation for responsible AI development',
    'Rapid Iteration: Agile workflows enabling quick feedback loops for model improvement',
    'Flexible Engagement: Project-based, retainer, or team augmentation for all project sizes'
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/generative-ai`} />
        <title>Generative AI Training Data | MillenniumAI</title>
        <meta name="description" content="RLHF training data, instruction-tuning, safety evaluation, and prompt engineering for enterprise LLMs." />
        <meta name="keywords" content="generative AI, RLHF, LLM training, instruction-tuning" />
        <meta property="og:title" content="Generative AI Training Data" />
        <meta property="og:description" content="Enterprise training data solutions for large language models." />
      </Helmet>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 mb-12"
          >
            <div className="inline-block bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-1 text-sm font-semibold">
              GENERATIVE AI SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Generative AI Training Data for Enterprise LLMs
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">
              High-quality instruction, preference, and evaluation data for training, fine-tuning, and aligning Large Language Models. From RLHF to safety evaluation, we provide complete training data solutions with enterprise-grade quality and compliance.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-primary-foreground text-primary hover:opacity-90 font-bold"
              >
                Start Your LLM Project
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-purple-800"
              >
                Explore Capabilities
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Enterprise Generative AI Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete training data solutions for every stage of LLM development and deployment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Generative AI Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Generative AI Data Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized training data services for every aspect of large language model development and alignment.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  activeCategory === idx
                    ? 'border-primary bg-primary/10 shadow-md'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-primary' : 'text-foreground'}`}>
                  {category.title.split(' ')[0]}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Active Category Detail */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{categories[activeCategory].icon}</span>
                  <h3 className="text-3xl font-bold text-foreground">{categories[activeCategory].title}</h3>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {categories[activeCategory].content}
                </p>

                {/* Use Cases */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-foreground mb-4">Real-World Use Cases</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-foreground mb-4">Our Approach</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-primary text-primary-foreground hover:opacity-90 font-bold"
                  >
                    Discuss Your Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative h-96 lg:h-auto overflow-hidden bg-secondary">
                <motion.img
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Generative AI Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading AI labs and enterprises for training data quality, scale, and responsible AI development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Enterprise Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technical capabilities and compliance standards for responsible generative AI development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-primary/10 border border-primary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">99%+ accuracy through expert evaluation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Multi-layer quality control with domain experts</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Inter-rater agreement metrics {'>='} 0.85 Cohen&apos;s kappa</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Regular gold-standard dataset validation</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-primary/10 border border-primary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">ISO 27001 Information Security Certification</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">GDPR, HIPAA, and SOC 2 Type II compliant</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Secure data handling and encryption protocols</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Data residency options (EU, US, APAC)</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-primary/10 border border-primary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Safety & Alignment Focus</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Comprehensive safety and bias evaluation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">RLHF and preference ranking at scale</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Alignment with human values and requirements</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Responsible AI and ethics expertise</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-primary/10 border border-primary rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Scale & Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Generate millions of training examples monthly</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">1000+ specialized annotators globally</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">24/7 operations with distributed teams</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Custom SLA and rapid iteration cycles</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to build enterprise-grade LLMs with high-quality training data?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Let&apos;s discuss your specific generative AI requirements and create a custom training data solution for your models.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-primary-foreground text-primary hover:opacity-90 font-bold"
              >
                Start Your AI Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn AI Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default GenerativeAISolutions;
