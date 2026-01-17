import { useParams } from "react-router-dom";

/* ======================================================
   SHARED BASE RENDERER
   ====================================================== */

function BasePage({ title }) {
  const { slug } = useParams();

  return (
    <main className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      {slug && (
        <p className="text-lg text-muted-foreground">
          Slug: <span className="font-mono">{slug}</span>
        </p>
      )}

      <p className="mt-6 max-w-3xl text-base">
        This page is rendering correctly. Programmatic SEO and dynamic content
        will be layered on top next.
      </p>
    </main>
  );
}

/* ======================================================
   SOLUTIONS ( /solutions/:slug )
   ====================================================== */
export function SolutionPage() {
  return <BasePage title="Solution Page" />;
}

/* ======================================================
   INDUSTRIES ( /industries/:slug )
   ====================================================== */
export function IndustryPage() {
  return <BasePage title="Industry Page" />;
}

/* ======================================================
   COMPANY ( /company/:slug )
   ====================================================== */
export function CompanyPage() {
  return <BasePage title="Company Page" />;
}

/* ======================================================
   WORK ( /work/:slug )
   ====================================================== */
export function WorkPage() {
  return <BasePage title="Work Page" />;
}

/* ======================================================
   DEFAULT EXPORT (NOT USED, SAFETY ONLY)
   ====================================================== */
export default SolutionPage;
