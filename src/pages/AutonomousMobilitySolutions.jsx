import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';

const AutonomousMobilitySolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'lidar-annotation',
      title: '3D LiDAR Point Cloud Annotation',
      icon: '📡',
      description: 'Precise 3D spatial labeling for autonomous driving perception systems.',
      content: 'LiDAR point cloud annotation is fundamental to autonomous vehicle perception. Our specialized teams label millions of 3D points to identify vehicles, pedestrians, cyclists, road infrastructure, and environmental hazards. We maintain sub-centimeter accuracy across diverse weather conditions and traffic scenarios.',
      useCases: [
        'Vehicle and pedestrian detection in 3D space',
        'Road surface and lane boundary identification',
        'Traffic sign and infrastructure labeling',
        'Vegetation and obstacle segmentation',
        'Dynamic object tracking and motion prediction',
        'Corner case and adverse weather scenarios'
      ],
      benefits: [
        '99.9% accuracy for Level 4 autonomy standards',
        'Multi-frame temporal consistency',
        'Occlusion handling and edge case coverage',
        'Weather-adaptive annotation protocols',
        'Global sensor calibration expertise'
      ],
      image: 'https://images.unsplash.com/photo-1618009339557-e1a5cefc68f0?w=800&h=600&fit=crop'
    },
    {
      id: 'camera-fusion',
      title: 'Multi-Camera Object Detection & Tracking',
      icon: '📷',
      description: 'Synchronized multi-view annotation for sensor fusion systems.',
      content: 'Modern autonomous vehicles use multiple cameras for redundancy and coverage. Our teams annotate objects consistently across different camera views, enabling sensor fusion systems to build coherent 3D models of the environment. We handle camera calibration, perspective distortion, and temporal alignment.',
      useCases: [
        'Vehicle classification and pose estimation',
        'Pedestrian and cyclist detection across views',
        'Traffic light and sign recognition',
        'Lane and road marking identification',
        'Rear and occluded object handling',
        'Multi-frame temporal tracking'
      ],
      benefits: [
        'View-invariant object representation',
        'Perspective-correct annotation',
        'Real-time tracking consistency',
        'Handling of motion blur and shadows',
        'Cross-view validation protocols'
      ],
      image: 'https://images.unsplash.com/photo-1609027291293-f59970f9d4b8?w=800&h=600&fit=crop'
    },
    {
      id: 'semantic-segmentation',
      title: 'Semantic & Panoptic Segmentation',
      icon: '🎯',
      description: 'Pixel-level scene understanding for complete environmental mapping.',
      content: 'Semantic segmentation provides dense, pixel-perfect understanding of the driving scene. Every pixel is classified as road, sidewalk, vegetation, sky, building, or vehicle. Panoptic segmentation combines semantic understanding with instance-level object identification, enabling vehicles to navigate complex urban environments safely.',
      useCases: [
        'Drivable surface identification',
        'Obstacle and non-negotiable region mapping',
        'Fine-grain road topology understanding',
        'Curb and parking space detection',
        'Dynamic vs. static element separation',
        'Cross-country and rural road classification'
      ],
      benefits: [
        'Dense pixel-level accuracy',
        'Class-agnostic instance separation',
        'Boundary precision for safety-critical regions',
        'Handling of ambiguous boundary pixels',
        'Weather and lighting variation coverage'
      ],
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop'
    },
    {
      id: 'sensor-fusion',
      title: 'Sensor Fusion Dataset Creation',
      icon: '🔗',
      description: 'Unified annotation across LiDAR, camera, radar, and temporal data.',
      content: 'Autonomous vehicles integrate data from multiple sensor modalities (LiDAR, cameras, radar, ultrasonic) operating at different frequencies. Our sensor fusion datasets align annotations across all modalities and timestamps, creating the ground truth that enables sensor fusion algorithms to learn robust, redundant perception.',
      useCases: [
        'Multi-modal object detection ground truth',
        'Cross-modal correspondence validation',
        'Sensor failure and degradation scenarios',
        'Temporal alignment and synchronization',
        'Radar cross-section object characterization',
        'Ultrasonic blind-spot mapping'
      ],
      benefits: [
        'Modality-agnostic object representation',
        'Temporal synchronization across 10+ Hz sensors',
        'Sensor redundancy and failure modes',
        'Physics-based constraint adherence',
        'Production-quality ground truth'
      ],
      image: 'https://images.unsplash.com/photo-1563883607-e3dd7f4c5e8d?w=800&h=600&fit=crop'
    },
    {
      id: 'corner-cases',
      title: 'Corner Case & Edge Scenario Labeling',
      icon: '⚠️',
      description: 'Comprehensive coverage of rare, dangerous, and complex driving scenarios.',
      content: 'Safe autonomous driving requires understanding rare but critical edge cases. We systematically identify and label corner cases: emergency vehicles, debris on roads, construction zones, unusual weather, pedestrian jaywalking, and multi-vehicle interactions. These challenging scenarios are essential for Level 4-5 safety certification.',
      useCases: [
        'Construction zone and road closure scenarios',
        'Emergency vehicle detection and response',
        'Debris and obstacle handling',
        'Severe weather: snow, rain, fog conditions',
        'Nighttime and low-light driving',
        'Complex multi-agent interactions',
        'Pedestrian and cyclist edge behaviors'
      ],
      benefits: [
        'Rare scenario oversampling for deep learning',
        'Safety-critical case prioritization',
        'Failure mode documentation',
        'Regulatory compliance through comprehensive testing',
        'Generalization to unseen scenarios'
      ],
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c3febfe49?w=800&h=600&fit=crop'
    },
    {
      id: 'behavioral-prediction',
      title: 'Behavioral & Intent Prediction Data',
      icon: '🧠',
      description: 'Future trajectory and intention labeling for predictive planning.',
      content: 'Autonomous vehicles must predict how other road users will behave. We annotate behavioral intent (turning, stopping, accelerating), predicted trajectories, and interaction patterns. This enables self-driving systems to anticipate actions and plan trajectories proactively, significantly improving safety and comfort.',
      useCases: [
        'Vehicle turn intention annotation',
        'Pedestrian crossing intent assessment',
        'Cyclist lane change prediction data',
        'Multi-agent interaction scenario labeling',
        'Traffic light phase anticipation',
        'Parking and yield decision datasets'
      ],
      benefits: [
        'Temporal trajectory annotation',
        'Intent classification hierarchies',
        'Uncertainty quantification',
        'Context-aware behavior patterns',
        'Improved motion planning safety margins'
      ],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
    }
  ];

  const coreCapabilities = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Enterprise Scale',
      description: 'Process millions of frames from thousands of vehicle hours at production velocity'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Coverage',
      description: 'Geographic diversity across North America, Europe, Asia, and emerging markets'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'TISAX, ISO 27001, and SOC 2 Type II with secure clean-room facilities'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Speed & Efficiency',
      description: 'Fast turnaround without compromising quality—deliver datasets on your timeline'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Automotive Expertise',
      description: 'Our team includes former OEM engineers and automotive safety specialists who understand SOTIF, functional safety, and certification requirements.'
    },
    {
      title: 'Production-Ready Quality',
      description: 'Our datasets have supported Level 3-4 autonomous vehicles in real-world deployment across multiple continents.'
    },
    {
      title: 'Specialized Infrastructure',
      description: 'Purpose-built tools for 3D annotation, sensor calibration verification, and multi-modal ground truth validation.'
    },
    {
      title: 'Continuous Learning',
      description: 'Our teams stay updated on the latest autonomous driving standards, SOTIF requirements, and safety methodologies.'
    },
    {
      title: 'Flexible Engagement',
      description: 'From rapid prototyping datasets to production-scale annotation, we scale with your development phase.'
    },
    {
      title: 'Transparent Metrics',
      description: 'Detailed quality reports, accuracy breakdowns by scenario, and continuous improvement feedback loops.'
    }
  ];

  const caseStudies = [
    {
      title: 'Level 4 Autonomy Dataset for Global OEM',
      description: 'Autonomous Vehicle Training Data for Freeway Driving',
      challenge: 'A Tier-1 automotive supplier needed 50 million frames of multi-modal sensor data annotated for Level 4 autonomous highway driving. The data required sub-centimeter accuracy for LiDAR, synchronized multi-camera object detection, and comprehensive corner case coverage across North American and European highways.',
      solution: 'We deployed a dedicated team of 300+ annotators across three continents using our proprietary 3D annotation platform. We established strict quality gates with frame-by-frame validation, cross-reviewer consensus for ambiguous cases, and automated consistency checks across sensor modalities. Special focus was placed on rare scenarios: construction zones, emergency vehicles, severe weather, and multi-vehicle interactions.',
      results: 'Delivered 50M frames with 99.9% accuracy in 18 months. The resulting dataset enabled the OEM to achieve Level 4 certification in three regions. Integration of our data reduced their development timeline by 8 months compared to in-house annotation.'
    },
    {
      title: 'Urban Autonomous Navigation Dataset',
      description: 'Complex City Driving Annotation for Autonomous Taxis',
      challenge: 'A autonomous vehicle startup required a comprehensive dataset for urban autonomous taxi operations. The challenge: capturing sufficient diversity in urban driving scenarios—construction zones, pedestrian crosswalks, parked vehicles, tight intersections, and unusual traffic patterns—while maintaining consistent quality across 12 cities globally.',
      solution: 'We collected and annotated 15 million frames from vehicle fleets across 12 major cities. Our approach emphasized semantic segmentation for fine-grained drivable surface understanding, panoptic segmentation for object identification, and behavioral intent labeling for pedestrian and cyclist prediction. We established city-specific quality assurance protocols to handle regional driving variations.',
      results: 'Successfully annotated 15M frames in 14 months with city-specific quality metrics. The dataset enabled the startup to deploy their autonomous taxi service in 6 cities within 18 months of platform completion. Our behavioral prediction annotations directly contributed to a 35% improvement in collision avoidance performance.'
    }
  ];

  const faqs = [
    {
      question: 'What accuracy levels are required for autonomous driving data annotation?',
      answer: 'For Level 3-4 autonomy, we maintain 99.9% accuracy with sub-centimeter precision for LiDAR and pixel-level precision for camera data. Accuracy is verified through multi-reviewer consensus, automated consistency checks, and continuous auditing against ground truth measurements. We provide detailed accuracy breakdowns by scenario type, object class, and environmental condition.'
    },
    {
      question: 'How do you ensure temporal consistency across video sequences?',
      answer: 'Our annotation platform enforces temporal coherence by tracking object identities across frames, flagging sudden appearance/disappearance changes, and validating trajectory continuity. Annotators verify that objects maintain consistent IDs, velocities remain physically plausible, and interactions follow logical patterns. We also perform automated checks for flickering labels and impossible transitions.'
    },
    {
      question: 'How do you handle sensor-specific challenges like LiDAR sparsity or camera distortion?',
      answer: 'Each sensor modality requires specialized handling. For LiDAR, we account for angular resolution variation and sparse rear-hemisphere coverage. For cameras, we correct for lens distortion and handle perspective ambiguities. Our teams are trained on sensor physics and equipped with tools that compensate for modality-specific artifacts before annotation.'
    },
    {
      question: 'Can you provide data for rare scenarios and edge cases?',
      answer: 'Yes, we specialize in corner case coverage. We systematically oversample rare but safety-critical scenarios: severe weather, construction zones, emergency vehicles, and unusual traffic patterns. We work with you to define relevant edge cases and ensure they represent 15-20% of your training dataset, enabling models to learn robust decision-making.'
    },
    {
      question: 'What is your typical turnaround time for large-scale autonomous driving projects?',
      answer: 'Turnaround depends on scale and complexity. For 10M frames with standard complexity, expect 6-9 months. For 50M+ frames, plan 12-18 months. We offer accelerated timelines with larger teams at higher cost, or extended timelines to optimize cost-efficiency. We maintain transparent scheduling with weekly progress tracking and early identification of any quality or timeline issues.'
    }
  ];

  const specs = [
    {
      title: 'Quality & Accuracy',
      items: [
        '99.9% ground truth accuracy for Level 4 autonomy',
        'Multi-reviewer consensus validation',
        'Automated consistency verification across sensor modalities',
        'Sub-centimeter precision for 3D bounding boxes'
      ]
    },
    {
      title: 'Compliance & Security',
      items: [
        'TISAX (Trusted Automotive Information Security eXchange)',
        'ISO 27001 information security management',
        'SOC 2 Type II compliance',
        'Secure clean-room facilities with air-gapped workstations'
      ]
    },
    {
      title: 'Data Capability',
      items: [
        'Multi-modal sensor fusion (LiDAR, camera, radar, ultrasonic)',
        'Temporal datasets with frame-level synchronization',
        'Global geographic diversity (12+ countries)',
        'Weather condition variation (clear, rain, snow, fog)'
      ]
    },
    {
      title: 'Scale & Performance',
      items: [
        'Capacity: 100M+ frames per year',
        'Team: 500+ specialized autonomous driving annotators',
        'Infrastructure: 3 continents with follow-the-sun coverage',
        'Turnaround: 6-18 months depending on dataset size and complexity'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Autonomous Vehicle Data Annotation | LiDAR & Sensor Labeling | MillenniumAI</title>
        <meta name="description" content="Enterprise-grade autonomous driving data annotation including 3D LiDAR labeling, multi-camera object detection, and sensor fusion datasets for Level 3-4 autonomy." />
        <meta name="keywords" content="autonomous vehicle annotation, LiDAR point cloud labeling, 3D object detection, autonomous driving dataset, sensor fusion annotation, self-driving car data" />
        <meta property="og:title" content="Autonomous Vehicle Data Annotation | LiDAR & Sensor Labeling" />
        <meta property="og:description" content="Professional AV data annotation for autonomous driving systems with 99.9% accuracy and SOTIF compliance." />
      </Helmet>

      <div className="min-h-screen bg-gray-950 text-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-cyan-900/20"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Autonomous Vehicle Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Enterprise-grade 3D LiDAR, multi-camera, and sensor fusion annotation for Level 3-5 autonomous driving systems
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                Start Your Dataset <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/company/about')}
                className="border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-900/20"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </section>

        {/* ================= CORE CAPABILITIES ================= */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="text-blue-400 mb-4">{capability.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= INTERACTIVE CATEGORIES ================= */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Autonomous Driving Annotation Solutions
            </motion.h2>

            {/* Category Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`p-3 rounded-lg font-medium text-sm transition-all ${
                    activeCategory === idx
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
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
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{categories[activeCategory].title}</h3>
                <p className="text-gray-300 mb-6">{categories[activeCategory].content}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {categories[activeCategory].useCases.slice(0, 4).map((useCase, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
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
                        <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
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

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <h3 className="font-semibold text-lg text-blue-400 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= CASE STUDIES ================= */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Real-World Autonomous Driving Projects
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
                  className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{study.title}</h3>
                  <p className="text-cyan-400 mb-4">{study.description}</p>

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

        {/* ================= TECHNICAL SPECS ================= */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-20 px-4 bg-gray-900/50 max-w-4xl mx-auto w-full">
          <motion.h2
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <h3 className="font-semibold text-blue-400 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-cyan-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Accelerate Autonomous Development?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              Get a custom dataset proposal tailored to your autonomous vehicle development stage and requirements
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
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all text-lg"
              >
                Request Dataset Proposal
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
      </div>
    </>
  );
};

export default AutonomousMobilitySolutions;
