import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "@/components/ScrollReveal";
import { X } from "lucide-react";

const categories = ["All", "Campus", "Classroom", "Farm", "Workshop", "Events", "Graduation"];

const placeholderImages = [
  // Campus
  { src: "/campus/p1.jpeg", category: "Campus", caption: "Our beautiful campus" },
  { src: "/campus/p2.jpeg", category: "Campus", caption: "Campus environment" },
  { src: "/campus/p3.jpeg", category: "Campus", caption: "College buildings" },
  { src: "/campus/p4.jpeg", category: "Campus", caption: "Campus view" },
  { src: "/campus/p5.jpeg", category: "Campus", caption: "Learning environment" },
  { src: "/campus/p6.jpeg", category: "Campus", caption: "Outdoor spaces" },

  // Classroom
  { src: "/classroom/p1.jpeg", category: "Classroom", caption: "Interactive learning sessions" },
  { src: "/classroom/p2.jpeg", category: "Classroom", caption: "Students in class" },
  { src: "/classroom/p3.jpeg", category: "Classroom", caption: "Classroom activities" },
  { src: "/classroom/p4.jpeg", category: "Classroom", caption: "Learning environment" },
  { src: "/classroom/p5.jpeg", category: "Classroom", caption: "Computer training" },
  { src: "/classroom/p6.jpeg", category: "Classroom", caption: "Student participation" },

  // Workshop
  { src: "/workshop/p1.jpeg", category: "Workshop", caption: "Sewing workshop" },
  { src: "/workshop/p2.jpeg", category: "Workshop", caption: "Practical training" },
  { src: "/workshop/p3.jpeg", category: "Workshop", caption: "Hands-on skills" },
  { src: "/workshop/p4.jpeg", category: "Workshop", caption: "Workshop activities" },
  { src: "/workshop/p5.jpeg", category: "Workshop", caption: "Student practice" },

  // Events
  { src: "/events/p1.jpeg", category: "Events", caption: "College event" },
  { src: "/events/p2.jpeg", category: "Events", caption: "Student gathering" },
  { src: "/events/p3.jpeg", category: "Events", caption: "Community engagement" },
  { src: "/events/p4.jpeg", category: "Events", caption: "Special event" },

  // Graduation
  { src: "/graduation/p1.jpeg", category: "Graduation", caption: "Graduation ceremony" },
  { src: "/graduation/p2.jpeg", category: "Graduation", caption: "Proud graduates" },
];

export default function GalleryPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === filter);

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
            {t("nav.gallery")}
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="section-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors touch-feedback ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.src}-${filter}`} delay={i * 50}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 touch-feedback break-inside-avoid"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-card">
                    <p className="text-sm text-muted-foreground">{img.caption}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 touch-feedback"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.caption}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}