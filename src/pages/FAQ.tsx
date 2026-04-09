import { useState } from "react";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

interface FaqItem {
  q_en: string;
  q_sw: string;
  a_en: string;
  a_sw: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    category: "admissions",
    q_en: "How do I apply to the college?",
    q_sw: "Ninajisajilije chuoni?",
    a_en: "You can apply online through our Admissions page, download the application form, or visit our campus in Babati to get a physical form.",
    a_sw: "Unaweza kuomba mtandaoni kupitia ukurasa wa Uandikishaji, kupakua fomu ya maombi, au kutembelea chuo Babati kupata fomu."
  },
  {
    category: "admissions",
    q_en: "What are the entry requirements?",
    q_sw: "Sifa za kujiunga ni zipi?",
    a_en: "Applicants must have Form Four (Division IV or above). Some courses also accept Standard Seven graduates, especially Sewing (Ushonaji) and Entrepreneurship courses.",
    a_sw: "Mwombaji anatakiwa awe na elimu ya Kidato cha Nne (Division IV au zaidi). Baadhi ya kozi zinakubali waliohitimu Darasa la Saba, hasa Ushonaji na Entrepreneurship."
  },
  {
    category: "admissions",
    q_en: "When does the next intake start?",
    q_sw: "Ulaji ujao unaanza lini?",
    a_en: "We have two intakes per year: January and July. Check our News & Events page for exact dates.",
    a_sw: "Tuna ulaji mara mbili kwa mwaka: Januari na Julai. Angalia ukurasa wa Habari kwa tarehe sahihi."
  },
  {
    category: "fees",
    q_en: "How much are the tuition fees?",
    q_sw: "Ada za masomo ni kiasi gani?",
    a_en: "Fees depend on the course. For 6-month courses (Computer Applications, Sewing, Horticulture), boarding is TSh 600,000 and day is TSh 300,000. For Animal Health and Production (Level I–III), boarding is TSh 1,200,000 per year and day is TSh 800,000 per year.",
    a_sw: "Ada hutegemea kozi. Kwa kozi za miezi 6 (Kompyuta, Ushonaji, Kilimo cha Bustani), ada ya bweni ni TSh 600,000 na kutwa ni TSh 300,000. Kwa kozi ya Afya ya Mifugo na Uzalishaji (Ngazi I–III), ada ya bweni ni TSh 1,200,000 kwa mwaka na kutwa ni TSh 800,000 kwa mwaka."
  },
  {
    category: "fees",
    q_en: "Are there scholarships available?",
    q_sw: "Kuna udhamini unapatikana?",
    a_en: "Yes, we offer merit-based and need-based scholarships. Contact our admissions office for more information.",
    a_sw: "Ndiyo, tunatoa udhamini kwa kuzingatia ufaulu na uhitaji. Wasiliana na ofisi ya uandikishaji kwa maelezo zaidi."
  },
  {
    category: "fees",
    q_en: "Can I pay fees in installments?",
    q_sw: "Ninaweza kulipa ada kwa awamu?",
    a_en: "Yes, we offer flexible payment plans. You can pay in installments or arrange with the finance office.",
    a_sw: "Ndiyo, tunatoa malipo kwa awamu. Unaweza kupanga na ofisi ya fedha."
  },
  {
    category: "courses",
    q_en: "What courses do you offer?",
    q_sw: "Mnatoa kozi gani?",
    a_en: "We offer four main courses: Sewing (Ushonaji), Horticulture and Entrepreneurship, Animal Health and Production (Level I–III), and Computer Applications.",
    a_sw: "Tunatoa kozi nne kuu: Ushonaji, Kilimo cha Bustani na Ujasiriamali, Afya ya Mifugo na Uzalishaji (Ngazi I–III), na Kompyuta."
  },
  {
    category: "courses",
    q_en: "Are the courses accredited?",
    q_sw: "Kozi zimeidhinishwa?",
    a_en: "Yes, all our courses are registered and accredited by NACTVET (National Council for Technical and Vocational Education and Training). REG/0999P.",
    a_sw: "Ndiyo, kozi zote zimesajiliwa na kuidhinishwa na NACTVET. REG/0999P."
  },
  {
    category: "campus",
    q_en: "Is accommodation available?",
    q_sw: "Kuna malazi?",
    a_en: "Yes, we have student dormitories on campus for both male and female students at affordable rates.",
    a_sw: "Ndiyo, tuna hosteli za wanafunzi wa kiume na wa kike kwa gharama nafuu."
  },
  {
    category: "campus",
    q_en: "Where is the college located?",
    q_sw: "Chuo kiko wapi?",
    a_en: "We are located in Babati, Manyara Region, Tanzania. P.O. Box 460, Babati.",
    a_sw: "Chuo kipo Babati, Mkoa wa Manyara, Tanzania. S.L.P 460, Babati."
  },
  {
    category: "campus",
    q_en: "What facilities are available?",
    q_sw: "Kuna vifaa gani?",
    a_en: "Our campus includes modern classrooms, a sewing workshop, computer lab, agricultural farm, library, and student hostels.",
    a_sw: "Chuo kina madarasa ya kisasa, karakana ya ushonaji, maabara ya kompyuta, shamba la kilimo, maktaba, na hosteli."
  },
];

const categories = ["all", "admissions", "fees", "courses", "campus"];

export default function FAQ() {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const q = lang === "sw" ? faq.q_sw : faq.q_en;
    const a = lang === "sw" ? faq.a_sw : faq.a_en;
    const matchesSearch =
      !search ||
      q.toLowerCase().includes(search.toLowerCase()) ||
      a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20 lg:pt-24 pb-20 lg:pb-0">
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              {t("faq.title")}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              {t("faq.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("faq.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors touch-feedback ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {t(`faq.cat.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 card-shadow">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground">
                    {lang === "sw" ? faq.q_sw : faq.q_en}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {lang === "sw" ? faq.a_sw : faq.a_en}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              {t("faq.noResults")}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}