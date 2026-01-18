import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, viewportSettings, containerVariants, sectionHeaderVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';
import PageHeader from '@/components/layout/PageHeader';

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

  const specifications = [
    {
      category: 'Manufacturing Expertise',
      items: [
        'Quality engineers and manufacturing specialists',
        'Maintenance and reliability engineers',
        'Safety and compliance professionals',
        'Production and operations managers',
        'Robotics and automation technicians',
        'Industry-specific (automotive, electronics, pharma, etc.)'
      ]
    },
    {
      category: 'Quality Standards',
      items: [
        'ISO 9001 Quality Management System compliance',
        'ISO/IEC 62304 Medical Device Software',
        'Automotive IATF 16949 standards',
        'Pharmaceutical GMP and FDA compliance',
        'Statistical Process Control (SPC) expertise',
        'Six Sigma and Lean certification knowledge'
      ]
    },
    {
      category: 'Data Handling',
      items: [
        'Real-time production line video processing',
        'High-speed imaging (1000+ fps) annotation',
        '3D stereo vision and point cloud handling',
        'Multi-camera synchronization',
        'Industrial IoT and sensor data integration',
        'Production database and MES system integration'
      ]
    },
    {
      category: 'Scale & Performance',
      items: [
        '99.8%+ accuracy for defect detection',
        'Real-time inference on production lines',
        'Multi-facility coordination and standardization',
        '24/7 operations across global manufacturing',
        'Custom defect taxonomy development',
        'Continuous model retraining and improvement'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Automated Quality Inspection',
      client: 'Major Electronics Manufacturer',
      scope: 'Annotated 500K product images for defect classification across assembly line',
      result: 'Deployed real-time defect detection, reduced manual inspection by 40%, improved quality'
    },
    {
      title: 'Predictive Maintenance AI',
      client: 'Global Industrial Equipment Supplier',
      scope: 'Labeled equipment condition imagery and sensor data for maintenance prediction',
      result: 'Reduced unplanned downtime by 25%, extended equipment lifespan by 15%'
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/manufacturing`} />
        <title>Manufacturing Data Annotation | Millennium AI</title>
        <meta name="description" content="Quality inspection, defect detection, predictive maintenance, and production optimization. Manufacturing AI training data annotation." />
        <meta name="keywords" content="manufacturing annotation, defect detection, quality control, predictive maintenance, production AI" />
      </Helmet>

      {/* Hero Section */}
      <PageHeader
        variant="industries"
        subtitle="MANUFACTURING & INDUSTRIAL AI"
        title="Manufacturing"
        description="Quality inspection, defect detection, predictive maintenance, and production optimization. Empower factory AI with expert-annotated manufacturing data."
      >
        <motion.div className="flex gap-4 justify-center pt-4">
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-green-900 hover:bg-green-50 font-bold">
            Start Manufacturing Project
          </Button>
          <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-white text-white hover:bg-green-800">
            Learn Manufacturing Best Practices
          </Button>
        </motion.div>
      </PageHeader>

      {/* Categories Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Manufacturing Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert annotation across quality, safety, maintenance, and optimization.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setActiveCategory(activeCategory === index ? -1 : index)}
                  className="w-full p-6 flex items-start justify-between hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground mt-2">{category.description}</p>
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeCategory === index ? 'auto' : 0,
                    opacity: activeCategory === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-border"
                >
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

      {/* Specifications Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Enterprise Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manufacturing-grade quality, standards, and performance metrics.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
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

      {/* Case Studies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Case Studies</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
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

      {/* FAQs Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6"
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to power industrial AI with manufacturing training data?
            </h2>
            <p className="text-lg text-primary-foreground">
              Let&apos;s discuss your quality control, maintenance, safety, and optimization requirements and create a custom annotation solution for your factory.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-card text-foreground hover:opacity-95 font-bold"
              >
                Start Manufacturing Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-border text-primary-foreground hover:bg-primary/90"
              >
                Learn Manufacturing Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingSolutions;
