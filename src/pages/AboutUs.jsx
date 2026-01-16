import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { siteContent } from '@/lib/content';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const AboutUs = () => {
  const navigate = useNavigate();
  const data = siteContent.company['about'];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About MillenniumAI | Global AI Data Solutions</title>
        <meta name="description" content="Learn about MillenniumAI - a global leader in AI training data and data annotation services trusted by Fortune 500 enterprises." />
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/company/about`} />
      </Helmet>

      {/* 1. HERO / INTRO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {data.heroSubtitle}
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                {data.heroValue}
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => navigate('/contact')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-95"
                >
                  Schedule a Discovery Call
                </Button>
              </div>
            </div>

            {/* Right: Corporate Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-border h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="MillenniumAI Global Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8">{data.companyOverview.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {data.companyOverview.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. GLOBAL SCALE & IMPACT STATS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {data.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. OUR MISSION & VISION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="border border-border rounded-xl p-12 bg-background"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="border border-border rounded-xl p-12 bg-background"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT SETS US APART (DIFFERENTIATORS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground">What Sets MillenniumAI Apart</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            {data.differentiators.map((diff, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. INDUSTRIES & CAPABILITIES SNAPSHOT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With domain expertise spanning multiple sectors, we enable AI innovation across every major industry vertical. From autonomous systems to healthcare to financial services, MillenniumAI delivers specialized data solutions tailored to your domain&apos;s unique challenges.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.industriesServed.map((industry, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <p className="font-semibold text-foreground">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. TRUST, GOVERNANCE & COMPLIANCE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground">Trust, Security & Compliance</h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Enterprise clients trust MillenniumAI with their most sensitive data. Our security infrastructure and compliance practices meet the highest global standards.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-xl p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {data.trustPillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{pillar}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. LEADERSHIP & CULTURE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8">Leadership & Culture</h2>
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.cultureHighlights}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">{data.cta.heading}</h2>
            <p className="text-lg text-primary-foreground/90">{data.cta.subtext}</p>
            <motion.div variants={itemVariants}>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold"
              >
                {data.cta.buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
