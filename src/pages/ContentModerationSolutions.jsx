import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const ContentModerationSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'text-moderation',
      title: 'Text Content Moderation',
      icon: '📝',
      description: 'Classification of harmful, inappropriate, and policy-violating text content.',
      content: 'Text moderation protects your platform and users from harmful content. Our expert annotators classify text across multiple harm dimensions—hate speech, violence, sexual content, misinformation, spam, and policy violations. We provide nuanced labeling that enables AI systems to understand context and intent.',
      useCases: [
        'Hate speech and discriminatory language detection',
        'Violence and self-harm content identification',
        'Sexual and adult content classification',
        'Misinformation and disinformation flagging',
        'Spam and suspicious activity detection',
        'Toxic comment and cyberbullying identification'
      ],
      benefits: [
        'Multi-dimensional harm classification',
        'Context-aware and intent-based labeling',
        'Cultural sensitivity and regional variations',
        'Real-time inference support with efficient models'
      ],
      image: 'https://images.unsplash.com/photo-1580130037089-1e708ec3e2ac?w=800&h=600&fit=crop'
    },
    {
      id: 'image-moderation',
      title: 'Image & Visual Content Moderation',
      icon: '🖼️',
      description: 'Detection of NSFW, harmful, and policy-violating visual content.',
      content: 'Visual moderation requires understanding image content across multiple safety dimensions. Our annotators classify images for NSFW content, violence, hate symbols, and platform policy violations. We handle edge cases, memes, and context-dependent content with expertise.',
      useCases: [
        'NSFW and adult content detection',
        'Violence and injury imagery classification',
        'Hate symbols and extremist content flagging',
        'Copyright and fake content identification',
        'Quality and scam detection',
        'Protected person/celebrity identification'
      ],
      benefits: [
        'NSFW classification across contexts',
        'Symbol and gesture recognition expertise',
        'Meme and context-aware analysis',
        'Rapid response to emerging harmful content'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'video-moderation',
      title: 'Video Content Moderation',
      icon: '🎬',
      description: 'Temporal and frame-based analysis of video content for policy violations.',
      content: 'Video moderation combines visual and audio analysis across time. Our teams identify harmful content throughout videos, flag timestamps of violations, and assess severity. We handle long-form content, live streams, and user-generated videos at scale.',
      useCases: [
        'Long-form video content analysis and flagging',
        'Live stream monitoring and real-time moderation',
        'Violence and injury detection across frames',
        'Sexual content and exploitation identification',
        'Audio-visual content correlation analysis',
        'Timestamp-based violation marking'
      ],
      benefits: [
        'Temporal analysis across video length',
        'Frame-level and sequence-level analysis',
        'Audio-visual synchronization',
        'Efficient sampling for long videos'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'audio-moderation',
      title: 'Audio & Speech Moderation',
      icon: '🔊',
      description: 'Detection of harmful speech, hate speech, and policy violations in audio.',
      content: 'Audio moderation detects harmful speech across languages and accents. Our annotators transcribe and classify audio for hate speech, harassment, threats, and misinformation. We provide multi-language support with cultural context understanding.',
      useCases: [
        'Hate speech detection in audio and voice',
        'Harassment and threat identification',
        'Misinformation and propaganda detection',
        'Voice deepfake and synthetic speech detection',
        'Multilingual audio moderation (50+ languages)',
        'Real-time speech monitoring for platforms'
      ],
      benefits: [
        'Multi-language hate speech expertise',
        'Accent and dialect handling',
        'Sarcasm and context-aware analysis',
        'Voice authentication and deepfake detection'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    },
    {
      id: 'context-labels',
      title: 'Context Labels & Explanations',
      icon: '📌',
      description: 'Nuanced categorization with explanatory context for moderation decisions.',
      content: 'Effective moderation requires context. Our experts provide detailed explanations for moderation decisions, identify specific violations, and categorize severity levels. This context helps both humans and AI systems understand why content was flagged.',
      useCases: [
        'Severity level assessment (low, medium, high, critical)',
        'Specific violation reason identification',
        'Context explanation and decision justification',
        'Appeal support with detailed reasoning',
        'Bias detection and fairness verification',
        'Edge case documentation and categorization'
      ],
      benefits: [
        'Transparent moderation reasoning',
        'Appeal-friendly context and explanations',
        'Bias detection and fairness auditing',
        'Continuous model improvement insights'
      ],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop'
    },
    {
      id: 'policy-alignment',
      title: 'Custom Policy Alignment & Training',
      icon: '⚖️',
      description: 'Tailored annotation aligned with your platform-specific policies.',
      content: 'Every platform has unique moderation needs. We create custom annotation guidelines aligned with your policies, train annotators to your specifications, and validate consistency. Our approach ensures moderation decisions reflect your brand values and compliance requirements.',
      useCases: [
        'Custom policy guideline creation and documentation',
        'Annotator training and quality certification',
        'Policy-specific edge case handling',
        'Industry compliance alignment (COPPA, DSA, NetzDG)',
        'Brand safety and reputational risk assessment',
        'Adversarial policy testing and evaluation'
      ],
      benefits: [
        'Custom guidelines aligned to your policies',
        'Certified annotator teams trained on your standards',
        'Policy consistency across all content',
        'Compliance with regional regulations'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Scale',
      description: 'Moderate millions of content items monthly. Distributed teams enable 24/7 moderation with consistent quality and rapid response times.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Global Coverage',
      description: 'Multilingual moderation support for 50+ languages with cultural context and regional policy variations.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'ISO 27001 certified with GDPR, COPPA, DSA compliance. Secure handling of sensitive user-generated content.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Speed & Efficiency',
      description: 'Fast turnaround for urgent moderation needs. Real-time support for live streams and time-sensitive content.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'Safety Expertise: Deep understanding of online harms, exploitation, and emerging threats across platforms',
    'Scalable Operations: 1000+ trained moderators across time zones enabling 24/7 coverage and rapid response',
    'Cultural Competency: Multilingual teams with cultural context understanding for nuanced moderation',
    'Advanced Tooling: Custom moderation platforms with workflow optimization and quality dashboards',
    'Compliance Focused: Expert knowledge of GDPR, COPPA, DSA, NetzDG, and industry regulations',
    'Psychological Support: Mental health resources for moderators handling traumatic content'
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/content-moderation`} />
        <title>Content Moderation Data Annotation | MillenniumAI</title>
        <meta name="description" content="Text, image, and video moderation data labeling for safety." />
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
            <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-1 text-sm font-semibold">
              CONTENT MODERATION SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Content Moderation Services for Safe, Trustworthy Platforms
            </h1>
            <p className="text-xl text-red-100 max-w-3xl leading-relaxed">
              Protect your platform and users with expert content moderation across text, images, video, and audio. Multilingual, culturally-aware, and compliance-focused moderation at enterprise scale.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-red-900 hover:bg-red-50 font-bold"
              >
                Start Moderation Service
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-red-800"
              >
                Explore Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Content Moderation Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete moderation solutions for every content type and platform requirement.
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
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-red-600 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Moderation Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Moderation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized moderation expertise across text, images, video, and audio platforms.
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
                    ? 'border-red-600 bg-red-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-red-300'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-red-700' : 'text-gray-900'}`}>
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
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{categories[activeCategory].icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900">{categories[activeCategory].title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {categories[activeCategory].content}
                </p>

                {/* Use Cases */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Real-World Use Cases</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Our Approach</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 text-white hover:bg-red-700 font-bold"
                  >
                    Request Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative h-96 lg:h-auto overflow-hidden bg-gray-100">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Moderation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by platforms globally for expertise, scale, compliance, and user safety.
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
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Specifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technical capabilities and compliance standards for platform safety and user protection.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-red-900 mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" /><span className="text-red-800">98%+ accuracy through expert review</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" /><span className="text-red-800">Multi-layer QA with consensus validation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" /><span className="text-red-800">Regular audits for bias and fairness</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" /><span className="text-red-800">Benchmark dataset validation</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">GDPR, COPPA, DSA, NetzDG compliant</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">ISO 27001 Information Security</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Secure content handling and encryption</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Data residency and sovereignty</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Moderation Tools</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Custom moderation workflows and dashboards</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Real-time content flagging and appeals</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">API integration for seamless workflows</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Audit logs and decision transparency</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-900 mb-6">Scale & Response</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Moderate millions of items per day</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">24/7 operations with global coverage</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Real-time escalation for urgent content</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Custom SLA and response time agreements</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to protect your platform with expert content moderation?
            </h2>
            <p className="text-lg text-red-100">
              Let&apos;s discuss your moderation needs and create a custom solution for your platform&apos;s safety and compliance.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 font-bold"
              >
                Start Moderation Service
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-orange-700"
              >
                Learn Moderation Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContentModerationSolutions;
