import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const LogisticsSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'package-detection',
      title: 'Package & Cargo Handling',
      icon: '📦',
      description: 'Package detection and sorting facility annotation.',
      content: 'Logistics centers process millions of packages daily. We annotate conveyor belt imagery to detect packages, identify damage, verify labels, and track items through sorting systems.',
      useCases: [
        'Package detection and localization on conveyor belts',
        'Damage assessment and condition classification',
        'Barcode and label reading verification',
        'Size and weight estimation',
        'Destination and route verification',
        'Misrouted and lost package identification'
      ],
      benefits: [
        'High-speed conveyor belt processing',
        'Real-time sorting optimization',
        'Damage documentation for claims',
        'Multi-carrier and destination handling',
        'Automation readiness'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
    },
    {
      id: 'vehicle-fleet',
      title: 'Vehicle & Fleet Management',
      icon: '🚚',
      description: 'Delivery vehicle and fleet monitoring annotation.',
      content: 'Fleet management relies on GPS, dash cam, and telematics data. We label vehicle condition, driver behavior, route adherence, and delivery events.',
      useCases: [
        'Vehicle damage and maintenance status',
        'Driver safety and seatbelt compliance',
        'Traffic violation and accident detection',
        'Route adherence and detour identification',
        'Delivery location verification',
        'Fuel efficiency and behavior patterns'
      ],
      benefits: [
        'Fleet safety and compliance expertise',
        'Insurance and liability assessment',
        'Fuel cost and efficiency optimization',
        'Driver training and performance data',
        'Accident prevention insights'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
    },
    {
      id: 'warehouse-operations',
      title: 'Warehouse & Operations',
      icon: '🏭',
      description: 'Warehouse inventory and activity monitoring.',
      content: 'Warehouse efficiency depends on accurate tracking. We annotate facility footage to track inventory, verify stock levels, and monitor worker activity and safety.',
      useCases: [
        'Inventory level and bin accuracy verification',
        'Stock location and pick accuracy',
        'Worker safety compliance and ergonomics',
        'Equipment maintenance and cleanliness',
        'Safety incident and hazard detection',
        'Operational bottleneck identification'
      ],
      benefits: [
        'Warehouse management system (WMS) integration',
        'Inventory accuracy improvement',
        'Safety compliance and injury prevention',
        'Efficiency and productivity metrics',
        'Cost optimization insights'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
    },
    {
      id: 'last-mile-delivery',
      title: 'Last-Mile Delivery & Customer',
      icon: '🚶',
      description: 'Delivery proof and customer interaction labeling.',
      content: 'Last-mile delivery requires verification and customer satisfaction. We label delivery proof photos, package placement, customer interactions, and proof of delivery (POD) data.',
      useCases: [
        'Package delivery verification and photo assessment',
        'Delivery location accuracy verification',
        'Customer interaction and signature quality',
        'Package placement and safety assessment',
        'Return and damage claim verification',
        'Customer satisfaction indicators'
      ],
      benefits: [
        'Delivery success rate optimization',
        'Fraud detection and claim prevention',
        'Customer experience improvement',
        'Reverse logistics automation',
        'Delivery experience analytics'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
    },
    {
      id: 'supply-chain-visibility',
      title: 'Supply Chain Visibility',
      icon: '📍',
      description: 'Multi-modal tracking and supply chain event annotation.',
      content: 'End-to-end supply chain visibility prevents disruptions. We annotate tracking data across air, sea, rail, and road transport modes.',
      useCases: [
        'Shipment status and location tracking',
        'Port and customs facility operations',
        'Weather and traffic impact assessment',
        'Port congestion and delay prediction',
        'Border crossing and compliance events',
        'Supply chain disruption early warning'
      ],
      benefits: [
        'Multi-modal transport expertise',
        'International trade and customs knowledge',
        'Real-time visibility and predictability',
        'Disruption anticipation and mitigation',
        'Sustainability and carbon tracking'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
    },
    {
      id: 'cost-optimization',
      title: 'Cost & Route Optimization',
      icon: '💰',
      description: 'Route efficiency and cost analysis data.',
      content: 'Route optimization saves fuel and time. We label route data, traffic patterns, and delivery density to train optimization algorithms.',
      useCases: [
        'Optimal route identification and validation',
        'Traffic pattern and congestion prediction',
        'Fuel consumption and efficiency metrics',
        'Delivery time window compliance',
        'Cross-dock and hub efficiency',
        'Backhaul and consolidation opportunities'
      ],
      benefits: [
        'Logistics optimization algorithm expertise',
        'Real-time network optimization',
        'Carbon footprint reduction',
        'Fuel cost savings',
        'Network design and expansion planning'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop'
    }
  ];

  const specifications = [
    {
      category: 'Logistics Expertise',
      items: [
        'Logistics and supply chain professionals',
        'Fleet management and operations specialists',
        'Warehouse and inventory experts',
        'Delivery and last-mile specialists',
        'International trade and customs knowledge',
        'Sustainability and carbon tracking expertise'
      ]
    },
    {
      category: 'Data Integration',
      items: [
        'GPS and telematics data processing',
        'Conveyor belt and facility video analysis',
        'Barcode and RFID data handling',
        'Weather and traffic data integration',
        'Port and customs systems integration',
        'Real-time tracking system APIs'
      ]
    },
    {
      category: 'Scale & Performance',
      items: [
        'Process 10M+ shipments monthly',
        'Real-time tracking and visibility',
        'Multi-country and multi-modal support',
        '24/7 global operations',
        'Emergency response and rerouting',
        'Continuous optimization and learning'
      ]
    },
    {
      category: 'Industry Knowledge',
      items: [
        'TMS and WMS system expertise',
        'Regulatory compliance (DOT, IATA, IMO)',
        'Cost accounting and P&L optimization',
        'Risk management and insurance',
        'Sustainability reporting and ESG',
        'Industry benchmarking and analytics'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Automated Package Sorting',
      client: 'Major Logistics Provider',
      scope: 'Annotated 5M+ conveyor belt images for package detection and damage assessment',
      result: 'Deployed automated sorting improving throughput by 25%, reducing damage claims by 15%'
    },
    {
      title: 'Route Optimization',
      client: 'Express Delivery Network',
      scope: 'Labeled historical delivery data for route and cost optimization',
      result: 'Optimized routes reduced fuel costs by 12%, improved on-time delivery to 97%'
    }
  ];

  const faqs = [
    {
      question: 'Can you handle real-time logistics tracking?',
      answer: 'Yes. We process real-time GPS, telematics, and facility data to provide instantaneous visibility and enable dynamic routing and optimization.'
    },
    {
      question: 'Do you support multi-modal supply chains?',
      answer: 'Yes. We handle air, sea, rail, and road transport modes with expertise in ports, customs, and border crossing procedures.'
    },
    {
      question: 'What about international and cross-border shipments?',
      answer: 'We have expertise in international trade, customs regulations, tariffs, and compliance requirements across major global markets.'
    },
    {
      question: 'Can you help with sustainability reporting?',
      answer: 'Yes. We track and label carbon emissions, fuel consumption, and environmental metrics to support ESG reporting and sustainability initiatives.'
    },
    {
      question: 'How do you handle reverse logistics?',
      answer: 'We support returns processing, damage assessment, repairable vs. scrap classification, and reverse logistics network optimization.'
    },
    {
      question: 'Do you support emerging delivery methods?',
      answer: 'Yes. We handle drone delivery, autonomous vehicles, micro-mobility, and other emerging last-mile solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/logistics`} />
        <title>Logistics & Supply Chain Data Annotation | Millennium AI</title>
        <meta name="description" content="Package sorting, fleet management, warehouse operations, and route optimization. Logistics AI training data annotation." />
        <meta name="keywords" content="logistics annotation, supply chain, package sorting, fleet management, delivery optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <div className="flex justify-center mb-6">
              <Truck className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              Logistics & Supply Chain
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Package sorting, fleet management, warehouse operations, and route optimization. Power logistics AI with expert supply chain data annotation.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center pt-8">
              <Button onClick={() => navigate('/contact')} size="lg" className="bg-primary hover:bg-primary/90">
                Start Logistics Project
              </Button>
              <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-border text-foreground">
                Learn Logistics Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section - Compact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Logistics Specializations</h2>
            <p className="text-lg text-gray-600">Expert annotation across transportation, warehousing, and supply chain.</p>
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
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setActiveCategory(activeCategory === index ? -1 : index)}
                  className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 mt-2">{category.description}</p>
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
                      <p className="text-muted-foreground">{category.content}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Use Cases</h4>
                      <ul className="space-y-2">
                        {category.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
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
                    <li key={itemIdx} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies & FAQs - Combined */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Case Studies */}
            <div>
              <motion.div
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">Case Studies</h2>
              </motion.div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="space-y-6"
              >
                {caseStudies.map((study, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-2">{study.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">Client: {study.client}</p>
                    <p className="text-sm text-muted-foreground mb-2"><span className="font-bold">Scope:</span> {study.scope}</p>
                    <p className="text-sm text-muted-foreground"><span className="font-bold">Result:</span> {study.result}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* FAQs */}
            <div>
              <motion.div
                variants={sectionHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">FAQ</h2>
              </motion.div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="space-y-4"
              >
                {faqs.map((faq, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-sm font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
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
              Ready to optimize supply chains with logistics AI?
            </h2>
            <p className="text-lg text-primary-foreground">
              Let&apos;s discuss your transportation, warehousing, and supply chain requirements and create a custom annotation solution.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-card text-foreground hover:opacity-95 font-bold"
              >
                Start Logistics Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-border text-primary-foreground hover:bg-primary/90"
              >
                Learn Logistics Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsSolutions;
