# Quick Copy-Paste Refactored Code Sections

## For All Remaining 7 Files - Use These Sections

### SECTION A: Import Statement (Replace first few lines)
```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';
```

### SECTION B: Core Capabilities (4-Card Grid)
Used in: All files after categories definition
```jsx
const coreCapabilities = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Enterprise Scale',
    description: '[INDUSTRY-SPECIFIC TEXT]'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Coverage/Expertise',
    description: '[INDUSTRY-SPECIFIC TEXT]'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Data Security/Compliance',
    description: '[INDUSTRY-SPECIFIC TEXT]'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Speed & Quality',
    description: '[INDUSTRY-SPECIFIC TEXT]'
  }
];
```

### SECTION C: Why Choose Us (3-6 Items)
```jsx
const whyChooseUs = [
  {
    title: 'Title 1',
    description: 'Description text...'
  },
  {
    title: 'Title 2',
    description: 'Description text...'
  },
  {
    title: 'Title 3',
    description: 'Description text...'
  },
  // Add more as needed (up to 6)
];
```

### SECTION D: Case Studies (New Format)
From: Simple client/scope/result format
To: Challenge/Solution/Results format

```jsx
const caseStudies = [
  {
    title: 'Case Study Title',
    description: 'Subtitle/Context',
    challenge: 'The challenge/problem they faced...',
    solution: 'How we solved it with detailed approach...',
    results: 'Specific metrics and outcomes achieved...'
  },
  {
    title: 'Case Study 2 Title',
    description: 'Subtitle/Context',
    challenge: 'The challenge/problem they faced...',
    solution: 'How we solved it with detailed approach...',
    results: 'Specific metrics and outcomes achieved...'
  }
];
```

### SECTION E: Hero Section (Dark Template)
Replace entire hero section with:
```jsx
<>
  <Helmet>
    <title>[Industry] Data Annotation | [Services] | MillenniumAI</title>
    <meta name="description" content="[Service descriptions]. [Industry] AI training data annotation." />
    <meta name="keywords" content="[industry keywords]" />
    <meta property="og:title" content="[Industry] Data Annotation | [Services]" />
    <meta property="og:description" content="Expert [industry] annotation with 99.X%+ accuracy for [service] AI." />
  </Helmet>

  <div className="min-h-screen bg-gray-950 text-white">
    {/* ================= HERO ================= */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[PRIMARY-COLOR]-900/20 via-gray-950 to-[SECONDARY-COLOR]-900/20"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent">
          [Industry Title]
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          [Hero Description - 1-2 sentences about services]
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-[PRIMARY-COLOR]-600 to-[SECONDARY-COLOR]-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[PRIMARY-COLOR]-500/50 transition-all flex items-center gap-2"
          >
            Start [Industry] Project <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/company/about')}
            className="border-[PRIMARY-COLOR]-500 text-[PRIMARY-COLOR]-400 px-8 py-3 rounded-lg hover:bg-[PRIMARY-COLOR]-900/20"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
```

### SECTION F: Core Capabilities Section
```jsx
{/* ================= CORE CAPABILITIES ================= */}
<section className="py-20 px-4 max-w-7xl mx-auto">
  <motion.h2
    variants={sectionHeaderVariants}
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent"
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
        className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-[PRIMARY-COLOR]-500/50 transition-all"
      >
        <div className="text-[PRIMARY-COLOR]-400 mb-4">{capability.icon}</div>
        <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
        <p className="text-gray-400 text-sm">{capability.description}</p>
      </motion.div>
    ))}
  </motion.div>
</section>
```

