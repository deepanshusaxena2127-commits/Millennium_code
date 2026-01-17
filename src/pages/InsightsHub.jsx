import SEO from "@/components/SEO";
import { siteContent } from "@/lib/content";
import { Link } from "react-router-dom";

export default function InsightsHub() {
  const categories = Object.values(siteContent.insights.categories);

  return (
    <>
      <SEO
        title="Insights & Research | MillenniumAI"
        description="Expert articles and research on AI data annotation and generative AI."
        canonical="/insights"
      />

      <section className="pt-32 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Insights</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/insights/${cat.slug}`}
              className="border p-6 rounded-lg hover:shadow"
            >
              <h2 className="text-xl font-semibold">{cat.title}</h2>
              <p className="mt-2 text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
