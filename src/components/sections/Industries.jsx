import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, HeartPulse, Landmark, ShoppingBag, MapPin, Factory, Film, Layers } from 'lucide-react';
import { containerVariants, itemVariants, sectionHeaderVariants, viewportSettings } from '@/lib/animations';

const industries = [
  {
    title: 'Healthcare & Life Sciences',
    slug: 'healthcare',
    icon: HeartPulse,
    color: 'bg-emerald-600',
    description: 'Clinical-grade annotation for medical imaging, structured clinical text, and longitudinal study data to train diagnostic models and support regulatory-ready workflows.'
  },
  {
    title: 'Automotive & Mobility',
    slug: 'automotive',
    icon: Car,
    color: 'bg-blue-600',
    description: 'High-fidelity perception datasets including multi-camera, LiDAR, and sensor fusion annotations to improve object detection, tracking, and behavior prediction for production ADAS and autonomy systems.'
  },
  {
    title: 'Retail & E-commerce',
    slug: 'retail',
    icon: ShoppingBag,
    color: 'bg-purple-600',
    description: 'Product and visual search datasets, attribute tagging, and customer interaction labeling to drive recommendation accuracy, visual discovery, and inventory intelligence at scale.'
  },
  {
    title: 'Finance & Banking',
    slug: 'finance',
    icon: Landmark,
    color: 'bg-slate-700',
    description: 'Document OCR, transaction classification, and anomaly labeling to support automated processing, fraud detection, and compliance workflows with audit-ready outputs.'
  },
  {
    title: 'Geospatial & Mapping',
    slug: 'geospatial',
    icon: MapPin,
    color: 'bg-teal-600',
    description: 'Satellite, aerial, and drone imagery annotation for land cover, feature extraction, and geospatial analytics used in mapping, change detection, and location intelligence.'
  },
  {
    title: 'Manufacturing & Industrial AI',
    slug: 'manufacturing',
    icon: Factory,
    color: 'bg-amber-600',
    description: 'Production line imagery, defect taxonomy labeling, and sensor-correlated annotations to enable defect detection, predictive maintenance, and process optimization.'
  },
  {
    title: 'Media & Entertainment',
    slug: 'media',
    icon: Film,
    color: 'bg-pink-600',
    description: 'Video-level metadata, content moderation labels, and captioning datasets to improve content discovery, safety, and accessibility for streaming platforms.'
  },
  {
    title: 'AI & Technology Platforms',
    slug: 'ai-platforms',
    icon: Layers,
    color: 'bg-indigo-600',
    description: 'Platform-integrated training data, schema design, and human-in-the-loop workflows to operationalize model training, evaluation, and continual improvement.'
  }
];

export default function Industries() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-20"
        >
          <h2 id="industries-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]">
            Industries We Serve:{' '}
            <span className="text-blue-600">Global Expertise in AI Data Annotation</span>
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We provide industry-specific training data and human-in-the-loop annotation workflows for production AI systems. Our services include computer vision, NLP, and multimodal labeling tailored to regulatory, scale, and quality requirements across industries.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.slug}
                variants={itemVariants}
                onClick={() => navigate(`/industries/${industry.slug}`)}
                className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-sm ${industry.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
                <div className="mt-4 text-blue-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Solution →
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