### SECTION G: Category Tabs Section
```jsx
{/* ================= INTERACTIVE CATEGORIES ================= */}
<section className="py-20 px-4 bg-gray-900/50">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      variants={sectionHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent"
    >
      [Industry] Solutions
    </motion.h2>

    {/* Category Tabs */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => setActiveCategory(idx)}
          className={`p-3 rounded-lg font-medium text-sm transition-all ${
            activeCategory === idx
              ? 'bg-[PRIMARY-COLOR]-600 text-white shadow-lg shadow-[PRIMARY-COLOR]-500/30'
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
        <h3 className="text-2xl font-bold mb-4 text-[PRIMARY-COLOR]-400">{categories[activeCategory].title}</h3>
        <p className="text-gray-300 mb-6">{categories[activeCategory].content}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-white mb-3">Use Cases:</h4>
          <ul className="space-y-2">
            {categories[activeCategory].useCases.slice(0, 4).map((useCase, idx) => (
              <li key={idx} className="flex gap-3 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-[PRIMARY-COLOR]-400 shrink-0 mt-0.5" />
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
                <Zap className="w-5 h-5 text-[SECONDARY-COLOR]-400 shrink-0 mt-0.5" />
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
```

### SECTION H: Why Choose Us Section
```jsx
{/* ================= WHY CHOOSE US ================= */}
<section className="py-20 px-4 max-w-7xl mx-auto">
  <motion.h2
    variants={sectionHeaderVariants}
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent"
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
        className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-[PRIMARY-COLOR]-500/50 transition-all"
      >
        <h3 className="font-semibold text-lg text-[PRIMARY-COLOR]-400 mb-3">{item.title}</h3>
        <p className="text-gray-400">{item.description}</p>
      </motion.div>
    ))}
  </motion.div>
</section>
```

### SECTION I: Case Studies Section
```jsx
{/* ================= CASE STUDIES ================= */}
<section className="py-20 px-4 bg-gray-900/50">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      variants={sectionHeaderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent"
    >
      Real-World [Industry] Projects
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
          className="bg-gradient-to-r from-[PRIMARY-COLOR]-900/20 to-[SECONDARY-COLOR]-900/20 border border-[PRIMARY-COLOR]-800/50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-[PRIMARY-COLOR]-400 mb-2">{study.title}</h3>
          <p className="text-[SECONDARY-COLOR]-400 mb-4">{study.description}</p>

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
```

### SECTION J: Technical Specs Section
```jsx
{/* ================= TECHNICAL SPECS ================= */}
<section className="py-20 px-4 max-w-7xl mx-auto">
  <motion.h2
    variants={sectionHeaderVariants}
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent"
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
        className="bg-gradient-to-br from-[PRIMARY-COLOR]-900/30 to-[SECONDARY-COLOR]-900/30 border border-[PRIMARY-COLOR]-800/50 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-[PRIMARY-COLOR]-400 mb-4">{spec.title}</h3>
        <ul className="space-y-3">
          {spec.items.map((item, itemIdx) => (
            <li key={itemIdx} className="flex gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-[SECONDARY-COLOR]-400 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>
</section>
```

### SECTION K: FAQs Section
```jsx
{/* ================= FAQs ================= */}
<section className="py-20 px-4 bg-gray-900/50 max-w-4xl mx-auto w-full">
  <motion.h2
    variants={sectionHeaderVariants}
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[PRIMARY-COLOR]-400 to-[SECONDARY-COLOR]-400 bg-clip-text text-transparent"
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
        className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-[PRIMARY-COLOR]-500/50 transition-all"
      >
        <h3 className="font-semibold text-[PRIMARY-COLOR]-400 mb-3 text-lg">{faq.question}</h3>
        <p className="text-gray-300">{faq.answer}</p>
      </motion.div>
    ))}
  </motion.div>
</section>
```

### SECTION L: Final CTA Section
```jsx
{/* ================= FINAL CTA ================= */}
<section className="py-20 px-4 bg-gradient-to-r from-[PRIMARY-COLOR]-900 to-[SECONDARY-COLOR]-900">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSettings}
      className="text-3xl md:text-5xl font-bold mb-6"
    >
      Ready to Power [Industry] AI with Labeled [Data Type] Data?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSettings}
      transition={{ delay: 0.1 }}
      className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
    >
      Get a custom annotation proposal for your [industry]-specific requirements
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
        className="bg-white text-[PRIMARY-COLOR]-900 px-8 py-3 rounded-lg font-semibold hover:bg-[PRIMARY-COLOR]-50 transition-all text-lg"
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
```

## Color Placeholders to Replace:

Replace [PRIMARY-COLOR] and [SECONDARY-COLOR] with:
- **Logistics**: `amber` and `yellow`
- **Education**: `indigo` and `violet`
- **Legal**: `slate` and `gray`
- **Media**: `yellow` and `amber`
- **Retail**: `pink` and `rose`
- **Security**: `slate` and `gray`
- **Manufacturing**: `orange` and `amber`
