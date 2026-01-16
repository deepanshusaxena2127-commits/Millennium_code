import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/lib/content';
import { getPageImage } from '@/components/utilities/ImageHelper';

const HeroSection = ({ title, subtitle, type, slug }) => (
  <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
    </div>
    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-block bg-secondary/10 backdrop-blur-sm border border-border rounded-full px-4 py-1 text-sm font-semibold mb-6 text-secondary-foreground">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{title}</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-lg">{subtitle}</p>
        <div className="flex gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-95">
              Schedule a Discovery Call
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden shadow-lg border border-border bg-card"
      >
        <div className="aspect-video relative">
          {getPageImage(slug, type)}
        </div>
      </motion.div>
    </div>
  </section>
);

export const SolutionPage = () => {
  const { slug } = useParams();
  const data = siteContent.solutions[slug];

  if (!data) return <Navigate to="/solutions" replace />;

  return (
    <>
      <Helmet>
        <title>{data.title} | MillenniumAI Solutions</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/solutions/${slug}`} />
      </Helmet>
      <HeroSection title={data.title} subtitle={data.description} type="solutions" slug={slug} />
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive {data.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{data.content}</p>
            <div className="space-y-4">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Us?</h3>
            <ul className="space-y-4 text-foreground">
              <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-primary"/>Expert Human-in-the-Loop workflows</li>
              <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-primary"/>Enterprise-grade security (ISO 27001)</li>
              <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-primary"/>Scalable workforce of 1000+ annotators</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export const IndustryPage = () => {
  const { slug } = useParams();
  const data = siteContent.industries[slug];

  if (!data) return <Navigate to="/industries" replace />;

  return (
    <>
      <Helmet>
        <title>{data.title} AI Solutions | MillenniumAI</title>
        <meta name="description" content={`AI solutions for the ${data.title} industry. ${data.challenge}`} />
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/industries/${slug}`} />
      </Helmet>
      <HeroSection title={`${data.title} AI Solutions`} subtitle={`Transforming ${data.title} with precision data.`} type="industries" slug={slug} />
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">The Challenge</h3>
              <p className="text-muted-foreground">{data.challenge}</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Solution</h3>
              <p className="text-muted-foreground">{data.solution}</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary"/>
                Business Impact
              </h3>
              <p className="text-foreground font-medium text-lg">{data.impact}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CompanyPage = () => {
  const { slug } = useParams();
  const data = siteContent.company[slug];

  if (!data) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{data.title} | MillenniumAI</title>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/company/${slug}`} />
      </Helmet>
      <HeroSection title={data.title} subtitle="Building the future of AI together." type="company" slug={slug} />
      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xl text-muted-foreground leading-relaxed">{data.content}</p>
      </section>
    </>
  );
};

export const InsightPage = () => {
  const { slug } = useParams();
  const data = siteContent.insights[slug];

  if (!data) return <Navigate to="/insights" replace />;

  return (
    <>
      <Helmet>
        <title>{data.title} | MillenniumAI Insights</title>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/insights/${slug}`} />
      </Helmet>
      <HeroSection title={data.title} subtitle="Expert perspectives on the evolving AI landscape." type="insights" slug={slug} />
      <article className="py-20 max-w-3xl mx-auto px-6 prose prose-lg prose-blue">
        <p className="text-muted-foreground">{data.content}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <blockquote>
          &quot;Quality data is the fuel that powers the AI engine. Without it, even the most sophisticated models will fail.&quot;
        </blockquote>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>
    </>
  );
};

export const WorkPage = () => {
  const { slug } = useParams();
  const data = siteContent.work[slug];

  if (!data) return <Navigate to="/work" replace />;

  return (
    <>
      <Helmet>
        <title>{data.title} | MillenniumAI Case Study</title>
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/work/${slug}`} />
      </Helmet>
      <HeroSection title={data.title} subtitle="Delivering results at scale." type="work" slug={slug} />
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-sm mb-4">Case Study</div>
          <h2 className="text-3xl font-bold text-foreground mb-6">{data.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{data.content}</p>
          <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">99.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">3 Months</div>
              <div className="text-sm text-muted-foreground">Project Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">10M+</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
