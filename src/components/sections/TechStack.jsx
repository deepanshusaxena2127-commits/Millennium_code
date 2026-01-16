import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  // Official Partners (local absolute paths - exact filenames)
  const officialPartners = [
    {
      name: 'Dataplus',
      logo: '/images/partners/dataplus.png',
      description: 'Strategic data collaboration'
    },
    {
      name: 'ShaipAI',
      logo: '/images/partners/ShaipAi.png',
      description: 'AI data and services collaboration'
    }
  ];

  // Platforms We Work With (local absolute paths - exact filenames)
  const platformsWeWorkWith = [
    { name: 'AWS', logo: '/images/partners/aws.png', description: 'Cloud infrastructure' },
    { name: 'CVAT', logo: '/images/partners/cvat.png', description: 'Annotation tooling' },
    { name: 'Dataloop', logo: '/images/partners/dataloop.webp', description: 'ML ops & automation' },
    { name: 'Encord', logo: '/images/partners/encord.webp', description: 'Computer vision tooling' },
    { name: 'Labelbox', logo: '/images/partners/labelbox.webp', description: 'Data labeling platform' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Subtle static background gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase">
              Global Trust & Collaboration
            </span>
          </motion.div>
          <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]"
            >
              Trusted by{' '}
              <span className="text-blue-600">Global AI Teams and Technology Ecosystems</span>
            </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with leading AI platforms and maintain relationships with selected official partners worldwide. These collaborations enable secure, enterprise-grade integrations and practical interoperability across global AI operations.
          </motion.p>
        </motion.div>

        {/* Official Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold text-foreground mb-2"
          >
            Official Partners
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground mb-6 max-w-2xl"
          >
            Selected organizations we work with on enterprise data programs.
          </motion.p>

          <div className="overflow-x-auto scroll-smooth py-2">
            <div className="flex gap-6 items-center snap-x snap-mandatory">
              {officialPartners.map((partner) => (
                <div key={partner.name} className="snap-start min-w-[180px] flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
                  <img src={partner.logo} alt={partner.name} className="h-14 w-auto object-contain" />
                  <div className="hidden md:block">
                    <h4 className="font-semibold text-foreground">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Platforms We Work With Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-bold text-foreground mb-2"
          >
            Platforms We Work With
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-muted-foreground mb-6 max-w-2xl"
          >
            Integration-friendly platforms we regularly work with to support enterprise AI data workflows.
          </motion.p>

          <div className="overflow-x-auto scroll-smooth py-2">
            <div className="flex gap-6 items-center snap-x snap-mandatory">
              {platformsWeWorkWith.map((platform) => (
                <div key={platform.name} className="snap-start min-w-[140px] md:min-w-[180px] flex flex-col items-center gap-3 p-4 bg-card rounded-2xl border border-border">
                  <img src={platform.logo} alt={platform.name} className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                  <h4 className="hidden md:block font-semibold text-foreground text-center text-sm">{platform.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Removed numeric KPI/banner section to keep the trust area professional and neutral */}
      </div>
    </section>
  );
};

export default TechStack;