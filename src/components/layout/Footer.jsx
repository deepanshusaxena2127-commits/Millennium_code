import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Address */}
          <div className="space-y-6">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <img src="https://horizons-cdn.hostinger.com/73633acb-6641-47cc-b48c-3429d1fc710e/637bef81619da48fbf98626ae5aecb29.png" alt="MillenniumAI Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Blueprinting the mind of machines. We provide the ground truth for the world&apos;s most advanced AI models through precision data annotation and RLHF.
            </p>
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Headquarters
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed pl-6 border-l border-gray-700">
                UGF 02 Krishna Enclave<br/>
                Govindpuram, Ghaziabad<br/>
                Uttar Pradesh 201002, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/solutions/generative-ai" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Generative AI</Link></li>
              <li><Link to="/solutions/computer-vision" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Computer Vision</Link></li>
              <li><Link to="/solutions/nlp" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> NLP Services</Link></li>
              <li><Link to="/solutions/content-moderation" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Content Moderation</Link></li>
              <li><Link to="/solutions/speech-transcription" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Audio & Speech</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">General</span>
                  <a href="mailto:Info@millenniumai.in" className="hover:text-white transition-colors">Info@millenniumai.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Sales</span>
                  <a href="mailto:Sales@millenniumai.com" className="hover:text-white transition-colors">Sales@millenniumai.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917053171752" className="hover:text-white transition-colors">+91 7053 171 752</a>
                  <a href="tel:+917291874970" className="hover:text-white transition-colors">+91 7291 874 970</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest AI data trends delivered to your inbox.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter email" className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none text-white" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">→</Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 MillenniumAI. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/security" className="hover:text-gray-300">Security</Link>
          </div>
          <button onClick={scrollToTop} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
