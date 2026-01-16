import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual');

  const pricingPlans = [
    {
      name: 'Startup',
      subtitle: 'Perfect for AI startups & MVPs',
      price: billingCycle === 'annual' ? '$5,000' : '$500',
      period: billingCycle === 'annual' ? '/month' : '/month',
      description: 'Entry-level AI data annotation',
      cta: 'Start Free Trial',
      featured: false,
      features: [
        { text: 'Up to 10,000 annotations/month', included: true },
        { text: 'Computer Vision & NLP support', included: true },
        { text: 'Standard QA & accuracy checks', included: true },
        { text: 'Email support (24-48hr response)', included: true },
        { text: 'API access', included: false },
        { text: 'Dedicated account manager', included: false },
        { text: 'Custom workflows', included: false },
        { text: 'SLA guarantee', included: false }
      ]
    },
    {
      name: 'Professional',
      subtitle: 'Ideal for growing enterprises',
      price: billingCycle === 'annual' ? '$15,000' : '$1,500',
      period: billingCycle === 'annual' ? '/month' : '/month',
      description: 'Advanced AI data annotation with premium support',
      cta: 'Schedule Demo',
      featured: true,
      features: [
        { text: 'Up to 100,000 annotations/month', included: true },
        { text: 'Computer Vision, NLP & Audio support', included: true },
        { text: 'Advanced QA & custom accuracy metrics', included: true },
        { text: 'Priority email & phone support', included: true },
        { text: 'API access with webhooks', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom workflows & templates', included: true },
        { text: '99.5% uptime SLA', included: true }
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'Custom solutions for Fortune 500',
      price: 'Custom',
      period: 'pricing',
      description: 'Unlimited scale with white-glove service',
      cta: 'Contact Sales',
      featured: false,
      features: [
        { text: 'Unlimited annotations', included: true },
        { text: 'All modalities + custom AI workflows', included: true },
        { text: 'ISO 27001 & compliance certifications', included: true },
        { text: '24/7 dedicated support team', included: true },
        { text: 'Advanced API with custom integrations', included: true },
        { text: 'Custom security & compliance options', included: true },
        { text: 'Multi-tenant infrastructure options', included: true },
        { text: '99.99% uptime SLA + priority SRE', included: true }
      ]
    }
  ];

  const engagementModels = [
    {
      icon: '⏱️',
      title: 'Time & Materials',
      description: 'Pay only for work completed. Flexible, perfect for variable projects.',
      features: ['Hourly billing', 'Scale on demand', 'No long-term commitment']
    },
    {
      icon: '📊',
      title: 'Volume-Based',
      description: 'Predictable pricing based on annotation volume. Best value.',
      features: ['Per-annotation pricing', 'Bulk discounts', 'Volume guarantees']
    },
    {
      icon: '🤝',
      title: 'Retainer Model',
      description: 'Dedicated team with monthly capacity allocation.',
      features: ['Dedicated resources', 'Fixed monthly cost', 'Priority access']
    },
    {
      icon: '🎯',
      title: 'Outcome-Based',
      description: 'Success-based pricing tied to model accuracy goals.',
      features: ['Performance aligned', 'Quality guarantees', 'Revenue share options']
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Transparent Pricing for <br/>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Scale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From startups to Fortune 500, we have flexible pricing models that scale with your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Annual <span className="text-green-400 font-black">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${
                plan.featured
                  ? 'md:scale-105 bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl border-0'
                  : 'bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-yellow-400/80 text-gray-900 text-center py-2 font-bold text-sm">
                  🌟 MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                <h3 className={`text-2xl font-black mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.subtitle}
                </p>

                <div className="mb-8">
                  <div className={`text-5xl font-black ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </p>
                </div>

                <Button
                  className={`w-full mb-8 h-12 font-bold text-lg transition-all ${
                    plan.featured
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className={`text-sm mb-6 ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <div className={`border-t ${plan.featured ? 'border-white/20' : 'border-gray-200'} pt-6 space-y-4`}>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.featured ? 'text-green-300' : 'text-green-500'}`} />
                      ) : (
                        <X className={`w-5 h-5 shrink-0 mt-0.5 ${plan.featured ? 'text-gray-400' : 'text-gray-400'}`} />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.featured ? 'text-white' : 'text-gray-900'
                          : plan.featured ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-black text-center text-gray-900 mb-4">
            Flexible Engagement Models
          </h3>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Choose the engagement model that best fits your business needs and budget
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-4xl font-black mb-4">
            What&apos;s Your ROI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            High-quality annotations reduce model retraining by 50%, cutting development time and costs significantly
          </p>
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-10 text-lg font-bold"
          >
            Calculate Your Savings
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;