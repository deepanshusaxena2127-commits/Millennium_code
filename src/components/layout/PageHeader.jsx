import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHeader — Reusable enterprise-grade page header component
 * 
 * Props:
 *   - title (string): H1 main heading
 *   - subtitle (string, optional): Small label above title
 *   - description (string, optional): Descriptive paragraph
 *   - badge (object, optional): { icon, text } for featured badge
 *   - variant (string, optional): 'solutions', 'industries', 'company', 'insights', 'work' for color theming
 * 
 * Design:
 *   - Clean enterprise gradient background
 *   - Staggered text animations (fade + slide up)
 *   - Responsive padding and typography
 *   - Accounts for fixed header offset (pt-32)
 */

const PageHeader = ({
  title,
  subtitle,
  description,
  badge,
  variant = 'default',
  children
}) => {
  // Color variants for different page types
  const variantStyles = {
    solutions: {
      gradient: 'from-blue-900 to-indigo-900',
      accentColor: 'text-blue-400',
      badgeBg: 'bg-blue-500/20 border-blue-400/30'
    },
    industries: {
      gradient: 'from-purple-900 to-indigo-900',
      accentColor: 'text-purple-400',
      badgeBg: 'bg-purple-500/20 border-purple-400/30'
    },
    company: {
      gradient: 'from-slate-900 to-slate-800',
      accentColor: 'text-slate-400',
      badgeBg: 'bg-slate-500/20 border-slate-400/30'
    },
    insights: {
      gradient: 'from-amber-900 to-orange-900',
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 border-amber-400/30'
    },
    work: {
      gradient: 'from-green-900 to-emerald-900',
      accentColor: 'text-green-400',
      badgeBg: 'bg-green-500/20 border-green-400/30'
    },
    default: {
      gradient: 'from-gray-900 to-gray-800',
      accentColor: 'text-gray-400',
      badgeBg: 'bg-gray-500/20 border-gray-400/30'
    }
  };

  const styles = variantStyles[variant] || variantStyles.default;

  // Container animation: stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  // Item animation: fade + slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${styles.gradient} text-white overflow-hidden relative`}>
      {/* Subtle animated background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          {/* Badge (optional) */}
          {badge && (
            <motion.div variants={itemVariants}>
              <div className={`inline-flex items-center gap-3 ${styles.badgeBg} backdrop-blur-sm border rounded-full px-4 py-2 text-sm font-semibold`}>
                {badge.icon && <span className="text-lg">{badge.icon}</span>}
                <span>{badge.text}</span>
              </div>
            </motion.div>
          )}

          {/* Subtitle (optional) */}
          {subtitle && (
            <motion.div variants={itemVariants}>
              <div className="inline-block">
                <p className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor}`}>
                  {subtitle}
                </p>
              </div>
            </motion.div>
          )}

          {/* Main Title (H1) */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight">
            {title}
          </motion.h1>

          {/* Description (optional) */}
          {description && (
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              {description}
            </motion.p>
          )}

          {/* Additional children (CTA buttons, extra content, etc.) */}
          {children && (
            <motion.div variants={itemVariants} className="pt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
