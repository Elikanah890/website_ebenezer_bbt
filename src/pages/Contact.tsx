import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Helmet } from "react-helmet-async";

const courses = [
  "Computer Applications",
  "Sewing (Ushonaji)",
  "Animal Health and Production (Level I–III)",
  "Horticulture and Entrepreneurship",
];

export default function ContactPage() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", message: "", course: "" });

  const handleWhatsApp = () => {
    if (!form.course) return;

    const text = `Hello, my name is ${form.name}. I am interested in: ${form.course}. ${form.message}`;
    const url = `https://wa.me/255614878752?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Pamoja Ebenezer College of Agriculture",
    "url": "https://pamojebenezercollege.ac.tz/contact",
    "description":
      "Contact Pamoja Ebenezer College for admissions, vocational training applications, and general inquiries in Babati, Tanzania.",
    "mainEntity": {
      "@type": "CollegeOrUniversity",
      "name": "Pamoja Ebenezer College of Agriculture"
    }
  };

  const contactPoint = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Pamoja Ebenezer College of Agriculture",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+255794820139",
        "contactType": "Admissions Office",
        "areaServed": "TZ"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Admissions | Pamoja Ebenezer College of Agriculture Tanzania</title>

        <meta
          name="description"
          content="Contact Pamoja Ebenezer College of Agriculture in Babati, Tanzania. Apply via WhatsApp, phone, or visit campus for vocational training programs."
        />

        <meta
          name="keywords"
          content="contact college Tanzania, Babati agriculture college, apply vocational training Tanzania, NACTVET contact"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://pamojebenezercollege.ac.tz/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Pamoja Ebenezer College" />
        <meta
          property="og:description"
          content="Get in touch with Pamoja Ebenezer College for admissions and training programs in Tanzania."
        />
        <meta property="og:url" content="https://pamojebenezercollege.ac.tz/contact" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(contactPoint)}
        </script>
      </Helmet>

      <main className="pt-20 lg:pt-24">

        {/* HERO */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="section-container text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
              Contact Admissions Office
            </h1>

            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Reach Pamoja Ebenezer College for applications, admissions, and academic inquiries.
            </p>
          </div>
        </section>

        {/* MAIN */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

              {/* FORM */}
              <ScrollReveal>
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm mb-2 font-medium">Full Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 font-medium">Course</label>
                    <select
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className="w-full border rounded-lg px-4 py-3 text-sm"
                    >
                      <option value="">Select course</option>
                      {courses.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 font-medium">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full border rounded-lg px-4 py-3 text-sm"
                    />
                  </div>

                  <Button onClick={handleWhatsApp} className="w-full">
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </Button>

                </div>
              </ScrollReveal>

              {/* CONTACT INFO */}
              <ScrollReveal delay={100}>
                <div className="space-y-6 bg-muted p-6 rounded-xl">

                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-sm text-muted-foreground">
                        P.O. Box 460, Babati, Manyara, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm">+255 794 820 139</p>
                      <p className="text-sm">+255 685 748 752</p>
                      <p className="text-sm">+255 745 273 524</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 08:00 - 16:00
                      </p>
                    </div>
                  </div>

                  {/* MAP */}
                  <div className="rounded-lg overflow-hidden h-64 border">
                    <iframe
                      title="College Location"
                      src="https://www.google.com/maps?q=Babati,+Tanzania&output=embed"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>

                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}