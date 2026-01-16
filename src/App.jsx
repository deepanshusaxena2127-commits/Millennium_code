import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import AboutUs from '@/pages/AboutUs';
import WorkShowcase from '@/pages/WorkShowcase';
import InsightsHub from '@/pages/InsightsHub';
import InsightsCategory from '@/pages/InsightsCategory';
import InsightsBlog from '@/pages/InsightsBlog';
import InsightsArticle from '@/pages/InsightsArticle';
import NLPSolutions from '@/pages/NLPSolutions';
import GenerativeAISolutions from '@/pages/GenerativeAISolutions';
import ComputerVisionSolutions from '@/pages/ComputerVisionSolutions';
import ContentModerationSolutions from '@/pages/ContentModerationSolutions';
import DocumentAnalysisSolutions from '@/pages/DocumentAnalysisSolutions';
import SpeechAudioSolutions from '@/pages/SpeechAudioSolutions';
import FullStackDevSolutions from '@/pages/FullStackDevSolutions';
import AutonomousMobilitySolutions from '@/pages/AutonomousMobilitySolutions';
import HealthcareSolutions from '@/pages/HealthcareSolutions';
import FinanceSolutions from '@/pages/FinanceSolutions';
import EcommerceSolutions from '@/pages/EcommerceSolutions';
import AgricultureSolutions from '@/pages/AgricultureSolutions';
import ManufacturingSolutions from '@/pages/ManufacturingSolutions';
import LogisticsSolutions from '@/pages/LogisticsSolutions';
import EducationSolutions from '@/pages/EducationSolutions';
import LegalSolutions from '@/pages/LegalSolutions';
import MediaSolutions from '@/pages/MediaSolutions';
import RetailSolutions from '@/pages/RetailSolutions';
import SecuritySolutions from '@/pages/SecuritySolutions';
import Industries from '@/components/sections/Industries';
import { Toaster } from '@/components/ui/toaster';
import { SolutionPage, IndustryPage, CompanyPage, WorkPage } from '@/pages/PageTemplates';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dynamic Routes */}
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/solutions/nlp" element={<NLPSolutions />} />
          <Route path="/solutions/generative-ai" element={<GenerativeAISolutions />} />
          <Route path="/solutions/computer-vision" element={<ComputerVisionSolutions />} />
          <Route path="/solutions/content-moderation" element={<ContentModerationSolutions />} />
          <Route path="/solutions/document-analysis" element={<DocumentAnalysisSolutions />} />
          <Route path="/solutions/speech-transcription" element={<SpeechAudioSolutions />} />
          <Route path="/solutions/full-stack-dev" element={<FullStackDevSolutions />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/industries/automotive" element={<AutonomousMobilitySolutions />} />
          <Route path="/industries/healthcare" element={<HealthcareSolutions />} />
          <Route path="/industries/finance" element={<FinanceSolutions />} />
          <Route path="/industries/ecommerce" element={<EcommerceSolutions />} />
          <Route path="/industries/agriculture" element={<AgricultureSolutions />} />
          <Route path="/industries/education" element={<EducationSolutions />} />
          <Route path="/industries/legal" element={<LegalSolutions />} />
          <Route path="/industries/media" element={<MediaSolutions />} />
          <Route path="/industries/retail" element={<RetailSolutions />} />
          <Route path="/industries/security" element={<SecuritySolutions />} />
          <Route path="/industries/manufacturing" element={<ManufacturingSolutions />} />
          <Route path="/industries/logistics" element={<LogisticsSolutions />} />
          <Route path="/industries" element={<div className="pt-20"><Industries /></div>} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/company/:slug" element={<CompanyPage />} />
          <Route path="/insights" element={<InsightsHub />} />
          <Route path="/insights/:slug" element={<InsightsCategory />} />
          <Route path="/insights/article/:slug" element={<InsightsArticle />} />
          <Route path="/blog" element={<InsightsBlog />} />
          <Route path="/work" element={<WorkShowcase />} />
          <Route path="/work/:slug" element={<WorkPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
