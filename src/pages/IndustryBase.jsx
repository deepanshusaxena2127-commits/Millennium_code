import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/lib/content';

const IndustryBase = ({ slug }) => {
  const data = siteContent.industriesComprehensive[slug];
  const navigate = useNavigate();
  if (!data) return null;

  return (
    <>
      <Helmet>
        <title>{data.seoTitle || data.heroTitle}</title>
        <meta name="description" content={data.metaDescription || data.description} />
        {data.keywords && <meta name="keywords" content={data.keywords.join(', ')} />}
        <meta property="og:title" content={data.seoTitle || data.heroTitle} />
        <meta property="og:description" content={data.metaDescription || data.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white">
        {/* HERO */}
        <section className="relative py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              {data.heroTitle}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-lg text-gray-300 max-w-3xl mx-auto">
              {data.heroSubtitle}
            </motion.p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button onClick={() => navigate('/contact')} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                Contact Sales
              </Button>
              <Button variant="outline" onClick={() => navigate('/industries')}>
                View All Industries
              </Button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        {data.features && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl font-bold mb-8 text-center">
                Key Capabilities
              </motion.h2>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.features.map((f, i) => (
                  <motion.div variants={itemVariants} key={i} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                    <h4 className="font-semibold text-lg mb-2">{f}</h4>
                    {data.featureDetails && data.featureDetails[i] && <p className="text-gray-400 text-sm">{data.featureDetails[i]}</p>}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* CASE STUDIES */}
        {data.caseStudies && (
          <section className="py-16 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl font-bold mb-8 text-center">
                Case Studies
              </motion.h2>
              <div className="grid grid-cols-1 gap-6">
                {data.caseStudies.map((cs, idx) => (
                  <motion.div variants={itemVariants} key={idx} className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400">{cs.title}</h3>
                    <p className="text-cyan-300 mb-2">{cs.description}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-semibold">Challenge</h5>
                        <p className="text-gray-300 text-sm">{cs.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold">Solution</h5>
                        <p className="text-gray-300 text-sm">{cs.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold">Impact</h5>
                        <p className="text-gray-300 text-sm">{cs.results || cs.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BENEFITS & CTA */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-2">
                {data.benefits && data.benefits.map((b, i) => (
                  <li key={i} className="text-gray-300">• {b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">{data.cta?.title || 'Get a Custom Proposal'}</h4>
              <p className="text-gray-200 mb-4">{data.cta?.subtitle || 'Tell us about your project and we will provide a tailored dataset plan.'}</p>
              <Button onClick={() => navigate('/contact')} className="bg-white text-blue-900">Contact Sales</Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {data.faqs && (
          <section className="py-16 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </motion.h2>
              <div className="grid grid-cols-1 gap-4">
                {data.faqs.map((faq, i) => (
                  <motion.div variants={itemVariants} key={i} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                    <h4 className="font-semibold text-blue-400 mb-2">{faq.question}</h4>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
};

export default IndustryBase;
