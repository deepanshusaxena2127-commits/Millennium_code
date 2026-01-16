import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';

const SpeechAudioSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'transcription',
      title: 'Audio Transcription',
      icon: '📝',
      description: 'Accurate speech-to-text conversion for diverse audio sources and speakers.',
      content: 'Audio transcription converts spoken words into written text. Our expert annotators handle background noise, accents, multiple speakers, and technical terminology. We support 50+ languages and deliver accurate, searchable transcripts.',
      useCases: [
        'Podcast and video transcription',
        'Interview and meeting recording transcription',
        'Medical and legal dictation transcription',
        'Customer service call transcription',
        'Audiobook and speech transcription',
        'Educational lecture and seminar recording'
      ],
      benefits: [
        'High accuracy across diverse audio conditions',
        'Speaker identification and turn-taking',
        'Timestamp and chapter marking',
        'Multi-language support (50+ languages)'
      ],
      image: 'https://images.unsplash.com/photo-1669255034434-ddf33bbf4f75?w=800&h=600&fit=crop'
    },
    {
      id: 'speaker-diarization',
      title: 'Speaker Diarization & Identification',
      icon: '👥',
      description: 'Identification and segmentation of different speakers in audio recordings.',
      content: 'Speaker diarization identifies when different speakers talk, creates speaker profiles, and tracks speakers throughout audio. Our teams verify speaker changes, handle overlapping speech, and maintain consistency across conversations.',
      useCases: [
        'Meeting and conference call diarization',
        'Interview and dialogue transcription',
        'Podcast multi-speaker identification',
        'Broadcast audio speaker segmentation',
        'Call center quality assurance and analysis',
        'Speaker verification and authentication'
      ],
      benefits: [
        'Accurate speaker boundary detection',
        'Speaker profile creation and tracking',
        'Overlapping speech handling',
        'Real-time speaker change timestamps'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'speech-annotation',
      title: 'Speech Quality & Annotation',
      icon: '🎤',
      description: 'Audio quality assessment and phonetic annotation for speech systems.',
      content: 'Speech annotation evaluates audio quality, identifies noise levels, and provides phonetic guidance. Our annotators assess speaker clarity, background noise, accents, and emotional tone. We support voice synthesis quality evaluation.',
      useCases: [
        'Voice assistant training data quality assessment',
        'Phonetic annotation for speech recognition',
        'Emotion and sentiment in speech detection',
        'Accent and dialect identification',
        'Audio quality and clarity scoring',
        'Voice synthesis and TTS quality evaluation'
      ],
      benefits: [
        'Phonetic transcription and IPA notation',
        'Emotion and tone classification',
        'Audio quality metrics and filtering',
        'Accent variation documentation'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'music-annotation',
      title: 'Music & Audio Tagging',
      icon: '🎵',
      description: 'Classification and annotation of music, sound effects, and audio content.',
      content: 'Music annotation tags songs, identifies instruments, genres, moods, and audio characteristics. Our trained annotators provide detailed music metadata, copyright information, and emotional classification for recommendation systems.',
      useCases: [
        'Genre, mood, and style classification',
        'Instrument and vocal identification',
        'Lyric timing and lyric transcription',
        'Audio fingerprinting and duplicate detection',
        'Broadcast music rights and licensing',
        'Playlist curation and recommendation systems'
      ],
      benefits: [
        'Music taxonomy expertise across genres',
        'Instrument and vocal recognition',
        'Emotional classification and mood tagging',
        'Copyright and rights management support'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    },
    {
      id: 'keyword-spotting',
      title: 'Keyword Spotting & Voice Commands',
      icon: '🔍',
      description: 'Detection and annotation of wake words and voice command triggers.',
      content: 'Keyword spotting identifies specific words or phrases within audio streams. Our annotators mark wake word occurrences, false positives, and command variations. We support training data for voice-activated systems and keyword detection models.',
      useCases: [
        'Voice assistant wake word training',
        'Voice command detection and classification',
        'Emergency phrase detection (distress, help)',
        'Profanity and sensitive word detection',
        'Ad keyword triggering in audio',
        'Compliance monitoring (keywords in calls)'
      ],
      benefits: [
        'Precise keyword boundary marking',
        'Variation and accent-robust annotation',
        'False positive and noise handling',
        'Real-time keyword detection support'
      ],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop'
    },
    {
      id: 'voice-conversion',
      title: 'Voice Conversion & Audio Enhancement Data',
      icon: '🔊',
      description: 'Training data for voice conversion, enhancement, and audio processing models.',
      content: 'Voice conversion and enhancement require diverse, high-quality audio training data. We collect parallel audio samples for accent conversion, voice anonymization, and audio noise reduction. Our data supports speech enhancement and voice modification systems.',
      useCases: [
        'Accent conversion and accent neutralization',
        'Voice anonymization for privacy',
        'Background noise reduction training',
        'Speech enhancement and clarity improvement',
        'Voice cloning and synthesis data collection',
        'Audio style transfer (emotional expression)'
      ],
      benefits: [
        'Parallel audio collection (original + target)',
        'Diverse speaker and language variations',
        'High audio quality with synchronized labels',
        'Privacy and consent management'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Scale',
      description: 'Process thousands of hours of audio monthly. Distributed teams ensure rapid turnaround and consistent accuracy.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Global Coverage',
      description: 'Native speakers for 50+ languages with accent and dialect expertise for global speech systems.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'ISO 27001 and GDPR compliant with secure audio handling and privacy protection.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Speed & Efficiency',
      description: 'Rapid transcription and annotation with quality validation ensuring accuracy and consistency.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'Audio Expertise: Deep understanding of speech recognition, synthesis, and audio processing requirements',
    'Accuracy Focus: 99%+ accuracy through expert transcription and multi-layer QA verification',
    'Multilingual: Native speakers across 50+ languages with accent and dialect expertise',
    'Quality Annotators: Trained in phonetics, linguistics, and audio analysis best practices',
    'Rapid Processing: Fast turnaround for large audio volumes without quality compromise',
    'Privacy Focus: GDPR and privacy-compliant audio handling for sensitive recordings'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-900 to-orange-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 mb-12"
          >
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-1 text-sm font-semibold">
              SPEECH & AUDIO SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Speech Transcription & Audio Annotation for Voice AI
            </h1>
            <p className="text-xl text-yellow-100 max-w-3xl leading-relaxed">
              Professional audio transcription and annotation across 50+ languages. Speaker diarization, speech quality assessment, and training data for voice recognition and synthesis systems at enterprise scale.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-yellow-900 hover:bg-yellow-50 font-bold"
              >
                Start Audio Project
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-orange-800"
              >
                Explore Services
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Speech & Audio Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete audio annotation solutions for every speech and audio AI application.
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
                <div className="text-yellow-600 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speech & Audio Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Speech & Audio Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized audio annotation for transcription, speaker identification, quality assessment, and voice AI training.
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
                    ? 'border-yellow-600 bg-yellow-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-yellow-300'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-yellow-700' : 'text-gray-900'}`}>
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
                        <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-yellow-600 text-white hover:bg-yellow-700 font-bold"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Speech & Audio Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by voice AI companies globally for accuracy, language expertise, and data quality.
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
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
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
              Technical capabilities and compliance standards for professional audio annotation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-yellow-900 mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" /><span className="text-yellow-800">99%+ transcription accuracy through multi-layer QA</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" /><span className="text-yellow-800">Expert review for complex audio and accents</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" /><span className="text-yellow-800">Speaker consistency validation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" /><span className="text-yellow-800">Timestamp and metadata accuracy</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">GDPR and data privacy protection</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">ISO 27001 Information Security</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Secure audio storage and transmission</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Consent and rights management</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Language Support</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Native speakers for 50+ languages</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Accent and dialect expertise</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Multilingual speaker diarization</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="text-blue-800">Domain-specific terminology knowledge</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-900 mb-6">Scale & Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Process thousands of hours monthly</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Rapid turnaround for urgent projects</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Distributed teams for 24/7 operations</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Custom SLA and batch processing</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to power your voice AI with professional speech transcription and annotation?
            </h2>
            <p className="text-lg text-yellow-100">
              Let&apos;s discuss your audio requirements and create a custom transcription and annotation solution for your AI systems.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold"
              >
                Start Your Audio Project
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-orange-700"
              >
                Learn Audio Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpeechAudioSolutions;
