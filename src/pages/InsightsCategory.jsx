import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { siteContent } from "@/lib/content";

export default function InsightsCategory() {
  const { slug } = useParams();
  const category = Object.values(siteContent.insights.categories).find(
    (c) => c.slug === slug
  );

  const articles = Object.values(siteContent.insights.articles).filter(
    (a) => a.category === slug
  );

  if (!category) return null;

  return (
    <>
      <SEO {...category.seo} canonical={`/insights/${slug}`} />

      <section className="pt-32 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold">{category.title}</h1>
        <p className="mt-4 text-gray-600">{category.description}</p>

        <div className="mt-10 space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/insights/article/${article.slug}`}
              className="block border p-6 rounded-lg hover:shadow"
            >
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="mt-2 text-gray-600">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
