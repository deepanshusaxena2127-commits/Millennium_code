import SEO from "@/components/SEO";
import Schema from "@/components/Schema";

// Structured data
import { organizationSchema, websiteSchema } from "@/lib/schema";

// Homepage sections (inside components/sections)
import Hero from "@/components/sections/Hero.jsx";
import Services from "@/components/sections/Services.jsx";
import DataAnnotationWorkflow from "@/components/sections/DataAnnotationWorkflow.jsx";
import Industries from "@/components/sections/Industries.jsx";
import CompanyInfo from "@/components/sections/CompanyInfo.jsx";
import WorkShowcase from "@/components/sections/WorkShowcase.jsx";
import Insights from "@/components/sections/Insights.jsx";

// Call to Action (root-level component)
import CallToAction from "@/components/CallToAction.jsx";

export default function Home() {
  return (
    <>
      {/* =====================
          SEO METADATA
         ===================== */}
      <SEO
        title="Enterprise AI Data Annotation & NLP Services"
        description="MillenniumAI provides enterprise-grade AI data annotation, NLP, and machine learning services to help global companies build accurate, scalable, and reliable AI systems."
        canonical="https://www.millenniumai.com/"
      />

      {/* =====================
          STRUCTURED DATA
         ===================== */}
      <Schema data={organizationSchema} />
      <Schema data={websiteSchema} />

      {/* =====================
          PAGE CONTENT
         ===================== */}
      <main>
        <Hero />
        <Services />
        <DataAnnotationWorkflow />
        <Industries />
        <CompanyInfo />
        <WorkShowcase />
        <Insights />
        <CallToAction />
      </main>
    </>
  );
}
