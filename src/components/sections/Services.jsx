import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, MessageSquare, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [imageIndices, setImageIndices] = useState([0, 0, 0, 0]);
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: Eye,
      title: 'Computer Vision Annotation',
      color: 'from-blue-500 to-cyan-500',
      summary: 'Pixel-perfect labeling for perception and recognition models.',
      capabilities: [
        'Bounding Box & Object Detection',
        'Semantic & Instance Segmentation',
        'Keypoint & Landmark Annotation'
      ],
      description: 'High-precision image and video annotation including bounding boxes, segmentation, keypoints, and 3D labeling—optimized for perception and recognition models.',
      subServices: [
        'Bounding Box & Object Detection',
        'Semantic & Instance Segmentation',
        'Keypoint & Landmark Annotation',
        '3D Point Cloud Labeling'
      ],
      slug: '/solutions/computer-vision',
      images: [
        '/images/solutions/cv-bounding-box.jpg',
        '/images/solutions/cv-segmentation.jpg',
        '/images/solutions/cv-keypoints.jpg',
        '/images/solutions/cv-3d-cuboid.jpg'
      ]
    },
    {
      icon: MessageSquare,
      title: 'NLP & LLM Training Data',
      color: 'from-purple-500 to-pink-500',
      summary: 'Expert-curated text datasets for language models and NLP tasks.',
      capabilities: [
        'Named Entity Recognition (NER)',
        'Text Classification & Intent Detection',
        'Sentiment & Emotion Analysis'
      ],
      description: 'Expert-curated text datasets supporting named entity recognition, classification, intent detection, sentiment analysis, and large language model alignment.',
      subServices: [
        'Named Entity Recognition (NER)',
        'Text Classification & Intent Detection',
        'Sentiment & Emotion Analysis',
        'RLHF & LLM Fine-tuning Data'
      ],
      slug: '/solutions/nlp',
      images: [
        '/images/solutions/nlp-ner.jpg',
        '/images/solutions/nlp-text-labeling.jpg',
        '/images/solutions/nlp-intent-classification.jpg',
        '/images/solutions/llm-training-data.jpg'
      ]
    },
    {
      icon: Layers,
      title: 'Multimodal & Enterprise AI Datasets',
      color: 'from-emerald-500 to-teal-500',
      summary: 'Synchronized cross-modal datasets for complex enterprise AI systems.',
      capabilities: [
        'Video + Audio Synchronization',
        'Image-Text Pairing & Captioning',
        'Multi-language Dataset Creation'
      ],
      description: 'Cross-modal datasets combining text, image, video, and audio to enable multimodal learning and complex enterprise AI use cases.',
      subServices: [
        'Video + Audio Synchronization',
        'Image-Text Pairing & Captioning',
        'Multi-language Dataset Creation',
        'Domain-Specific Enterprise Data'
      ],
      slug: '/solutions/generative-ai',
      images: [
        '/images/solutions/multimodal-image-text.png',
        '/images/solutions/multimodal-video-text.jpg',
        '/images/solutions/multimodal-audio.jpg',
        '/images/solutions/multimodal-pipeline.avif'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'Human-in-the-Loop Quality Assurance',
      color: 'from-amber-500 to-orange-500',
      summary: 'Multi-stage validation ensuring production-ready training data quality.',
      capabilities: [
        'Dual-Read Consensus Validation',
        'Automated Quality Scoring',
        'Inter-Rater Reliability Metrics'
      ],
      description: 'Multi-stage human review and validation frameworks ensuring accuracy, consistency, and production-ready training data at scale.',
      subServices: [
        'Dual-Read Consensus Validation',
        'Automated Quality Scoring',
        'Inter-Rater Reliability Metrics',
        'Continuous Improvement Feedback'
      ],
      slug: '/contact',
      images: [
        '/images/solutions/hitl-workflow.jpg',
        '/images/solutions/annotation-review.jpg',
        '/images/solutions/qa-dashboard.jpg',
        '/images/solutions/validation-process.jpg'
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]">
            Our Core{' '}
            <span className="text-blue-600">Solution Pillars</span>
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Enterprise-grade data annotation and quality assurance across the AI value chain. From Computer Vision to LLMs to Quality Assurance, we provide everything needed for production-ready training data.
          </motion.p>
        </motion.div>

        {/* Services Grid - 4 Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                onClick={() => setActiveService(index)}
                className={`relative group cursor-pointer bg-card rounded-xl p-6 border transition-all duration-300 ${
                  activeService === index
                    ? 'border-blue-500 shadow-xl ring-1 ring-blue-500 scale-105 z-10'
                    : 'border-border hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-md`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${activeService === index ? 'text-blue-600' : 'text-foreground'}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{service.summary}</p>
                <ul className="space-y-1">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="text-xs text-foreground flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Active Service Details */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl overflow-hidden border border-border shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(services[activeService].icon, {
                  className: `w-10 h-10 bg-gradient-to-br ${services[activeService].color} text-white p-2 rounded-xl shadow-lg`
                })}
                <h3 className="text-3xl font-bold text-foreground">{services[activeService].title}</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {services[activeService].description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].subServices.map((subService, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-muted rounded-lg p-3 border border-border"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${services[activeService].color}`} />
                    <span className="text-foreground font-medium text-sm">{subService}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={() => navigate(services[activeService].slug)} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
                  {activeService === 3 ? 'Schedule Demo' : 'Explore Solution'}
                </Button>
                <Button variant="outline" onClick={() => navigate('/contact')} className="border-border text-foreground hover:bg-muted">
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4"/>
                </Button>
              </div>
            </div>
            <div 
              className="relative h-80 lg:h-auto overflow-hidden bg-muted rounded-r-3xl"
              onMouseEnter={() => setHoveredService(activeService)}
              onMouseLeave={() => {
                setHoveredService(null);
                setImageIndices(prev => {
                  const newIndices = [...prev];
                  newIndices[activeService] = 0;
                  return newIndices;
                });
              }}
            >
              <div className="relative w-full h-full">
                {services[activeService].images.map((imgSrc, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: idx === 0 ? 1 : 0 }}
                    animate={{
                      opacity: imageIndices[activeService] === idx ? 1 : 0,
                      y: imageIndices[activeService] === idx ? 0 : 8
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    onMouseEnter={() => {
                      if (hoveredService === activeService && idx < services[activeService].images.length - 1) {
                        setImageIndices(prev => {
                          const newIndices = [...prev];
                          newIndices[activeService] = idx + 1;
                          return newIndices;
                        });
                      }
                    }}
                  >
                    <img
                      alt={`${services[activeService].title} - Annotation example ${idx + 1} of ${services[activeService].images.length}`}
                      className="w-full h-full object-cover"
                      src={imgSrc}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
