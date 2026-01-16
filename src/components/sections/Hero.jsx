import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// CLEANED VERSION - All duplicates removed

const Hero = () => {
  const navigate = useNavigate();
  const platforms = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Labelbox', logo: 'https://cdn.prod.website-files.com/62c5e0cad19d2427a659082a/634057e93732c44820658739_Labelbox%20Logo.svg' },
    { name: 'Dataloop', logo: 'https://assets-global.website-files.com/6218de564a8525287349942a/6218de564a8525414e499710_Dataloop-logo-color.svg' },
    { name: 'Encord', logo: 'https://cdn.prod.website-files.com/625539e061807d4b260586e3/62553a1a63c03264c7676755_encord-logo.svg' },
    { name: 'CVAT', logo: 'https://raw.githubusercontent.com/opencv/cvat/develop/site/content/en/img/cvat_logo.svg' },
    { name: 'V7 Darwin', logo: 'https://assets-global.website-files.com/600705a69151016839c44565/6008544d66427382436d628f_V7_Logo.svg' },
    { name: 'SuperAnnotate', logo: 'https://cdn.prod.website-files.com/5f3c19f18169b62a0d0bf387/5f3c1b18128a3852026d36e2_logo.svg' }
  ];

  return (
    <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 px-6 py-3 rounded-full mb-8 mx-auto lg:mx-0 shadow-lg backdrop-blur-md hover:from-blue-200 hover:to-purple-200 transition-all"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></span>
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Global AI Data Partners</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 mb-10 leading-[1.2] tracking-tight">
                Enterprise AI Data Annotation &
                <motion.span
                  initial={{ opacity: 0, backgroundPosition: '0% 50%' }}
                  animate={{ opacity: 1, backgroundPosition: '100% 50%' }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  className="block text-blue-600 animate-gradient"
                >
                  Training Data Solutions
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              We enable global AI teams to build high-performing computer vision, NLP, and multimodal models with secure, human-verified data at scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white h-16 px-10 text-lg font-bold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  Talk to an AI Specialist
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="border-2 border-blue-400 text-blue-600 hover:border-blue-500 hover:bg-blue-50 h-16 px-10 text-lg font-bold bg-white backdrop-blur-sm transition-all"
              >
                Request Sample Dataset
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-semibold text-gray-700 pt-8 border-t border-gray-300"
            >
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <span>ISO 27001 Certified</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <span>99.9% Accuracy</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <span>24/7 Global Support</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block perspective"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-500">
              <img
                className="w-full h-auto object-cover"
                alt="Enterprise AI annotation platform with advanced computer vision and NLP capabilities"
                src="https://images.unsplash.com/photo-1677442d019cecf8e1dfc8e89d64a61eaab9a374f?auto=format&fit=crop&q=80&w=1600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-white"
                >
                  <div className="text-sm font-bold uppercase tracking-wider mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Enterprise Solution</div>
                  <div className="font-black text-2xl md:text-3xl mb-2">L4 Autonomous Driving Dataset</div>
                  <div className="text-gray-300 font-medium">2.5M Frames • Semantic Segmentation • 99.8% Accuracy</div>
                </motion.div>
              </div>
            </div>

            {/* Floating stats cards with animations */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl">99%</div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Quality Guarantee</div>
                  <div className="text-xs text-gray-500 font-medium">Enterprise standard</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-black">24/7</div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Expert Support</div>
                  <div className="text-xs text-gray-500 font-medium">Global team ready</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Platform Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-12"
        >
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Integrated with 50+ Enterprise Platforms</p>
          <div className="relative overflow-hidden w-full">
            <motion.div 
              animate={{ x: [0, -20, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="flex gap-16 items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
            >
              {platforms.map((p, i) => (
                <motion.img 
                  key={i} 
                  src={p.logo} 
                  alt={`${p.name} logo`} 
                  className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.15 }}
                />
              ))}
              <motion.img 
                src={platforms[0].logo} 
                alt="" 
                className="h-8 md:h-10 w-auto object-contain hidden md:block"
                whileHover={{ scale: 1.15 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
