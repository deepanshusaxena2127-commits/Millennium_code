import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Database, Users, BarChart3, Shield } from 'lucide-react';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const DataAnnotationWorkflow = () => {
  const [expandedStep, setExpandedStep] = useState(0);

  const workflowSteps = [
    {
      number: '01',
      title: 'Data Collection & Intake',
      description: 'We securely ingest your raw datasets—images, videos, text, or audio—from any source, preserving data integrity and privacy compliance.',
      icon: Database,
      image: '/images/solutions/hitl-workflow.jpg',
      details: [
        'Secure data ingestion from cloud/on-premise',
        'Format validation and normalization',
        'Privacy-preserving data handling',
        'Comprehensive audit logging'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Expert Annotation & Labeling',
      description: 'Our global team of domain experts applies precise annotations using industry-leading tools, ensuring consistency and accuracy across your entire dataset.',
      icon: Users,
      image: '/images/solutions/annotation-review.webp',
      details: [
        'Multi-language annotation support',
        'Domain-specialist annotators',
        'Real-time quality monitoring',
        'Custom taxonomy management'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Quality Assurance & Validation',
      description: 'Multi-stage validation using consensus reviews and automated scoring ensures production-ready data quality before delivery.',
      icon: CheckCircle2,
      image: '/images/solutions/qa-dashboard.png',
      details: [
        'Dual-read consensus validation',
        'Inter-rater reliability metrics (Cohen\'s Kappa)',
        'Automated quality scoring',
        'Continuous improvement feedback loops'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      number: '04',
      title: 'Analytics & Delivery',
      description: 'Comprehensive reporting, performance metrics, and secure delivery in your preferred format with full audit trails.',
      icon: BarChart3,
      image: '/images/solutions/validation-process.webp',
      details: [
        'Real-time analytics dashboard',
        'Custom reporting & metrics',
        'Multiple export formats (JSON, XML, etc.)',
        'Secure delivery & versioning'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="workflow">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]">
            Our Data Annotation
            <span className="block text-blue-600">Workflow Process</span>
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Four-stage process ensuring production-ready data quality. From intake to delivery, we maintain enterprise-grade standards at every step.
          </motion.p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6 mb-12"
        >
          {workflowSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setExpandedStep(expandedStep === index ? -1 : index)}
                className="group cursor-pointer"
              >
                {/* Step Header - Always Visible */}
                <div className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  expandedStep === index
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-6 flex-1">
                      {/* Step Number & Icon */}
                      <div className="flex flex-col items-center">
                        <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-4`}>
                          {step.number}
                        </div>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <motion.div
                      animate={{ rotate: expandedStep === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ArrowRight className="w-6 h-6 text-blue-600 transform -rotate-90" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedStep === index ? 'auto' : 0,
                    opacity: expandedStep === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-x border-b border-gray-200 bg-gray-50/50">
                    <div className="grid lg:grid-cols-2 gap-8 p-8">
                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-2xl overflow-hidden group"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="text-white font-bold text-lg">{step.title}</div>
                          <div className="text-gray-300 text-sm mt-2">Enterprise-grade processing</div>
                        </div>
                      </motion.div>

                      {/* Details */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col justify-center"
                      >
                        <h4 className="text-xl font-bold text-gray-900 mb-6">Key Capabilities</h4>
                        <motion.div
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {step.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              variants={itemVariants}
                              className="flex items-start gap-4"
                            >
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold`}>
                                ✓
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700 font-medium">{detail}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: Shield, label: 'Enterprise Security', value: 'ISO 27001 Certified' },
            { icon: BarChart3, label: 'Quality Guarantee', value: '99.9% Accuracy' },
            { icon: Users, label: 'Global Team', value: '50+ Languages' },
            { icon: CheckCircle2, label: 'Fast Turnaround', value: '24/7 Support' }
          ].map((benefit, idx) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <BenefitIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.label}</h4>
                <p className="text-blue-600 font-black text-lg">{benefit.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnnotationWorkflow;
