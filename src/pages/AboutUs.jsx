import React from "react";
import SEO from "@/components/SEO";
import Schema from "@/components/Schema";
import { siteContent } from "@/lib/content";

export default function AboutUs() {
  // Defensive access (prevents white screen if content changes later)
  const about = siteContent?.company?.about;

  if (!about) {
    return (
      <div className="pt-32 text-center text-gray-600">
        Content coming soon.
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
      <SEO
        title="About MillenniumAI | Global AI Data Annotation Company"
        description="Learn about MillenniumAI, a global AI data annotation and AI solutions company delivering scalable, enterprise-grade AI services worldwide."
        canonical="https://www.millenniumai.com/company/about"
      />

      {/* Structured Data */}
      <Schema
        type="Organization"
        data={{
          name: "MillenniumAI",
          url: "https://www.millenniumai.com",
          description:
            "Global AI data annotation and AI solutions company serving enterprises worldwide",
          sameAs: [
            "https://www.linkedin.com/company/millenniumai",
            "https://twitter.com/millenniumai"
          ]
        }}
      />

      {/* Page Content */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {about.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              {about.description}
            </p>
          </div>

          {/* Sections */}
          <div className="grid md:grid-cols-2 gap-10">
            {about.sections?.map((section, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-6 bg-gray-50"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
