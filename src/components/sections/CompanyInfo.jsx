import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, ShieldCheck, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants, viewportSettings } from '@/lib/animations';

const CompanyInfo = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: Users, value: '1,000+', label: 'Specialized Annotators' },
    { icon: Award, value: '99.9%', label: 'Quality Assurance' },
    { icon: Globe2, value: '50+', label: 'Languages Supported' },
    { icon: TrendingUp, value: '500M+', label: 'Data Points Labeled' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
            >
              Global Leader in Data Annotation
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15]"
            >
              Enterprise-Grade{' '}
              <span className="text-blue-600">AI Training Data at Unmatched Scale</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              MillenniumAI partners with the world&apos;s leading technology companies to build the ground truth for the next generation of artificial intelligence.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Our vertically integrated workforce, proprietary annotation platforms, and ISO 27001 certified security protocols ensure that your models are trained on data of the highest caliber. From complex LiDAR sequences to nuanced linguistic analysis, we deliver precision where it matters most.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors"
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            <Button
              onClick={() => navigate('/company/about')}
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8"
            >
              Discover Our Story
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                className="w-full h-auto object-cover"
                alt="Diverse team of data specialists working in a high-tech modern office environment"
                src="https://images.unsplash.com/photo-1635185481431-661b09594e6c"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Security First</div>
                  <div className="text-sm text-gray-600 leading-snug">ISO 27001 & SOC 2 Type II Compliant Environment</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
