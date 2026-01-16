import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Users, Globe } from 'lucide-react';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const WhyChooseUs = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Accuracy at Scale',
      description: 'Human-in-the-loop annotation workflows delivering consistent, high-precision datasets across millions of data points.',
      color: 'text-blue-600'
    },
    {
      icon: Lock,
      title: 'Enterprise-Grade Security',
      description: 'Secure data handling, NDA-driven workflows, and compliance-ready processes built for regulated industries.',
      color: 'text-emerald-600'
    },
    {
      icon: Users,
      title: 'Domain-Specific Expertise',
      description: 'Specialized annotation teams across healthcare, autonomous systems, retail, finance, and geospatial intelligence.',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Delivery Model',
      description: 'Flexible engagement models supporting startups, scale-ups, and enterprises worldwide.',
      color: 'text-cyan-600'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            Why Global{' '}
            <span className="text-blue-600">Teams Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with enterprises to deliver high-quality training data that powers their most critical AI initiatives.
          </p>
        </motion.div>

        {/* Value Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 ${value.color}`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
