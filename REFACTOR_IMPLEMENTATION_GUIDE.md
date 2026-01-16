# COMPLETE REFACTORED SOLUTION PAGES
# These are the complete refactored files ready to replace the originals

## FILE 1: ManufacturingSolutions.jsx
# Replace entire file with this content from lines 1-end

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const ManufacturingSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'quality-inspection',
      title: 'Quality & Defect Inspection',
      icon: '🔍',
      description: 'Manufacturing defect and quality control imagery annotation.',
      content: 'Quality control is critical in manufacturing. We annotate product and component imagery to identify defects (scratches, dents, surface irregularities, color variations) at various production stages.',
      useCases: [
        'Surface defect detection and classification',
        'Dimensional accuracy and tolerance checking',
        'Color and finish quality assessment',
        'Assembly and component fit verification',
        'Packaging quality and labeling verification',
        'Electrical and mechanical functionality testing'
      ],
      benefits: [
        'Quality engineering and manufacturing expertise',
        'Statistical process control knowledge',
        'Industry-specific defect standards (ISO, ASTM)',
        'Multi-stage production assessment',
        'Cost reduction through early defect detection'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
      id: 'equipment-maintenance',
      title: 'Equipment & Maintenance Monitoring',
      icon: '⚙️',
      description: 'Predictive maintenance and equipment health labeling.',
      content: 'Equipment downtime costs millions. We annotate equipment imagery and sensor data to predict maintenance needs, identify wear patterns, and prevent failures.',
      useCases: [
        'Bearing wear and lubrication status assessment',
        'Corrosion and material degradation detection',
        'Vibration and noise pattern classification',
        'Seal and gasket integrity assessment',
        'Temperature anomaly and hot spot detection',
        'Alignment and positioning accuracy verification'
      ],
      benefits: [
        'Mechanical and electrical engineering expertise',
        'Predictive maintenance algorithm training',
        'Industrial equipment domain knowledge',
        'Multi-sensor data fusion understanding',
        'Downtime and safety risk assessment'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
      id: 'workplace-safety',
      title: 'Workplace Safety & Compliance',
      icon: '⚠️',
      description: 'Safety protocol compliance and hazard detection.',
      content: 'Workplace safety is paramount. We annotate facility imagery and video to verify safety compliance, identify hazards, and monitor worker safety protocols.',
      useCases: [
        'Personal protective equipment (PPE) compliance verification',
        'Hazard and risk condition identification',
        'Fire safety and emergency exit verification',
        'Machine guarding and safety barrier compliance',
        'Spill and contamination event detection',
        'Worker behavior and ergonomics assessment'
      ],
      benefits: [
        'OSHA and safety regulation expertise',
        'Risk assessment and hazard analysis knowledge',
        'Incident pattern recognition',
        'Multi-facility and regional compliance tracking',
        'Safety culture and training effectiveness measurement'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
      id: 'supply-chain-logistics',
      title: 'Supply Chain & Inventory',
      icon: '📦',
      description: 'Inventory tracking and supply chain event annotation.',
      content: 'Supply chain visibility prevents shortages and delays. We track inventory levels, material movement, and supply chain events from facility imagery and transaction data.',
      useCases: [
        'Inventory level counting and verification',
        'Material type and specification identification',
        'Storage location and bin accuracy verification',
        'Shipping damage and condition assessment',
        'Lot and batch traceability tracking',
        'Just-in-time (JIT) inventory optimization'
      ],
      benefits: [
        'Supply chain management expertise',
        'Enterprise resource planning (ERP) system knowledge',
        'Multi-site inventory coordination',
        'Supplier and vendor management integration',
        'Cost optimization and waste reduction'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
      id: 'process-optimization',
      title: 'Process & Production Analytics',
      icon: '📊',
      description: 'Production efficiency and process optimization data.',
      content: 'Manufacturing efficiency depends on detailed process analytics. We label production metrics, process steps, cycle times, and efficiency events to train optimization models.',
      useCases: [
        'Production cycle time and bottleneck identification',
        'Resource utilization and capacity planning data',
        'Worker productivity and task allocation',
        'Quality variation and root cause analysis',
        'Energy consumption and sustainability metrics',
        'Throughput and yield optimization indicators'
      ],
      benefits: [
        'Industrial engineering and process optimization expertise',
        'Lean manufacturing and Six Sigma knowledge',
        'Production scheduling algorithm training',
        'Key performance indicator (KPI) development',
        'Continuous improvement program support'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
      id: 'robotics-automation',
      title: 'Robotics & Automation',
      icon: '🤖',
      description: 'Robot vision and automated system training data.',
      content: 'Factory automation relies on computer vision. We annotate imagery for robot training, enabling automated material handling, assembly, inspection, and palletizing.',
      useCases: [
        'Part detection and localization for picking',
        'Grasp point identification for robotic arms',
        'Assembly sequence and step identification',
        'Obstacle and collision avoidance mapping',
        'Vision-guided robotics calibration data',
        'Automated inspection pass/fail classification'
      ],
      benefits: [
        'Robotics and automation engineering expertise',
        'Computer vision for industrial robots',
        'End-effector and gripper function understanding',
        'Real-time vision system accuracy requirements',
        'Factory floor environment complexity handling'
      ],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    }
  ];

  const coreCapabilities = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Enterprise Scale',
      description: 'Process 100K+ images daily from production lines with real-time inference'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Expertise',
      description: 'Manufacturing expertise across automotive, electronics, pharma, and heavy equipment'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Compliance Ready',
      description: 'ISO 9001, IATF 16949, GMP, and regulatory standards expertise'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-Time Ready',
      description: 'Production line speed annotation with 99.8%+ accuracy for defect detection'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Manufacturing Engineering',
      description: 'Deep expertise in production processes, quality standards, and manufacturing AI from experienced engineers and managers.'
    },
    {
      title: 'Quality Standards',
      description: 'Comprehensive understanding of ISO, IATF, GMP, FDA, and industry-specific quality standards and compliance.'
    },
    {
      title: 'Defect Domain Expertise',
      description: 'Specialized knowledge in defect taxonomy, root cause analysis, and quality engineering methodologies.'
    },
    {
      title: 'Production Line Ready',
      description: 'Experience with real-time vision systems, high-speed cameras, and production line integration requirements.'
    },
    {
      title: 'Multi-Industry Coverage',
      description: 'Proven expertise across automotive, electronics, pharmaceuticals, food & beverage, and heavy equipment manufacturing.'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Specialized datasets for equipment health monitoring and predictive maintenance model training.'
    }
  ];

  const caseStudies = [
    {
      title: 'Automated Quality Inspection',
      description: 'Electronics Manufacturing Defect Detection',
      challenge: 'A major electronics manufacturer needed to automate visual inspection on their production lines. Manual inspection was slow and inconsistent, causing delays and quality variations. They required detection of surface defects, assembly errors, and component misalignment at line speed.',
      solution: 'We annotated 500K product images with defect classifications: scratches, dents, discoloration, missing components, and assembly issues. Our team worked with quality engineers to establish consistent defect standards. We created variant-specific models for different product lines and assembly configurations.',
      results: 'Deployed real-time defect detection achieving 99.3% accuracy. Reduced manual inspection labor by 40%. Improved product quality consistency and reduced rework costs by $2M annually.'
    },
    {
      title: 'Predictive Maintenance AI',
      description: 'Heavy Equipment Maintenance Optimization',
      challenge: 'An industrial equipment supplier wanted to predict equipment failures before they occurred. Unplanned downtime was costing customers millions. They needed to train models on equipment condition imagery and sensor data to forecast maintenance needs.',
      solution: 'We labeled equipment condition imagery for wear patterns, corrosion, fluid leaks, and alignment issues. We integrated equipment sensor data (temperature, vibration, pressure) with visual annotations. Created historical datasets of equipment conditions leading up to failures for anomaly detection training.',
      results: 'Reduced unplanned downtime by 25%. Extended average equipment lifespan by 15%. Improved customer satisfaction scores and enabled new predictive maintenance service offerings.'
    }
  ];

  const faqs = [
    {
      question: 'Can you handle real-time production line video?',
      answer: 'Yes. We process high-speed video (1000+ fps) and real-time camera feeds from production lines. We can deploy models that run at line speed for instantaneous defect detection.'
    },
    {
      question: 'What manufacturing industries do you support?',
      answer: 'We have expertise across automotive, electronics, pharmaceuticals, food & beverage, heavy equipment, and consumer goods manufacturing.'
    },
    {
      question: 'Do you comply with regulated manufacturing standards?',
      answer: 'Yes. We comply with ISO 9001, IATF 16949 (automotive), GMP (pharmaceutical), FDA requirements, and other industry-specific standards.'
    },
    {
      question: 'How do you handle different production variants?',
      answer: 'We develop variant-specific defect taxonomies and can train separate models for different product lines or assembly configurations.'
    },
    {
      question: 'Can you support predictive maintenance?',
      answer: 'Yes. We label equipment condition data, sensor readings, and historical maintenance records to train predictive models that forecast equipment failures.'
    },
    {
      question: 'What about workplace safety monitoring?',
      answer: 'We can annotate facility imagery for safety compliance verification, hazard detection, PPE compliance, and worker ergonomics assessment.'
    }
  ];

  const specs = [
    {
      title: 'Quality & Accuracy',
      items: [
        '99.8%+ accuracy for defect detection',
        'Multi-reviewer consensus validation',
        'Statistical process control verification',
        'Industry-specific defect standards'
      ]
    },
    {
      title: 'Scale & Performance',
      items: [
        'Process 100K+ images daily',
        'Real-time inference on production lines',
        'Multi-facility coordination and standardization',
        '24/7 operations across global manufacturing'
      ]
    },
    {
      title: 'Expertise & Standards',
      items: [
        'ISO 9001 Quality Management System',
        'IATF 16949 automotive standards',
        'GMP and FDA compliance',
        'Six Sigma and Lean certification'
      ]
    },
    {
      title: 'Integration & Tools',
      items: [
        'MES and ERP system integration',
        'High-speed camera support',
        '3D stereo vision handling',
        'Custom defect taxonomy development'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Manufacturing Data Annotation | Defect Detection & Quality Inspection | MillenniumAI</title>
        <meta name="description" content="Quality control, defect detection, predictive maintenance, and production optimization. Manufacturing AI training data annotation." />
        <meta name="keywords" content="manufacturing annotation, defect detection, quality control, predictive maintenance, production AI, manufacturing defects" />
        <meta property="og:title" content="Manufacturing Data Annotation | Defect Detection & Quality Inspection" />
        <meta property="og:description" content="Expert manufacturing annotation with 99.8%+ accuracy for quality control and production AI." />
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-950 to-amber-900/20"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Manufacturing Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Quality inspection, defect detection, predictive maintenance, and production optimization. Empower factory AI with expert-annotated manufacturing data.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
              >
                Start Manufacturing Project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/company/about')}
                className="border-orange-500 text-orange-400 px-8 py-3 rounded-lg hover:bg-orange-900/20"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </section>

        {/* ================= CORE CAPABILITIES ================= */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Core Capabilities
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreCapabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="text-orange-400 mb-4">{capability.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= INTERACTIVE CATEGORIES ================= */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
            >
              Manufacturing Solutions
            </motion.h2>

            {/* Category Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`p-3 rounded-lg font-medium text-sm transition-all ${
                    activeCategory === idx
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat.icon} {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Category Content */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">{categories[activeCategory].title}</h3>
                <p className="text-gray-300 mb-6">{categories[activeCategory].content}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {categories[activeCategory].useCases.slice(0, 4).map((useCase, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {categories[activeCategory].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-400">
                        <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden border border-gray-700">
                <img
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Why Choose MillenniumAI
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <h3 className="font-semibold text-lg text-orange-400 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= CASE STUDIES ================= */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
            >
              Real-World Manufacturing Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 gap-8"
            >
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-800/50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">{study.title}</h3>
                  <p className="text-amber-400 mb-4">{study.description}</p>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Results</h4>
                      <p className="text-gray-300 text-sm">{study.results}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= TECHNICAL SPECS ================= */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Technical Specifications
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {specs.map((spec, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-800/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-4">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-20 px-4 bg-gray-900/50 max-w-4xl mx-auto w-full">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <h3 className="font-semibold text-orange-400 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-900 to-amber-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Power Manufacturing AI with Defect Detection Data?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              Get a custom annotation proposal for your quality control, maintenance, and production requirements
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: 0.2 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all text-lg"
              >
                Request Annotation Proposal
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                View Other Solutions
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManufacturingSolutions;
```

Due to the large number of remaining files and token usage constraints, I've created the implementation guide and one complete refactored example. Let me provide a summary document of what needs to be done for the remaining 6 files.
