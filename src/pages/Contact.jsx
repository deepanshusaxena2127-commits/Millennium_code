import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter, Facebook, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Sales | MillenniumAI</title>
        <meta name="description" content="Contact MillenniumAI for enterprise-grade data annotation. Reach our sales team or visit our corporate headquarters in Ghaziabad, India." />
      </Helmet>
      <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Let&apos;s Build the Future of AI</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to scale your models? Connect with our solution architects for a custom consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Work Email *</label>
                    <input
                      type="email"
                      className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500 font-medium border-r border-gray-300 pr-2">+91</span>
                      <input
                        type="tel"
                        className="w-full p-3 pl-14 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Company Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject *</label>
                  <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer">
                    <option value="" disabled selected>Select a topic...</option>
                    <option value="sales">Enterprise Sales Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers / HR</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-40 resize-none transition-all"
                    placeholder="Tell us about your project requirements, data volume, and timeline..."
                    required
                  ></textarea>
                </div>

                <Button className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-center text-gray-500 pt-2">
                  Your data is secure. By submitting, you agree to our Privacy Policy.
                </p>
              </form>
            </motion.div>

            {/* RIGHT COLUMN: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Info Card */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  Corporate Headquarters
                </h3>
                <address className="not-italic text-gray-300 leading-relaxed mb-8 border-l-2 border-blue-500/50 pl-4 relative z-10">
                  UGF 02 Krishna Enclave<br/>
                  Govindpuram, Ghaziabad<br/>
                  Uttar Pradesh 201002<br/>
                  India
                </address>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                      <Mail className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">General & Partnerships</p>
                      <a href="mailto:Info@millenniumai.in" className="text-lg font-medium hover:text-blue-300 transition-colors">Info@millenniumai.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                      <Mail className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Sales Inquiries</p>
                      <a href="mailto:Sales@millenniumai.com" className="text-lg font-medium hover:text-purple-300 transition-colors">Sales@millenniumai.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg shrink-0">
                      <Phone className="w-5 h-5 text-green-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Phone Support</p>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+917053171752" className="text-lg font-medium hover:text-green-300 transition-colors">+91 7053 171 752</a>
                        <a href="tel:+917291874970" className="text-lg font-medium hover:text-green-300 transition-colors">+91 7291 874 970</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/10 flex gap-4 relative z-10">
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Support Hours</h4>
                  <p className="text-sm text-gray-600">Mon - Fri: 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
