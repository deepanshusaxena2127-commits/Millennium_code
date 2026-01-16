import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, FileCheck, Award } from 'lucide-react';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const SecurityCompliance = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security-First Operations',
      description: 'NDA-driven workflows, strict access controls, and secure data handling practices across all projects.',
      color: 'text-red-600'
    },
    {
      icon: CheckCircle2,
      title: 'Human-in-the-Loop Quality Assurance',
      description: 'Multi-stage review processes ensure annotation accuracy, consistency, and production-ready outputs.',
      color: 'text-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Compliance-Ready Workflows',
      description: 'Operational processes designed to align with global data protection and enterprise compliance standards.',
      color: 'text-amber-600'
    },
    {
      icon: Award,
      title: 'Trusted Delivery at Scale',
      description: 'Proven frameworks supporting high-volume, high-complexity AI data programs worldwide.',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]">
            Security, Compliance &{' '}
            <span className="text-blue-600">Quality Assurance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade standards built into every step of our data annotation process.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 ${feature.color}`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
