import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";

const siteUrl = "https://natiocasino-germany.vercel.app";

export type TechnicalSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export function TechnicalPage({
  label,
  path,
  intro,
  sections,
}: {
  label: string;
  path: string;
  intro?: string;
  sections: readonly TechnicalSection[];
}) {
  return (
    <div className="site-shell">
      <Header />
      <main className="technical-page-main">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: label, item: `${siteUrl}${path}` },
            ],
          }}
        />
        <article className="technical-page">
          <nav className="technical-page__breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Startseite</Link></li>
              <li><span aria-current="page">{label}</span></li>
            </ol>
          </nav>
          <h1>{label}</h1>
          {intro ? <p className="technical-page__intro">{intro}</p> : null}
          <div className="technical-page__sections">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
