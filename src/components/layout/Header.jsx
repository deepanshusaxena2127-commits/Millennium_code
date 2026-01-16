import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Car, HeartPulse, Landmark, ShoppingBag, Shield, Truck, Gamepad2, Users, Briefcase, Target, BookOpen, FileText, PenTool, Sparkles, MessageSquare, Eye, FileDigit, Mic, Code, Factory, Tractor, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const dropdownVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimer = useRef(null);
  const navigate = useNavigate();

  const openDropdown = (menu) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(menu);
  };

  const closeDropdownWithDelay = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 250);
  };

  const go = (path) => {
    clearTimeout(closeTimer.current);
    navigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  /* ================= SOLUTIONS ================= */
  const solutions = [
    { title: 'Generative AI', icon: Sparkles, path: '/solutions/generative-ai', desc: 'RLHF & LLM Training' },
    { title: 'NLP', icon: MessageSquare, path: '/solutions/nlp', desc: 'Text Classification & Sentiment' },
    { title: 'Computer Vision', icon: Eye, path: '/solutions/computer-vision', desc: 'Bounding Boxes & Segmentation' },
    { title: 'Content Moderation', icon: Shield, path: '/solutions/content-moderation', desc: 'Trust & Safety' },
    { title: 'Document Analysis', icon: FileDigit, path: '/solutions/document-analysis', desc: 'OCR & Extraction' },
    { title: 'Speech & Audio', icon: Mic, path: '/solutions/speech-transcription', desc: 'Transcription & Diarization' },
    { title: 'Full-Stack Dev', icon: Code, path: '/solutions/full-stack-dev', desc: 'Custom AI Pipelines' }
  ];

  /* ================= INDUSTRIES ================= */
  const industries = [
    { title: 'Automotive', icon: Car, path: '/industries/automotive', desc: 'Autonomous driving data annotation' },
    { title: 'Healthcare', icon: HeartPulse, path: '/industries/healthcare', desc: 'Medical imaging and clinical AI' },
    { title: 'Finance', icon: Landmark, path: '/industries/finance', desc: 'Document processing and fraud detection' },
    { title: 'E-Commerce', icon: ShoppingBag, path: '/industries/ecommerce', desc: 'Product tagging and visual search' },
    { title: 'Agriculture', icon: Tractor, path: '/industries/agriculture', desc: 'Precision farming and crop analysis' },
    { title: 'Manufacturing', icon: Factory, path: '/industries/manufacturing', desc: 'Quality control and defect detection' },
    { title: 'Retail', icon: Package, path: '/industries/retail', desc: 'Inventory and shelf monitoring' },
    { title: 'Logistics', icon: Truck, path: '/industries/logistics', desc: 'Fleet tracking and route optimization' },
    { title: 'Security', icon: Shield, path: '/industries/security', desc: 'Surveillance and threat detection' },
    { title: 'Media', icon: Gamepad2, path: '/industries/media', desc: 'Content moderation and metadata' },
    { title: 'Legal', icon: Briefcase, path: '/industries/legal', desc: 'Contract analysis and discovery' },
    { title: 'Education', icon: BookOpen, path: '/industries/education', desc: 'Student assessment and personalization' }
  ];

  /* ================= COMPANY ================= */
  const company = [
    { title: 'About Us', icon: Users, path: '/company/about', desc: 'Who we are' },
    { title: 'Careers', icon: Briefcase, path: '/company/careers', desc: 'Join our team' },
    { title: 'Why Us', icon: Target, path: '/company/leadership', desc: 'Our leadership' },
    { title: 'Security', icon: Shield, path: '/company/security', desc: 'ISO 27001 Certified' }
  ];

  /* ================= INSIGHTS ================= */
  const insights = [
    { title: 'Insights Hub', icon: BookOpen, path: '/insights', desc: 'Latest trends' },
    { title: 'Case Studies', icon: FileText, path: '/work', desc: 'Success stories' },
    { title: 'Blog', icon: PenTool, path: '/insights/modern-dev', desc: 'Technical guides' }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900 backdrop-blur-md border-b border-gray-800 z-50 transition-all duration-300" onMouseLeave={closeDropdownWithDelay}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setActiveDropdown(null)}>
          <img src="https://horizons-cdn.hostinger.com/73633acb-6641-47cc-b48c-3429d1fc710e/637bef81619da48fbf98626ae5aecb29.png" alt="MillenniumAI Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {['Solutions', 'Industry', 'Company', 'Insights', 'Work Showcase'].map(label => (
            <div key={label} onMouseEnter={() => openDropdown(label)} className="relative h-full flex items-center">
              <button onClick={() => label === 'Work Showcase' ? go('/work') : null} className={`flex items-center gap-1 font-medium text-sm transition-colors py-2 ${activeDropdown === label ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                {label}
                {label !== 'Work Showcase' && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} />}
              </button>
            </div>
          ))}
          <Link to="/contact" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">Contact Us</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button onClick={() => go('/contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* ================= DESKTOP DROPDOWN ================= */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 right-0 bg-gray-900 shadow-xl border-t border-gray-800 hidden lg:block overflow-hidden" onMouseEnter={() => openDropdown(activeDropdown)} onMouseLeave={closeDropdownWithDelay}>
            <div className="max-w-7xl mx-auto px-8 py-10 bg-gradient-to-b from-gray-900 to-gray-800/50">
              {/* SOLUTIONS MENU */}
              {activeDropdown === 'Solutions' && (
                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-3 grid grid-cols-3 gap-6">
                    {solutions.map((item) => (
                      <div key={item.title} onClick={() => go(item.path)} className="group flex gap-4 p-3 rounded-xl hover:bg-gray-800 cursor-pointer transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-blue-400 text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-gray-400 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-span-1 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Enterprise Scale?</h4>
                      <p className="text-sm text-gray-200 opacity-90">Get a custom solution architected for your specific volume and security needs.</p>
                    </div>
                    <Button onClick={() => go('/contact')} variant="secondary" className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-50">
                      Talk to Sales
                    </Button>
                  </div>
                </div>
              )}

              {/* INDUSTRY MENU */}
              {activeDropdown === 'Industry' && (
                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-3 grid grid-cols-3 gap-6">
                    {industries.map((item) => (
                      <div key={item.title} onClick={() => go(item.path)} className="group flex gap-4 p-3 rounded-xl hover:bg-gray-800 cursor-pointer transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-blue-400 text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-gray-400 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-span-1 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Enterprise Scale?</h4>
                      <p className="text-sm text-gray-200 opacity-90">Get a custom solution architected for your specific volume and security needs.</p>
                    </div>
                    <Button onClick={() => go('/contact')} variant="secondary" className="w-full mt-4 bg-white text-blue-900 hover:bg-blue-50">
                      Talk to Sales
                    </Button>
                  </div>
                </div>
              )}

              {/* COMPANY & INSIGHTS (Simplified) */}
              {(activeDropdown === 'Company' || activeDropdown === 'Insights') && (
                <div className="grid grid-cols-3 gap-8">
                  {(activeDropdown === 'Company' ? company : insights).map((item) => (
                    <div key={item.title} onClick={() => go(item.path)} className="group p-4 rounded-xl hover:bg-gray-800 cursor-pointer border border-transparent hover:border-gray-700 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-blue-400" />
                        <h4 className="font-bold text-white group-hover:text-blue-400">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-gray-900 border-t border-gray-800 overflow-y-auto max-h-[85vh] shadow-xl">
            <div className="flex flex-col p-4 space-y-1">
              {['Solutions', 'Industry', 'Company', 'Insights', 'Work Showcase'].map((item) => (
                <div key={item}>
                  <button onClick={() => setActiveDropdown(activeDropdown === item ? null : item)} className="flex items-center justify-between w-full p-3 font-semibold text-white hover:bg-gray-800 rounded-lg">
                    {item}
                    {item !== 'Work Showcase' && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />}
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {activeDropdown === item && item === 'Solutions' && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-gray-800 rounded-lg ml-3 mb-2">
                        {solutions.map(sub => (
                          <div key={sub.title} onClick={() => go(sub.path)} className="p-3 text-sm text-gray-300 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-400 pl-4 cursor-pointer">
                            {sub.title}
                          </div>
                        ))}
                      </motion.div>
                    )}
                    {activeDropdown === item && item === 'Industry' && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-gray-800 rounded-lg ml-3 mb-2">
                        {industries.map(sub => (
                          <div key={sub.title} onClick={() => go(sub.path)} className="p-3 text-sm text-gray-300 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-400 pl-4 cursor-pointer">
                            {sub.title}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div onClick={() => go('/contact')} className="p-3 font-semibold text-white hover:bg-gray-800 rounded-lg cursor-pointer">
                Contact Us
              </div>

              <div className="pt-4">
                <Button onClick={() => go('/contact')} className="w-full bg-blue-600 text-white">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
