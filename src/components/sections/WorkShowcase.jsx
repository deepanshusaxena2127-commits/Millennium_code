import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const WorkShowcase = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Autonomous Vehicle Perception',
      category: 'Computer Vision',
      description: 'Annotated 2 million frames of diverse driving scenarios with 2D/3D bounding boxes and semantic segmentation, achieving a 99.8% precision rate for a leading autonomous vehicle manufacturer.',
      image: <img alt="High definition street view with colored semantic segmentation overlays on vehicles, roads, and pedestrians" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1685984351715-1d60f47366d6" />
    },
    {
      title: 'Radiology Disease Detection',
      category: 'Healthcare',
      description: 'Collaborated with radiologists to annotate 50,000 chest X-rays with polygon masks, enabling the development of an early-stage pneumonia detection model with FDA-level accuracy.',
      image: <img alt="Medical chest X-ray with colored heatmap overlays indicating potential pathology" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc" />
    },
    {
      title: 'Multilingual NLP Engine',
      category: 'NLP',
      description: 'Processed 500,000 documents across 15 languages for a global e-commerce giant, extracting named entities and sentiment scores to power their recommendation engine.',
      image: <img alt="Dashboard showing text analysis in multiple languages with sentiment score indicators" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1677691824518-eebbab3a6c6d" />
    },
    {
      title: 'Real-Time Content Safety',
      category: 'Content Moderation',
      description: 'Deployed a hybrid human-in-the-loop system to moderate 50,000 hours of user-generated video content monthly, filtering NSFW and hate speech violations in near real-time.',
      image: <img alt="Content moderation interface showing video thumbnails with safety status indicators green and red" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1682506457554-b34c9682e985" />
    },
    {
      title: 'Financial Document OCR',
      category: 'Document Analysis',
      description: 'Developed a custom OCR pipeline for a major bank to digitize and extract key-value pairs from complex handwritten loan applications, reducing processing time by 80%.',
      image: <img alt="Scanned financial form with bounding boxes around handwritten text fields being extracted" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1698593659194-ae0f43306fce" />
    },
    {
      title: 'Voice Assistant Training',
      category: 'Speech Transcription',
      description: 'Transcribed and annotated 10,000 hours of audio data including speaker diarization and noise classification to train next-generation smart home voice assistants.',
      image: <img alt="Audio editing software interface showing multi-speaker waveforms and transcription text" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1668605335655-2dc1f8bec86b" />
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]">
              Featured{' '}
              <span className="text-blue-600">Case Studies</span>
            </h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600"
            >
              Explore how we&apos;ve helped global enterprises solve their most complex data challenges.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
          >
            <Button
              variant="outline"
              onClick={() => navigate('/work')}
              className="group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onClick={() => navigate('/work')}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-60 shrink-0">
                {project.image}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                  {project.description}
                </p>
                <div className="text-blue-600 font-semibold text-sm flex items-center mt-auto group-hover:translate-x-1 transition-transform">
                  Read Case Study
                  <ExternalLink className="w-3 h-3 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 rounded-full pl-6 pr-2 py-2">
            <span className="text-gray-600 font-medium text-sm">Ready to start your own success story?</span>
            <Button onClick={() => navigate('/contact')} className="rounded-full bg-gray-900 text-white hover:bg-gray-800">
              Start a Secure Pilot Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
