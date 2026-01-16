import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';

const FullStackDevSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'custom-tools',
      title: 'Custom Annotation Tools',
      icon: '🛠️',
      description: 'Purpose-built annotation platforms tailored to your data and workflow.',
      content: 'Custom annotation tools accelerate labeling and improve quality. We design and build tools optimized for your specific task—bounding box tools, segmentation interfaces, form builders, or specialized workflows. Tools include quality dashboards, team management, and export integrations.',
      useCases: [
        'Task-specific annotation interface design and development',
        'Multi-modal annotation tool creation (image + text + audio)',
        'Real-time collaboration and team coordination tools',
        'Quality control dashboards and analytics',
        'Workflow automation and task routing',
        'Integration with existing data pipelines and systems'
      ],
      benefits: [
        'Optimized UI/UX for faster annotation',
        'Built-in QA and consistency checking',
        'Team management and progress tracking',
        'Custom integrations with your infrastructure'
      ],
      image: 'https://images.unsplash.com/photo-1684369585053-2b35888b3ae8?w=800&h=600&fit=crop'
    },
    {
      id: 'ml-pipeline',
      title: 'ML Pipeline Integration',
      icon: '⚙️',
      description: 'End-to-end integration of annotation data into your ML training systems.',
      content: 'We integrate annotation data seamlessly into your training pipelines. Our engineers handle data format conversion, validation, quality assurance, and version control. We support continuous annotation workflows with active learning integration.',
      useCases: [
        'Data pipeline design and implementation',
        'Annotation format conversion and standardization',
        'Active learning and model-guided annotation',
        'Continuous labeling and model improvement cycles',
        'Dataset version control and experiment tracking',
        'Quality metrics and confidence scoring integration'
      ],
      benefits: [
        'Seamless data flow from annotation to training',
        'Automated quality validation and filtering',
        'Active learning to reduce labeling needs',
        'Version control and experiment reproducibility'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'api-integration',
      title: 'API Development & Integration',
      icon: '🔌',
      description: 'RESTful and GraphQL APIs for seamless annotation platform integration.',
      content: 'We develop production-grade APIs that enable your applications to interact with annotation data and workflows. APIs support real-time data submission, status tracking, results retrieval, and team management. Full documentation and SDKs included.',
      useCases: [
        'REST API design and implementation',
        'Real-time data submission and feedback',
        'Webhook integration for event notifications',
        'SDK development for popular languages',
        'Authentication and permission management',
        'Rate limiting and scalability for high-volume requests'
      ],
      benefits: [
        'Scalable API architecture for high throughput',
        'Comprehensive API documentation and examples',
        'Client SDKs for Python, JavaScript, Java, Go',
        'Real-time webhooks for event-driven workflows'
      ],
      image: 'https://images.unsplash.com/photo-1642521572454-2216ae69b393?w=800&h=600&fit=crop'
    },
    {
      id: 'quality-systems',
      title: 'Quality Assurance Systems',
      icon: '✅',
      description: 'Automated quality control and consistency validation systems.',
      content: 'QA systems ensure annotation consistency and accuracy. We build automated validation, inter-rater agreement metrics, anomaly detection, and consensus mechanisms. Systems include dashboards for monitoring quality trends.',
      useCases: [
        'Automated data validation and schema enforcement',
        'Inter-annotator agreement metrics (Cohen\'s kappa, Fleiss\' kappa)',
        'Anomaly and outlier detection in annotations',
        'Consensus mechanisms for difficult cases',
        'Quality trend analysis and reporting',
        'Automated flagging of low-quality annotations'
      ],
      benefits: [
        'Maintains 99%+ accuracy standards',
        'Identifies quality issues early',
        'Statistical validation and metrics',
        'Automated corrective actions'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'data-management',
      title: 'Data Management & Storage',
      icon: '💾',
      description: 'Secure storage, version control, and data governance for annotation datasets.',
      content: 'Comprehensive data management handles storage, backup, versioning, and compliance. We implement secure cloud infrastructure, audit logging, data lineage tracking, and automated backup strategies.',
      useCases: [
        'Cloud storage with automatic backup and redundancy',
        'Version control and dataset snapshots',
        'Data lineage and provenance tracking',
        'Compliance and audit logging (GDPR, HIPAA)',
        'Access control and encryption',
        'Data retention and deletion policies'
      ],
      benefits: [
        'Secure, redundant cloud storage',
        'Complete audit trail and compliance',
        'Version control for dataset management',
        'Scalable storage for large datasets'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    },
    {
      id: 'consulting-strategy',
      title: 'AI/ML Consulting & Strategy',
      icon: '📊',
      description: 'Strategic guidance on data annotation and ML workflow optimization.',
      content: 'Our experts provide strategic consulting on data strategy, annotation planning, and ML workflow optimization. We help determine annotation requirements, select appropriate methodologies, and plan for scale.',
      useCases: [
        'Data annotation strategy and planning',
        'Labeling efficiency and cost optimization',
        'Active learning and intelligent sampling',
        'Annotation workflow design and optimization',
        'Team scaling and quality management',
        'Metrics and KPI definition'
      ],
      benefits: [
        'Expert guidance on data strategy',
        'Cost and timeline optimization',
        'Best practices and lessons learned',
        'Roadmap development and milestones'
      ],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Engineering',
      description: 'Full-stack development expertise in Python, JavaScript, Go, and cloud infrastructure. Scalable systems designed for production.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Cloud-Native Architecture',
      description: 'AWS, Google Cloud, and Azure expertise. Secure, scalable infrastructure with automatic scaling and high availability.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security, encryption, audit logging, and compliance with GDPR, HIPAA, SOC 2, and ISO 27001.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'DevOps & Maintenance',
      description: 'Continuous integration, automated testing, monitoring, and 24/7 support for production systems.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'Full-Stack Expertise: End-to-end development from UX design to cloud infrastructure',
    'Production-Ready: Built for scale with 99.9% uptime SLAs and enterprise security',
    'ML Integration: Deep understanding of annotation, ML pipelines, and AI workflows',
    'Agile Development: Rapid iteration with continuous deployment and feedback loops',
    'Team Augmentation: Embed engineers in your team or handle full project delivery',
    'Long-term Support: Ongoing maintenance, monitoring, and optimization'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 mb-12"
          >
            <div className="inline-block bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-full px-4 py-1 text-sm font-semibold">
              FULL-STACK DEVELOPMENT SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Full-Stack Development for Data Annotation & AI Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Custom annotation tools, ML pipelines, APIs, and infrastructure. End-to-end engineering solutions to integrate annotation into your AI workflow at enterprise scale.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold"
              >
                Start Development Project
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-gray-800"
              >
                Explore Services
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Development Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete engineering solutions for annotation infrastructure and ML integration.
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
                <div className="text-gray-700 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-Stack Dev Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom engineering for annotation tools, ML pipelines, APIs, and infrastructure.
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
                    ? 'border-gray-900 bg-gray-100 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-gray-900' : 'text-gray-900'}`}>
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
                        <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-gray-900 text-white hover:bg-gray-800 font-bold"
                  >
                    Discuss Your Project
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by AI companies for engineering excellence, reliability, and expertise in annotation infrastructure.
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
                  <CheckCircle2 className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
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
              Technical standards and capabilities for production-grade annotation infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0" /><span className="text-gray-800">Backend: Python, Node.js, Go, Java</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0" /><span className="text-gray-800">Frontend: React, Vue, TypeScript</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0" /><span className="text-gray-800">Cloud: AWS, Google Cloud, Azure</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0" /><span className="text-gray-800">Databases: PostgreSQL, MongoDB, Redis</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">ISO 27001 and SOC 2 Type II compliant</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">GDPR, HIPAA, and industry compliance</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">End-to-end encryption and key management</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Audit logging and compliance tracking</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Reliability & Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">99.9% uptime SLA with automated failover</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Auto-scaling for traffic spikes</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">CDN and edge caching for global latency</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Continuous monitoring and alerting</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-900 mb-6">Development & Support</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Agile development with 2-week sprints</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Continuous integration and deployment</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">24/7 support and SLA-backed incidents</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Documentation and API reference</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to build custom annotation infrastructure for your AI systems?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss your development needs and create a custom engineering solution that scales with your growth.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold"
              >
                Start Development Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-gray-800"
              >
                Learn Engineering Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FullStackDevSolutions;
