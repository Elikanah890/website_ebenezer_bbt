import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

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
    if (!form.course) {
      alert("Please select a course");
      return;
    }
    const text = `Hello, my name is ${form.name}. I am interested in the course: ${form.course}. ${form.message}`;
    const url = `https://wa.me/255614878752?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
            {t("contact.title")}
          </h1>
          <p className="text-primary-foreground/70 text-base max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* WhatsApp Form */}
            <ScrollReveal>
              <div className="space-y-5">

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Select Course
                  </label>
                  <select
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">-- Choose a course --</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div className="bg-muted rounded-xl p-6 space-y-4">

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-sm">Address</p>
                      <p className="text-sm text-muted-foreground">
                        P.O. Box 460, Babati, Manyara, Tanzania
                      </p>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-sm">Phone</p>
                      <div className="space-y-1">
                        <a href="tel:+255794820139" className="block text-sm text-primary hover:underline">
                          0794 820 139
                        </a>
                        <a href="tel:+255685748752" className="block text-sm text-primary hover:underline">
                          0685 748 752
                        </a>
                        <a href="tel:+255745273524" className="block text-sm text-primary hover:underline">
                          0745 273 524
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/255614878752"
                        target="_blank"
                        className="text-sm text-primary hover:underline"
                      >
                        0614 878 752
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-sm">
                        {t("contact.officeHours")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("contact.officeHoursValue")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-80">
                  <iframe
                    title="Pamoja Ebenezer College Location"
                    src="https://www.google.com/maps?q=Babati,+Tanzania&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  );
}