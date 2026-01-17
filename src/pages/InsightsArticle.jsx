import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Schema from "@/components/Schema";
import { siteContent } from "@/lib/content";

export default function InsightsArticle() {
  const { slug } = useParams();
  const article = Object.values(siteContent.insights.articles).find(
    (a) => a.slug === slug
  );

  if (!article) return null;

  return (
    <>
      <SEO {...article.seo} canonical={`/insights/article/${slug}`} />
      <Schema type="BlogPosting" data={article} />

      <article className="pt-32 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold">{article.title}</h1>

        <div className="mt-2 text-sm text-gray-500">
          {article.author} · {article.publishedAt}
        </div>

        <div
          className="prose prose-lg mt-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </>
  );
}
