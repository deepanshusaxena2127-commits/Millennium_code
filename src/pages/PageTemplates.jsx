import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Schema from "@/components/Schema";
import { siteContent, siteMeta } from "@/lib/content";

const findBySlug = (collection, slug) =>
  Object.values(collection).find((item) => item.slug === slug);

function PageWrapper({ data }) {
  const canonical = `${siteMeta.domain}${location.pathname}`;

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        canonical={canonical}
      />
      <Schema type={data.seo.schemaType} data={data} />

      <section className="pt-32 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{data.summary}</p>
      </section>
    </>
  );
}

export function SolutionPage() {
  const { slug } = useParams();
  const data = findBySlug(siteContent.solutions, slug);
  return data ? <PageWrapper data={data} /> : null;
}

export function IndustryPage() {
  const { slug } = useParams();
  const data = findBySlug(siteContent.industries, slug);
  return data ? <PageWrapper data={data} /> : null;
}

export function CompanyPage() {
  const { slug } = useParams();
  const data = findBySlug(siteContent.company, slug);
  return data ? <PageWrapper data={data} /> : null;
}

export function WorkPage() {
  const { slug } = useParams();
  const data = findBySlug(siteContent.work, slug);
  return data ? <PageWrapper data={data} /> : null;
}
