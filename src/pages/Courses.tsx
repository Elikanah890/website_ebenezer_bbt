import { Link } from "react-router-dom";
import {
  Scissors,
  Flower2,
  Beef,
  Monitor,
  Clock,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://pamojebenezercollege.ac.tz";

const courses = [
  {
    key: "sewing",
    icon: Scissors,
    topics: ["Machine use", "Pattern making", "Fashion design", "Garment repair"],
    career: ["Self-employment", "Tailor shop", "Fashion designer"],
  },
  {
    key: "horticulture",
    icon: Flower2,
    topics: ["Vegetable & fruit production", "Modern farming tech", "Pest control", "Irrigation"],
    career: ["Farm manager", "Agribusiness", "NGO work"],
  },
  {
    key: "animal",
    icon: Beef,
    topics: ["Livestock & poultry care", "Nutrition", "Breeding", "Project management"],
    career: ["Livestock officer", "Farm owner", "Animal health assistant"],
  },
  {
    key: "computer",
    icon: Monitor,
    topics: ["Basic computer skills", "Internet & email", "Microsoft Office", "Typing"],
    career: ["Data entry", "Office assistant", "IT support"],
  },
];

export default function CoursesPage() {
  const { t } = useI18n();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vocational Courses - Pamoja Ebenezer College",
    url: `${SITE_URL}/courses`,
    itemListElement: courses.map((c, index) => ({
      "@type": "Course",
      position: index + 1,
      name: c.key,
      description: `Vocational training course in ${c.key}`,
      provider: {
        "@type": "EducationalOrganization",
        name: "Pamoja Ebenezer College of Agriculture",
        url: SITE_URL,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Vocational Courses | Pamoja Ebenezer College of Agriculture</title>

        <meta
          name="description"
          content="Explore vocational training courses at Pamoja Ebenezer College of Agriculture in Tanzania including Agriculture, Sewing, Animal Production, and Computer Applications."
        />

        <meta
          name="keywords"
          content="vocational courses Tanzania, agriculture training Babati, sewing course Tanzania, animal husbandry training, computer applications course"
        />

        <link rel="canonical" href={`${SITE_URL}/courses`} />

        {/* OpenGraph */}
        <meta property="og:title" content="Vocational Courses | Pamoja Ebenezer College" />
        <meta
          property="og:description"
          content="Explore practical vocational courses designed for real-world skills in agriculture, sewing, animal production, and ICT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/courses`} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="pt-20 lg:pt-24">

        {/* HERO */}
        <header className="gradient-hero py-16 lg:py-24">
          <div className="section-container text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
              {t("courses.title")}
            </h1>
            <p className="text-primary-foreground/70 mt-3 max-w-xl mx-auto">
              Practical vocational training designed for employment and entrepreneurship in Tanzania.
            </p>
          </div>
        </header>

        {/* COURSES LIST */}
        <section className="section-padding">
          <div className="section-container max-w-5xl mx-auto space-y-10">

            {courses.map((course, i) => (
              <ScrollReveal key={course.key} delay={i * 80}>
                <article className="bg-card rounded-xl border p-6 lg:p-8 shadow-sm">

                  {/* TITLE */}
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {t(`courses.${course.key}`)}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-muted-foreground mb-4">
                    {t(`courses.${course.key}Desc`)}
                  </p>

                  {/* META */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Duration: {t(`courses.${course.key}Duration`)}
                    </span>

                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      Eligibility: Standard 7+
                    </span>
                  </div>

                  {/* DETAILS */}
                  <div className="grid sm:grid-cols-2 gap-6">

                    <div>
                      <h3 className="font-semibold mb-2">Core Topics</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {course.topics.map((tpc) => (
                          <li key={tpc}>• {tpc}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Career Paths
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {course.career.map((c) => (
                          <li key={c}>• {c}</li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link to="/admissions">
                      <Button>
                        Apply for this Course
                      </Button>
                    </Link>
                  </div>

                </article>
              </ScrollReveal>
            ))}

          </div>
        </section>

      </main>
    </>
  );
}