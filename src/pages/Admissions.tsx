import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const steps = [
  { en: "Get application form (online or download PDF)", sw: "Pata fomu ya maombi (mtandaoni au pakua PDF)" },
  { en: "Fill with personal details and course choice", sw: "Jaza na taarifa binafsi na chaguo la kozi" },
  { en: "Attach academic certificates", sw: "Ambatisha vyeti vya masomo" },
  { en: "Submit to college office or online", sw: "Wasilisha kwenye ofisi ya chuo au mtandaoni" },
  { en: "Wait for confirmation", sw: "Subiri uthibitisho" },
];

const fees = [
  {
    course: "Computer Applications",
    duration: "6 months",
    boarding: "TSh 600,000",
    day: "TSh 300,000",
  },
  {
    course: "Sewing (Ushonaji)",
    duration: "6 months",
    boarding: "TSh 600,000",
    day: "TSh 300,000",
  },
  {
    course: "Horticulture and Entrepreneurship",
    duration: "6 months",
    boarding: "TSh 600,000",
    day: "TSh 300,000",
  },
  {
    course: "Animal Health and Production (Level I–III)",
    duration: "3 years",
    boarding: "TSh 1,200,000 per year",
    day: "TSh 800,000 per year",
  },
];

export default function AdmissionsPage() {
  const { t, lang } = useI18n();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Pamoja Ebenezer College of Agriculture",
    "url": "https://pamojebenezercollege.ac.tz",
    "description":
      "Admission page for Pamoja Ebenezer College of Agriculture showing application steps and fee structure for vocational and agricultural training programs.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TZ",
      "addressLocality": "Babati",
      "addressRegion": "Manyara"
    }
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Admissions | Apply to Pamoja Ebenezer College of Agriculture</title>

        <meta
          name="description"
          content="Apply to Pamoja Ebenezer College of Agriculture in Tanzania. View admission steps, requirements, and fee structure for all courses."
        />

        <meta
          name="keywords"
          content="college admissions Tanzania, apply agriculture college Babati, vocational training Tanzania, NACTVET admission"
        />

        <meta name="author" content="Pamoja Ebenezer College of Agriculture" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://pamojebenezercollege.ac.tz/admissions" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Admissions | Pamoja Ebenezer College" />
        <meta
          property="og:description"
          content="Apply now to Pamoja Ebenezer College of Agriculture. View admission steps and fee structure."
        />
        <meta property="og:url" content="https://pamojebenezercollege.ac.tz/admissions" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="pt-20 lg:pt-24">

        {/* HERO */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="section-container text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
              Admissions & Applications
            </h1>

            <p className="text-primary-foreground/70 text-base max-w-xl mx-auto">
              Start your academic journey at Pamoja Ebenezer College of Agriculture
            </p>
          </div>
        </section>

        {/* STEPS */}
        <section className="section-padding">
          <div className="section-container max-w-3xl mx-auto">

            <ScrollReveal>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-8">
                {lang === "en" ? "Application Process" : "Hatua za Maombi"}
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-4 bg-card rounded-xl p-5 card-shadow">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <p className="font-medium text-foreground pt-1">
                      {lang === "en" ? step.en : step.sw}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* FEES */}
        <section className="section-padding bg-muted">
          <div className="section-container max-w-4xl mx-auto">

            <ScrollReveal>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-8">
                {lang === "en" ? "Fee Structure" : "Muundo wa Ada"}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-card rounded-xl overflow-hidden card-shadow">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted">
                        <th className="p-4 text-left">Course</th>
                        <th className="p-4 text-left">Duration</th>
                        <th className="p-4 text-left">Boarding</th>
                        <th className="p-4 text-left">Day</th>
                      </tr>
                    </thead>

                    <tbody>
                      {fees.map((fee) => (
                        <tr key={fee.course} className="border-b last:border-0">
                          <td className="p-4 font-medium">{fee.course}</td>
                          <td className="p-4 text-muted-foreground">{fee.duration}</td>
                          <td className="p-4 text-primary font-semibold">{fee.boarding}</td>
                          <td className="p-4 text-secondary font-semibold">{fee.day}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container text-center max-w-2xl mx-auto">

            <ScrollReveal>
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                {lang === "en" ? "Begin Your Application Today" : "Anza Maombi Leo"}
              </h2>

              <p className="text-muted-foreground mb-8">
                Contact the college or apply via WhatsApp for faster assistance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg">{t("hero.contact")}</Button>
                </Link>

                <a
                  href="https://wa.me/255794820139"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg">
                    <FileText className="w-4 h-4" />
                    WhatsApp Application
                  </Button>
                </a>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>
    </>
  );
}