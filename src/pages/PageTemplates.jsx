import React from "react";
import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { siteContent, siteMeta } from "@/lib/content";

/* ============================
   SOLUTION PAGE TEMPLATE
============================ */
export function SolutionPage() {
  const { slug } = useParams();
  const data = siteContent.solutions && siteContent.solutions[slug];

  const title = data ? data.seoTitle || `${data.title} | ${siteMeta.siteName}` : `${slug} Solutions | ${siteMeta.siteName}`;
  const description = data ? data.metaDescription || siteMeta.defaultDescription : siteMeta.defaultDescription;
  const canonical = `${siteMeta.siteUrl}/solutions/${slug}`;

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />

      <section className="pt-28 pb-20 text-center">
        <h1 className="text-3xl font-bold">{data ? data.heroTitle : `${slug} Solutions`}</h1>
        {data && <p className="mt-4 text-gray-600">{data.heroSubtitle}</p>}
        <div className="max-w-3xl mx-auto mt-6 text-gray-700">
          <p>{data ? data.description : 'Detailed solution content coming soon.'}</p>
        </div>
        {data && data.features && (
          <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            {data.features.map((f, i) => (
              <div key={i} className="p-4 border rounded bg-white">{f}</div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

/* ============================
   INDUSTRY PAGE TEMPLATE
============================ */
export function IndustryPage() {
  const { slug } = useParams();
  const data = siteContent.industriesComprehensive && siteContent.industriesComprehensive[slug];

  const title = data ? data.seoTitle || `${data.title} | ${siteMeta.siteName}` : `${slug} Industry AI Solutions | ${siteMeta.siteName}`;
  const description = data ? data.metaDescription || siteMeta.defaultDescription : siteMeta.defaultDescription;
  const canonical = `${siteMeta.siteUrl}/industries/${slug}`;

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />

      <section className="pt-28 pb-20 text-center">
        <h1 className="text-3xl font-bold">{data ? data.heroTitle : `${slug} Industry`}</h1>
        {data && <p className="mt-4 text-gray-600">{data.heroSubtitle}</p>}
        <div className="max-w-3xl mx-auto mt-6 text-gray-700">
          <p>{data ? data.description : 'Industry-specific AI solutions coming soon.'}</p>
        </div>
      </section>
    </>
  );
}

/* ============================
   COMPANY PAGE TEMPLATE
============================ */
export function CompanyPage() {
  const { slug } = useParams();
  const data = siteContent.company && siteContent.company[slug];

  const title = data && data.title ? `${data.title} | ${siteMeta.siteName}` : `${slug} | ${siteMeta.siteName}`;
  const description = data && data.description ? data.description : siteMeta.defaultDescription;
  const canonical = `${siteMeta.siteUrl}/company/${slug}`;

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />

      <section className="pt-28 pb-20 text-center">
        <h1 className="text-3xl font-bold">{data && data.title ? data.title : slug}</h1>
        {data && data.sections && (
          <div className="max-w-3xl mx-auto mt-6 text-left text-gray-700">
            {data.sections.map((s, i) => (
              <div key={i} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{s.heading}</h2>
                <p>{s.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

/* ============================
   WORK PAGE TEMPLATE
============================ */
export function WorkPage() {
  const { slug } = useParams();

  return (
    <>
      <SEO
        title={`${slug} Case Study | ${siteMeta.siteName}`}
        description={siteMeta.defaultDescription}
        canonical={`${siteMeta.siteUrl}/work/${slug}`}
      />

      <section className="pt-28 pb-20 text-center">
        <h1 className="text-3xl font-bold capitalize">{slug}</h1>
        <p className="mt-4 text-gray-600">
          Case study details coming soon.
        </p>
      </section>
    </>
  );
}
