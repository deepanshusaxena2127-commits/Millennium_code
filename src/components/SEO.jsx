import { Helmet } from "react-helmet";
import { SITE, DEFAULT_SEO } from "@/lib/seo";

export default function SEO({
  title,
  description,
  canonical,
  openGraph = {},
}) {
  const seoTitle = title
    ? DEFAULT_SEO.titleTemplate.replace("%s", title)
    : DEFAULT_SEO.defaultTitle;

  const seoDescription = description || DEFAULT_SEO.description;
  const seoCanonical = canonical || DEFAULT_SEO.canonical;

  const og = {
    ...DEFAULT_SEO.openGraph,
    ...openGraph,
    title: seoTitle,
    description: seoDescription,
    url: seoCanonical,
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoCanonical} />

      <meta property="og:type" content={og.type} />
      <meta property="og:site_name" content={og.site_name} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:locale" content={og.locale} />
      <meta property="og:image" content={og.images[0].url} />

      <meta name="twitter:card" content={DEFAULT_SEO.twitter.cardType} />
      {SITE.twitterHandle && (
        <meta name="twitter:site" content={SITE.twitterHandle} />
      )}
    </Helmet>
  );
}
