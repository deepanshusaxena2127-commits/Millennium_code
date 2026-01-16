import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const ComputerVisionSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'image-classification',
      title: 'Image Classification & Tagging',
      icon: '🏷️',
      description: 'Pixel-level and image-level classification for visual understanding systems.',
      content: 'Image classification is the foundation of computer vision systems. Our annotators label images across multiple dimensions—objects, scenes, activities, attributes, and quality metrics. From simple binary classification to complex multi-label scenarios, we deliver accurate ground truth data at enterprise scale.',
      useCases: [
        'Product categorization for e-commerce platforms',
        'Scene classification (indoor, outdoor, urban, nature)',
        'Medical image classification (pathology, anatomy)',
        'Quality assessment and defect detection',
        'Content moderation and unsafe image flagging',
        'Attribute tagging (color, style, condition, brand)'
      ],
      benefits: [
        'Multi-label classification for complex scenarios',
        'Domain-specific expertise across industries',
        'Consistent taxonomy across millions of images',
        'Quality assurance with consensus validation'
      ],
      image: 'https://images.unsplash.com/photo-1643028468558-2082eb119131?w=800&h=600&fit=crop'
    },
    {
      id: 'object-detection',
      title: 'Object Detection & Localization',
      icon: '🎯',
      description: 'Precise bounding box and object coordinate annotation for detection models.',
      content: 'Object detection requires pixel-perfect annotations. Our teams draw precise bounding boxes, polygonal outlines, and keypoint markers for every object in an image. We handle occlusion, small objects, and complex scenes with accuracy that enables robust detector training.',
      useCases: [
        'Autonomous vehicle object detection (cars, pedestrians, cyclists)',
        'Face detection and face recognition training data',
        'Retail product detection and shelf monitoring',
        'Traffic monitoring and vehicle counting',
        'Aerial and satellite imagery object detection',
        'Defect detection in manufacturing and quality control'
      ],
      benefits: [
        'Precise bounding box annotation with IoU validation',
        'Handling of small, occluded, and crowded scenes',
        'Multi-class object detection support',
        'Consistent annotation standards across teams'
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70570601?w=800&h=600&fit=crop'
    },
    {
      id: 'semantic-segmentation',
      title: 'Semantic Segmentation',
      icon: '🎨',
      description: 'Pixel-level semantic labeling for scene understanding.',
      content: 'Semantic segmentation assigns a class label to every pixel in an image. Our expert annotators create high-quality segmentation masks for complex scenes, handling fine details, edges, and multi-class overlaps. We use advanced tools and workflows to ensure pixel-accurate annotations.',
      useCases: [
        'Autonomous driving scene segmentation (road, sidewalk, buildings)',
        'Medical image segmentation (organs, tumors, tissue)',
        'Satellite imagery land-use classification',
        'Indoor scene understanding and navigation',
        'Agricultural crop and field analysis',
        'Environmental monitoring and change detection'
      ],
      benefits: [
        'Pixel-accurate segmentation masks',
        'Complex scene handling with multiple classes',
        'Edge-aware annotation for precise boundaries',
        'Quality validation with boundary metrics'
      ],
      image: 'https://images.unsplash.com/photo-1642521572454-2216ae69b393?w=800&h=600&fit=crop'
    },
    {
      id: 'instance-segmentation',
      title: 'Instance Segmentation & Panoptic Segmentation',
      icon: '👥',
      description: 'Individual instance-level masks and panoptic scene understanding.',
      content: 'Instance segmentation identifies and segments each individual object, distinguishing between different instances of the same class. Panoptic segmentation combines instance and semantic understanding for complete scene parsing. Both require precision annotation expertise.',
      useCases: [
        'Crowd counting and person instance detection',
        'Medical imaging with multiple anatomy instances',
        'Retail store layouts with individual product instances',
        'Autonomous driving panoptic scene understanding',
        'Furniture and object arrangement in interior design',
        'Ecosystem monitoring with individual organism tracking'
      ],
      benefits: [
        'Per-instance mask generation and ID tracking',
        'Panoptic segmentation with consistent labeling',
        'Handling of small and overlapping instances',
        'Instance-level quality metrics and validation'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'video-tracking',
      title: 'Video Annotation & Object Tracking',
      icon: '🎬',
      description: 'Temporal annotation and object tracking across video frames.',
      content: 'Video annotation adds temporal dimension to vision tasks. Our teams annotate objects across frames, track movement and interactions, and handle occlusion and scene changes. We deliver temporal consistency and accurate motion data for video understanding models.',
      useCases: [
        'Autonomous vehicle testing with temporal object tracking',
        'Sports analytics with player and ball tracking',
        'Surveillance and behavior analysis',
        'Action recognition and activity detection',
        'Traffic flow analysis and vehicle trajectory',
        'Animal behavior and wildlife monitoring'
      ],
      benefits: [
        'Temporal consistency across frames',
        'Smooth trajectory annotation and interpolation',
        'Occlusion handling and re-identification',
        'Action and interaction annotation'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: '3d-point-cloud',
      title: '3D Point Cloud & LiDAR Annotation',
      icon: '🌐',
      description: '3D spatial annotation for autonomous systems and 3D scene understanding.',
      content: 'LiDAR and 3D point cloud annotation enables 3D scene understanding for autonomous vehicles and robotics. Our specialists annotate 3D bounding boxes, cuboids, polylines, and semantic labels in 3D space with high precision and consistency.',
      useCases: [
        'Autonomous vehicle 3D object detection training',
        'Robotic scene understanding and manipulation',
        'Indoor navigation and SLAM datasets',
        'Aerial LiDAR data annotation and analysis',
        ' 3D reconstruction and depth estimation',
        'Smart city infrastructure and planning'
      ],
      benefits: [
        '3D bounding box annotation with rotation and scale',
        'Multi-sensor fusion (camera + LiDAR + radar)',
        'Temporal 3D tracking across frames',
        '3D semantic segmentation in point clouds'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Scale',
      description: 'Handle millions of images and hours of video with 99%+ accuracy. Distributed teams ensure rapid annotation cycles and consistent quality.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Global Coverage',
      description: 'Specialized annotators across continents for diverse visual content, cultural context, and regional variations in scenes and objects.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'ISO 27001 certified with GDPR, HIPAA compliance. Secure handling of sensitive imagery including medical and surveillance data.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Speed & Efficiency',
      description: 'Advanced annotation tools and workflows enable rapid turnaround for time-sensitive projects without compromising accuracy.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'Visual Expertise: Deep understanding of computer vision tasks, model requirements, and annotation best practices',
    'Precision Annotation: Pixel-perfect accuracy through advanced tools, quality workflows, and expert validators',
    'Diverse Visual Content: Experience across healthcare, autonomous driving, retail, aerial, satellite, and specialized imagery',
    'Advanced Tooling: Custom annotation platforms optimized for bounding boxes, segmentation, keypoints, and 3D annotation',
    'Rapid Scaling: 1000+ trained annotators enabling fast project scaling while maintaining consistent quality',
    'Multi-Modal Support: Expertise in RGB, thermal, LiDAR, radar, and multi-sensor fusion annotation'
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/computer-vision`} />
        <title>Computer Vision Data Annotation | MillenniumAI</title>
        <meta name="description" content="Image classification, object detection, semantic segmentation for computer vision AI." />
      </Helmet>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 mb-12"
          >
            <div className="inline-block bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-1 text-sm font-semibold">
              COMPUTER VISION SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Computer Vision Annotation for Autonomous Systems & AI
            </h1>
            <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
              Pixel-perfect image and video annotation at enterprise scale. From object detection to 3D point clouds, we provide the visual ground truth your models demand. Trusted by autonomous vehicle teams, robotics companies, and vision AI leaders globally.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-green-900 hover:bg-green-50 font-bold"
              >
                Start Your Vision Project
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-green-800"
              >
                Explore Capabilities
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Computer Vision Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete visual annotation solutions for every computer vision use case, from basic classification to advanced 3D understanding.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-green-600 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Computer Vision Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Computer Vision Annotation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized visual annotation services for every computer vision task, from basic image classification to complex 3D scene understanding.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  activeCategory === idx
                    ? 'border-green-600 bg-green-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-green-300'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-green-700' : 'text-gray-900'}`}>
                  {category.title.split(' ')[0]}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Active Category Detail */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{categories[activeCategory].icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900">{categories[activeCategory].title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {categories[activeCategory].content}
                </p>

                {/* Use Cases */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Real-World Use Cases</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Our Approach</h4>
                  <ul className="space-y-3">
                    {categories[activeCategory].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-green-600 text-white hover:bg-green-700 font-bold"
                  >
                    Discuss Your Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative h-96 lg:h-auto overflow-hidden bg-gray-100">
                <motion.img
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Computer Vision Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by autonomous vehicle teams, robotics companies, and AI vision leaders for precision, scale, and expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Specifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technical capabilities and compliance standards for enterprise-grade computer vision systems.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">99%+ accuracy through consensus validation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Multi-layer QA with IoU and spatial metrics</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Boundary precision validation {'>='} 0.95 IoU</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Regular benchmark dataset validation</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">ISO 27001 Information Security Certification</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">GDPR, HIPAA, and SOC 2 Type II compliant</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Secure imagery handling and encryption</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Data residency options (EU, US, APAC)</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Annotation Tooling</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Advanced bounding box and polygon tools</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Pixel-accurate segmentation and keypoint annotation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">3D bounding box and LiDAR annotation support</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Video temporal tracking and interpolation</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-900 mb-6">Scale & Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Handle millions of images and hours of video</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">1000+ trained vision annotators globally</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Distributed teams for rapid project delivery</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Custom SLA and turnaround time agreements</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to power your vision systems with pixel-perfect training data?
            </h2>
            <p className="text-lg text-green-100">
              Let&apos;s discuss your computer vision requirements and create a custom annotation solution for your AI models.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 font-bold"
              >
                Start Your Vision Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-teal-700"
              >
                Learn Vision Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ComputerVisionSolutions;
