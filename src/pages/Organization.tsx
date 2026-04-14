import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useState, useEffect, useRef, useCallback, memo } from "react";
type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const LazyImage = memo(
  ({ src, alt, className = "", width, height }: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      if (imgRef.current?.complete) setIsLoaded(true);
    }, []);

    return (
      <div className={`relative overflow-hidden ${className}`}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    );
  }
);

LazyImage.displayName = "LazyImage";

/* =========================
   ORGANIZATION DATA
========================= */
const ORGANIZATION_DATA = {
  director: {
    title: "Institutional Director",
    description:
      "Overall strategic head of the institution providing vision, leadership, and long-term development direction for the college.",
    imageSrc: "/director/cofounder.jpeg",
  },

  leadership: [
    {
      title: "Board of Trustees",
      description: "Provides governance and policy guidance, ensuring accountability.",
    },
    {
      title: "College Principal",
      description: "Chief executive responsible for academic and operational leadership.",
    },
    {
      title: "Registrar",
      description: "Manages admissions, examinations, and academic records.",
    },
  ],

  departments: {
    academic: ["Academic Dean / Coordinator", "Animal Health and Production", "Horticulture", "Computer Applications", "Tailoring"],
    studentAffairs: ["Dean of Students", "Student Welfare & Discipline", "Student Government"],
    administration: ["Human Resources", "Office Management", "Records Support"],
    finance: "Budgeting, salaries, and financial control.",
    ict: "Systems, networking, and IT support.",
    marketing: "Student recruitment and institutional promotion.",
    support: ["Library Services", "Farm Unit", "Laboratory Technicians", "Security & Maintenance"],
  },
};

/* =========================
   MAIN PAGE
========================= */
export default function Organization() {
  return (
    <>
      <Helmet>
        <title>Organizational Structure | Pamoja Ebenezer College of Agriculture</title>
        <meta
          name="description"
          content="Official organizational structure of Pamoja Ebenezer College of Agriculture, showing leadership, governance, and academic departments."
        />
        <meta name="keywords" content="Pamoja Ebenezer College, Tanzania agriculture college, organization structure, academic leadership" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="Organizational Structure | Pamoja Ebenezer College" />
        <meta property="og:description" content="Leadership and governance structure of the college." />
        <meta property="og:image" content="https://pamojebenezercollege.ac.tz/director/cofounder.jpeg" />
        <meta property="og:url" content="https://pamojebenezercollege.ac.tz/organization" />

        <link rel="canonical" href="https://pamojebenezercollege.ac.tz/organization" />
      </Helmet>

      <main className="bg-white text-gray-900">

        {/* ================= HERO (FIXED TITLE ISSUE) ================= */}
        <section className="relative bg-gradient-to-b from-green-50 to-white border-b">
          <div className="max-w-6xl mx-auto px-6 py-20">

            <p className="text-green-700 font-semibold tracking-wide uppercase">
              Governance Structure
            </p>

            {/* BIG FIX: title visibility */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
              Organizational Structure
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Pamoja Ebenezer College of Agriculture operates under a structured governance system that ensures academic excellence, accountability, and institutional growth.
            </p>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

          {/* ================= DIRECTOR ================= */}
          <section className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-sm border p-8">

            <LazyImage
              src={ORGANIZATION_DATA.director.imageSrc}
              alt="Director"
              className="w-full h-80 rounded-2xl"
            />

            <div>
              <h2 className="text-3xl font-bold">Director</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {ORGANIZATION_DATA.director.description}
              </p>
            </div>
          </section>

          {/* ================= LEADERSHIP ================= */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Leadership & Governance</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {ORGANIZATION_DATA.leadership.map((item, i) => (
                <div key={i} className="border rounded-xl p-6 hover:shadow-md transition bg-white">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= DEPARTMENTS ================= */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Academic & Administrative Departments</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-3">Academic Department</h3>
                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                  {ORGANIZATION_DATA.departments.academic.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-3">Student Affairs</h3>
                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                  {ORGANIZATION_DATA.departments.studentAffairs.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-3">Administration</h3>
                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                  {ORGANIZATION_DATA.departments.administration.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-3">Finance</h3>
                <p className="text-gray-600">{ORGANIZATION_DATA.departments.finance}</p>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-3">ICT</h3>
                <p className="text-gray-600">{ORGANIZATION_DATA.departments.ict}</p>
              </div>

              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-3">Marketing & Admissions</h3>
                <p className="text-gray-600">{ORGANIZATION_DATA.departments.marketing}</p>
              </div>

              <div className="p-6 border rounded-xl md:col-span-2">
                <h3 className="font-bold mb-3">Support Services</h3>
                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                  {ORGANIZATION_DATA.departments.support.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>

            </div>
          </section>

          {/* ================= HIERARCHY ================= */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Institutional Hierarchy</h2>

            <div className="bg-gray-50 border rounded-xl p-8 text-center text-gray-700 font-medium">
              Director → Board → Principal → Registrar → Departments → HODs → Staff → Students → Government → Students
            </div>
          </section>

        </div>
      </main>
    </>
  );
}