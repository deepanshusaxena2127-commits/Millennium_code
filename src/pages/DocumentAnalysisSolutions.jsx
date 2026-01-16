import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { itemVariants, sectionHeaderVariants, viewportSettings, containerVariants } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const DocumentAnalysisSolutions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'ocr-extraction',
      title: 'OCR & Text Extraction',
      icon: '📖',
      description: 'Optical character recognition and text digitization from scanned documents.',
      content: 'OCR converts images and scanned documents into machine-readable text. Our teams verify and correct OCR output, handle complex layouts, multiple columns, and preserve document structure. We ensure accuracy for downstream processing and searchability.',
      useCases: [
        'Scanned document digitization and archival',
        'Handwritten document transcription',
        'Multi-column and complex layout OCR',
        'Historical document digitization',
        'Receipt and ticket text extraction',
        'Form and application processing'
      ],
      benefits: [
        'Layout-aware text extraction preserving structure',
        'Handwriting recognition and transcription',
        'Complex document handling (tables, columns, headers)',
        'High accuracy for downstream NLP tasks'
      ],
      image: 'https://images.unsplash.com/photo-1611582248425-bbd6688d22b9?w=800&h=600&fit=crop'
    },
    {
      id: 'form-processing',
      title: 'Form Data Extraction',
      icon: '📋',
      description: 'Intelligent extraction of structured data from forms and applications.',
      content: 'Form processing extracts key-value pairs, checkboxes, signatures, and fields from diverse form layouts. Our annotators map form fields, validate data consistency, and handle handwritten entries. We support custom form schemas and validation rules.',
      useCases: [
        'Insurance form data extraction',
        'Loan application processing',
        'Medical form digitization (patient records, consent forms)',
        'Tax form and government document processing',
        'Employment applications and resumes',
        'Survey and questionnaire data extraction'
      ],
      benefits: [
        'Structured field-level extraction',
        'Checkbox, signature, and handwritten field recognition',
        'Validation against custom schemas',
        'Data quality assurance and cleaning'
      ],
      image: 'https://images.unsplash.com/photo-1516321334055-f21a9be7a675?w=800&h=600&fit=crop'
    },
    {
      id: 'invoice-processing',
      title: 'Invoice & Receipt Processing',
      icon: '🧾',
      description: 'Automated extraction of invoice and receipt data for accounting and finance.',
      content: 'Invoice processing extracts critical financial data—invoice number, date, vendor, amounts, line items, taxes, and payment terms. Our teams handle diverse invoice formats, currencies, and languages for accurate financial record keeping.',
      useCases: [
        'Invoice data extraction for AP automation',
        'Receipt scanning and expense management',
        'Multi-currency and international invoices',
        'Line item and tax calculation extraction',
        'Purchase order matching and validation',
        'Financial document archival and compliance'
      ],
      benefits: [
        'Financial data accuracy for accounting systems',
        'Multi-currency and language support',
        'Line-item level extraction and validation',
        'Compliance with accounting standards'
      ],
      image: 'https://images.unsplash.com/photo-1642521572454-2216ae69b393?w=800&h=600&fit=crop'
    },
    {
      id: 'contract-analysis',
      title: 'Contract & Legal Document Analysis',
      icon: '⚖️',
      description: 'Extraction and classification of key terms, clauses, and obligations.',
      content: 'Contract analysis extracts critical terms, conditions, obligations, and risks from legal documents. Our specialists identify clause types, key dates, party obligations, and compliance requirements. We support rapid contract review and due diligence.',
      useCases: [
        'Contract key term extraction (dates, amounts, parties)',
        'Clause type identification and classification',
        'Risk and obligation extraction',
        'Non-disclosure and confidentiality identification',
        'SLA and service level term extraction',
        'Due diligence and M&A document review'
      ],
      benefits: [
        'Legal term and obligation expertise',
        'Multi-jurisdiction clause recognition',
        'Risk identification and flagging',
        'Compliance requirement extraction'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'medical-records',
      title: 'Medical Record Digitization',
      icon: '🏥',
      description: 'Healthcare document processing and patient information extraction.',
      content: 'Medical document digitization extracts patient information, diagnoses, medications, treatments, and lab results. Our HIPAA-compliant teams handle complex medical terminology and varying record formats while ensuring privacy and accuracy.',
      useCases: [
        'Patient record digitization and EHR entry',
        'Diagnosis and medication extraction',
        'Lab result and imaging report extraction',
        'Treatment plan and clinical note processing',
        'Medical history compilation and summarization',
        'Drug interaction and allergy identification'
      ],
      benefits: [
        'Medical terminology expertise (ICD-10, SNOMED)',
        'HIPAA compliance and privacy protection',
        'Clinical accuracy and validation',
        'EHR system integration support'
      ],
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop'
    },
    {
      id: 'document-classification',
      title: 'Document Classification & Categorization',
      icon: '🏷️',
      description: 'Intelligent categorization and routing of documents by type and content.',
      content: 'Document classification routes documents to appropriate processing workflows. Our annotators label documents by type, category, priority, and content summary. This enables automated processing, searchability, and information management.',
      useCases: [
        'Document type classification (invoices, receipts, contracts)',
        'Priority and urgency assessment',
        'Content-based routing and workflow automation',
        'Document clustering and similarity detection',
        'Metadata tagging and searchability',
        'Quality assessment and completeness validation'
      ],
      benefits: [
        'Automated document routing and workflow',
        'Multi-level classification taxonomy',
        'Content understanding and summarization',
        'Integration with document management systems'
      ],
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Enterprise Scale',
      description: 'Process millions of pages monthly with consistent accuracy. Handle diverse document types and formats at volume.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Global Coverage',
      description: 'Multilingual document processing for 50+ languages and regional document formats.',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Security & Compliance',
      description: 'ISO 27001, HIPAA, GDPR, and SOC 2 compliant. Secure handling of sensitive financial and healthcare documents.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Speed & Efficiency',
      description: 'Rapid turnaround for time-sensitive document processing. Integration with enterprise systems.',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    'Domain Expertise: Specialists in finance, legal, healthcare, and government document processing',
    'Accuracy Focus: 99%+ accuracy through multi-layer QA and expert validation',
    'Compliance Leadership: HIPAA, SOC 2, GDPR, and industry-specific compliance expertise',
    'Technology Integration: APIs and integrations with document management and accounting systems',
    'Quality Workflows: Advanced OCR validation, field mapping, and data consistency checking',
    'Scalable Operations: Global team enabling rapid processing of large document volumes'
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/document-analysis`} />
        <title>Document Analysis & OCR Data Annotation | MillenniumAI</title>
        <meta name="description" content="OCR, form extraction, invoice processing for document AI." />
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
            <div className="inline-block bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-4 py-1 text-sm font-semibold">
              DOCUMENT ANALYSIS SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Document Analysis & Data Extraction for Enterprise
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed">
              Transform unstructured documents into structured, actionable data. OCR, form processing, invoice extraction, and intelligent document analysis at enterprise scale with full compliance.
            </p>
            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold"
              >
                Start Document Processing
              </Button>
              <Button
                onClick={() => setActiveCategory(5)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-indigo-800"
              >
                Explore Solutions
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Document Analysis Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete document processing solutions for every business need and document type.
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
                <div className="text-indigo-600 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Document Analysis Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Document Processing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized document analysis for invoices, forms, contracts, medical records, and more.
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
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <p className={`text-sm font-bold ${activeCategory === idx ? 'text-indigo-700' : 'text-gray-900'}`}>
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
                        <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold"
                  >
                    Start Document Processing
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Document Analysis Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by Fortune 500 companies for accuracy, compliance, and operational efficiency.
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
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
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
              Technical capabilities and compliance standards for enterprise document processing.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="text-indigo-800">99%+ extraction accuracy through multi-layer QA</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="text-indigo-800">Automated validation against schema rules</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="text-indigo-800">Expert review for complex documents</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="text-indigo-800">Benchmark dataset validation</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">Compliance & Security</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">HIPAA, SOC 2 Type II compliance</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">GDPR and data privacy protection</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">ISO 27001 Information Security</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-green-800">Secure document handling and encryption</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Processing Tools</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Advanced OCR with layout recognition</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Custom field mapping and validation</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">API integration with enterprise systems</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="text-purple-800">Workflow automation and quality dashboards</span></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-orange-900 mb-6">Scale & Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Process millions of pages monthly</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Support for 50+ languages and formats</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Rapid turnaround and batch processing</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="text-orange-800">Custom SLA and priority processing</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold leading-tight">
              Ready to digitize and extract value from your documents?
            </h2>
            <p className="text-lg text-indigo-100">
              Let&apos;s discuss your document processing needs and create a custom solution for your organization.
            </p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold"
              >
                Start Document Processing
              </Button>
              <Button
                onClick={() => navigate('/insights')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-purple-700"
              >
                Learn Document Best Practices
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default DocumentAnalysisSolutions;
