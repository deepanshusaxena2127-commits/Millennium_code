import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const MediaSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'video-segmentation',
      title: 'Video Segmentation & Scene Tagging',
      icon: '🎬',
      description: 'Label scenes, shots, and objects for video understanding.',
      content: 'We annotate bounding boxes, segmentation masks, and scene-level metadata to enable content search, recommendations, and moderation in media platforms.',
      useCases: ['Object and person tracking', 'Scene classification and chaptering', 'Explicit content detection'],
      benefits: ['Frame-level accuracy', 'Multi-format support (streaming, broadcast)'],
      image: 'https://images.unsplash.com/photo-1502139214989-8f61a2f0f5e0?w=800&h=600&fit=crop'
    },
    {
      id: 'audio-labeling',
      title: 'Audio Transcription & Annotation',
      icon: '🎧',
      description: 'Speaker diarization, transcription correction, and metadata tagging.',
      content: 'Accurate transcripts, speaker labels, and intent tagging for podcasts, broadcasts, and user-generated audio content.',
      useCases: ['Podcast chaptering', 'Ad detection and skippable segments', 'Music tagging and metadata enrichment'],
      benefits: ['Broadcast and noisy-audio expertise', 'Time-aligned annotations'],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop'
    },
    {
      id: 'content-metadata',
      title: 'Content Metadata & Recommendation Labels',
      icon: '🏷️',
      description: 'Genre, mood, and content attribute labeling for discovery and personalization.',
      content: 'We produce editorial and algorithmic labels to improve search relevance and recommendation performance across media catalogs.',
      useCases: ['Genre and mood tagging', 'Age-appropriateness labeling', 'Ad-slot detection'],
      benefits: ['Human-in-the-loop editorial quality', 'Scalable catalog enrichment'],
      image: 'https://images.unsplash.com/photo-1509403958582-1a9b3b7f9b2a?w=800&h=600&fit=crop'
    }
  ];

  const specifications = [
    { category: 'Media Expertise', items: ['Video editors, audio engineers, and content researchers'] },
    { category: 'Formats', items: ['MP4, MOV, livestream snippets, audio wav/mp3, captions'] }
  ];

  const caseStudies = [
    { title: 'Podcast Chaptering & Ads', client: 'Top Podcast Network', scope: 'Annotated 10K podcast episodes for chapters and ad segments', result: 'Improved listener retention and ad targeting' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Media Annotation | Millennium AI</title>
        <meta name="description" content="Video, audio and media metadata labeling for recommendations, search and moderation." />
      </Helmet>

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">Media & Entertainment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">Video and audio annotation for discovery, personalization and moderation.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-yellow-600 hover:bg-yellow-700">Start Media Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg">Learn Media Best Practices</Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Media Specializations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Human-quality labels for complex audio and video understanding.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="space-y-4">
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <button onClick={() => setActiveCategory(activeCategory === index ? -1 : index)} className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 mt-2">{category.description}</p>
                    </div>
                  </div>
                </button>

                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: activeCategory === index ? 'auto' : 0, opacity: activeCategory === index ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden border-t border-gray-200">
                  <div className="p-6 bg-gray-50 space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Overview</h4>
                      <p className="text-gray-700 leading-relaxed">{category.content}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Use Cases</h4>
                      <ul className="space-y-2">
                        {category.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {category.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Specifications</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionHeaderVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportSettings} className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-700 font-semibold mb-4">Client: {study.client}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase">Scope</p>
                    <p className="text-gray-700">{study.scope}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase">Result</p>
                    <p className="text-gray-700">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight">Ready to improve discovery and moderation with human-labeled media data?</h2>
          <p className="text-lg text-yellow-100 mt-4">Share your catalog and use-cases and we&apos;ll propose a production labeling plan.</p>
          <div className="flex gap-4 justify-center pt-8">
            <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-yellow-700 hover:bg-yellow-50 font-bold">Start Media Project</Button>
            <Button onClick={() => navigate('/insights')} variant="outline" size="lg" className="border-white text-white hover:bg-orange-700">Learn Media Best Practices</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaSolutions;
