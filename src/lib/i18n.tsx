import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Language = "en" | "sw";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

const en: Record<string, string> = {
  // Nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.courses": "Courses",
  "nav.admissions": "Admissions",
  "nav.studentLife": "Student Life",
  "nav.impact": "Impact",
  "nav.news": "News",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.applyNow": "Apply Now",
  "nav.events": "Events",
  "nav.support": "Support Us",

  // Hero
  "hero.tagline": "Practical Education for a Better Life",
  "hero.subtitle": "NACTVET Registered (REG/0999P) — Babati, Manyara, Tanzania",
  "hero.description": "Empowering young Tanzanians through hands-on vocational training in Agriculture, Sewing, Animal Husbandry, and Computer Studies.",
  "hero.apply": "Apply Now",
  "hero.contact": "Contact Us",
// Courses
"courses.title": "Our Programs",
"courses.subtitle": "Discover our NACTVET-accredited vocational courses designed for practical skills and real-world careers.",

"courses.sewing": "Sewing (Ushonaji)",
"courses.sewingDesc": "Master garment design, pattern making, and machine operation. Build your path to fashion entrepreneurship.",
"courses.sewingDuration": "6 months",

"courses.horticulture": "Horticulture and Entrepreneurship",
"courses.horticultureDesc": "Learn modern vegetable & fruit production, pest control, and irrigation techniques for sustainable farming.",
"courses.horticultureDuration": "6 months",

"courses.computer": "Computer Applications",
"courses.computerDesc": "Develop essential computer skills including MS Office, internet, and data entry for the digital economy.",
"courses.computerDuration": "6 months",

"courses.animal": "Animal Health and Production (Level I–III)",
"courses.animalDesc": "Gain expertise in livestock care, nutrition, breeding, and poultry management for agribusiness success.",
"courses.animalDuration": "3 years",

"courses.eligibility": "Eligibility",
"courses.std7": "Standard 7 or above",

"courses.learnMore": "Learn More",
"courses.viewAll": "View All Courses",
  // Stats
  "stats.graduates": "Graduates",
  "stats.courses": "Courses Offered",
  "stats.years": "Years of Excellence",
  "stats.placement": "Job Placement Rate",

  // Why Choose Us
  "why.title": "Why Choose Us",
  "why.subtitle": "What sets Pamoja Ebenezer apart from other institutions.",
  "why.handson": "Hands-On Training",
  "why.handsonDesc": "Learn by doing — our curriculum emphasizes practical skills with real farms, workshops, and computer labs.",
  "why.teachers": "Experienced Faculty",
  "why.teachersDesc": "Our teachers bring years of industry experience and a passion for student success.",
  "why.opportunities": "Career Opportunities",
  "why.opportunitiesDesc": "Strong partnerships with employers and NGOs ensure our graduates find meaningful work.",
  "why.environment": "Great Environment",
  "why.environmentDesc": "A safe, supportive campus in beautiful Babati with modern facilities and a vibrant community.",

  // Footer
  "footer.quickLinks": "Quick Links",
  "footer.contact": "Contact Us",
  "footer.followUs": "Follow Us",
  "footer.rights": "All rights reserved.",
  "footer.tagline": "Practical Education for a Better Life",
  "footer.address": "P.O. Box 460, Babati, Manyara, Tanzania",

  // Contact
  "contact.title": "Contact Us",
  "contact.subtitle": "We'd love to hear from you. Reach out via any of the channels below.",
  "contact.name": "Your Name",
  "contact.email": "Email Address",
  "contact.message": "Your Message",
  "contact.send": "Send Message",
  "contact.getDirections": "Get Directions",
  "contact.officeHours": "Office Hours",
  "contact.officeHoursValue": "Monday – Friday, 8:00 AM – 4:00 PM",
  "contact.responseTime": "We typically respond within 24 hours.",

  // About
  "about.title": "About Our College",
  "about.historyTitle": "Our History & Legacy",
  "about.history": "Pamoja Ebenezer College of Agriculture was established in 2009 with a clear mission to empower youth through practical and skills-based vocational education. The college was founded to provide meaningful training opportunities for young people who have completed primary and secondary education, equipping them with relevant knowledge and hands-on skills in agriculture and entrepreneurship. Situated in Babati, Manyara, the institution has steadily grown from a modest training centre into a reputable and fully recognized college under NACTVET (REG/0999P). Over the years, it has maintained a strong commitment to academic excellence, innovation, and community development.",
"about.history2": "A major milestone in the college’s history was the first graduation ceremony held in 2012, marking the beginning of producing competent graduates ready to contribute to the agricultural sector and the wider economy. The name Pamoja Ebenezer embodies the core values of unity, cooperation, and faith. It reflects the institution’s belief in working together and relying on divine guidance to build a better and more sustainable future for all students.",
  "about.visionTitle": "Our Vision (Dira)",
  "about.vision": "To be a leading vocational training institution in Tanzania, producing skilled and self-reliant graduates who contribute positively to their communities and the nation.",
  "about.missionTitle": "Our Mission (Dhima)",
  "about.mission": "To provide quality, affordable, and practical vocational education that equips students with the skills, knowledge, and values needed for sustainable livelihoods.",
  "about.valuesTitle": "Core Values",
  "about.value1": "Excellence in Education",
  "about.value2": "Integrity & Transparency",
  "about.value3": "Community Service",
  "about.value4": "Innovation & Creativity",
  "about.value5": "Unity & Teamwork",
  "about.facilitiesTitle": "Our Facilities",
  "about.facilities": "Our campus features modern classrooms, a fully equipped sewing workshop, computer laboratory, agricultural demonstration farm, library, and student dormitories.",

  // Student Life
  "studentLife.title": "Student Life",
  "studentLife.subtitle": "Life at Pamoja Ebenezer goes beyond the classroom. Discover clubs, sports, and a vibrant campus community.",
  "studentLife.clubsTitle": "Clubs & Activities",
  "studentLife.clubsSubtitle": "Join a club and develop new skills while making lifelong friends.",
  "studentLife.club.farming": "Farming Club",
  "studentLife.club.farmingDesc": "Practice modern farming techniques, grow crops, and learn sustainable agriculture hands-on.",
  "studentLife.club.fashion": "Fashion & Sewing Club",
  "studentLife.club.fashionDesc": "Design and create garments, participate in fashion shows, and explore creative textile arts.",
  "studentLife.club.tech": "Tech & Innovation Club",
  "studentLife.club.techDesc": "Explore technology, learn coding basics, and work on innovative digital projects.",
  "studentLife.club.sports": "Sports & Athletics",
  "studentLife.club.sportsDesc": "Football, netball, athletics, and inter-college competitions to keep you active and healthy.",
  "studentLife.club.music": "Music & Culture Club",
  "studentLife.club.musicDesc": "Express yourself through music, dance, and cultural performances at college events.",
  "studentLife.club.community": "Community Service Club",
  "studentLife.club.communityDesc": "Give back to Babati through volunteer projects, clean-ups, and outreach programs.",
  "studentLife.scheduleTitle": "A Day in the Life",
  "studentLife.scheduleSubtitle": "See what a typical day looks like for our students.",
  "studentLife.supportTitle": "Student Support Services",
  "studentLife.support.counseling": "Counseling Services",
  "studentLife.support.counselingDesc": "Professional counseling for academic, personal, and emotional support.",
  "studentLife.support.career": "Career Guidance",
  "studentLife.support.careerDesc": "Job placement assistance, CV writing workshops, and interview preparation.",
  "studentLife.support.academic": "Academic Support",
  "studentLife.support.academicDesc": "Tutoring, study groups, and extra help sessions for all courses.",

  // Impact
  "impact.title": "Our Impact",
  "impact.subtitle": "See how our graduates are transforming their communities and building successful careers.",
  "impact.alumniTitle": "Alumni Success Stories",
  "impact.alumniSubtitle": "Real stories from real graduates making a difference.",
  "impact.communityTitle": "Community Projects",
  "impact.communitySubtitle": "We believe in giving back to the community that supports us.",
  "impact.project.freeTraining": "Free Sewing Training",
  "impact.project.freeTrainingDesc": "Providing free sewing classes to women in Babati to empower them economically.",
  "impact.project.farmDemo": "Farm Demonstrations",
  "impact.project.farmDemoDesc": "Open farm days where local farmers learn modern techniques from our students.",
  "impact.project.computerLit": "Computer Literacy Drive",
  "impact.project.computerLitDesc": "Teaching basic computer skills to community members and local school students.",
  "impact.project.youthEmp": "Youth Empowerment",
  "impact.project.youthEmpDesc": "Mentorship programs connecting graduates with current students for guidance.",

  // News & Events
  "news.title": "News & Events",
  "news.subtitle": "Stay updated with the latest happenings at Pamoja Ebenezer College.",
  "news.upcoming": "Upcoming Events",
  "news.past": "Past Events",
  "news.announcements": "Announcements",

  // FAQ
  "faq.title": "Frequently Asked Questions",
  "faq.subtitle": "Find answers to common questions about admissions, courses, fees, and campus life.",
  "faq.searchPlaceholder": "Search questions...",
  "faq.cat.all": "All",
  "faq.cat.admissions": "Admissions",
  "faq.cat.fees": "Fees",
  "faq.cat.courses": "Courses",
  "faq.cat.campus": "Campus",
  "faq.noResults": "No matching questions found. Try a different search term.",
};

const sw: Record<string, string> = {
  // Nav
  "nav.home": "Nyumbani",
  "nav.about": "Kuhusu",
  "nav.courses": "Kozi",
  "nav.admissions": "Uandikishaji",
  "nav.studentLife": "Maisha",
  "nav.impact": "Athari",
  "nav.news": "Habari",
  "nav.gallery": "Picha",
  "nav.contact": "Wasiliana",
  "nav.faq": "Maswali",
  "nav.applyNow": "Jisajili Sasa",
  "nav.events": "Matukio",
  "nav.support": "Tusaidie",

  // Hero
  "hero.tagline": "Elimu ya Vitendo kwa Maisha Bora",
  "hero.subtitle": "Imesajiliwa na NACTVET (REG/0999P) — Babati, Manyara, Tanzania",
  "hero.description": "Kuwawezesha vijana wa Tanzania kupitia mafunzo ya vitendo katika Kilimo, Ushonaji, Ufugaji, na Kompyuta.",
  "hero.apply": "Jisajili Sasa",
  "hero.contact": "Wasiliana Nasi",
// Courses
"courses.title": "Programu Zetu",
"courses.subtitle": "Gundua kozi zetu zilizoidhinishwa na NACTVET zilizobuniwa kwa ujuzi wa vitendo na kazi halisi.",

"courses.sewing": "Ushonaji",
"courses.sewingDesc": "Jifunze kubuni nguo, kutengeneza mifumo (pattern), na kutumia mashine za kushona. Jenga njia yako kuelekea ujasiriamali wa mitindo.",
"courses.sewingDuration": "Miezi 6",

"courses.horticulture": "Kilimo cha Bustani na Ujasiriamali",
"courses.horticultureDesc": "Jifunze uzalishaji wa kisasa wa mboga na matunda, udhibiti wa wadudu, na mbinu za umwagiliaji kwa kilimo endelevu.",
"courses.horticultureDuration": "Miezi 6",

"courses.computer": "Matumizi ya Kompyuta",
"courses.computerDesc": "Endeleza ujuzi muhimu wa kompyuta ikiwa ni pamoja na MS Office, matumizi ya intaneti, na uingizaji wa data kwa uchumi wa kidijitali.",
"courses.computerDuration": "Miezi 6",

"courses.animal": "Afya ya Wanyama na Uzalishaji (Ngazi ya I–III)",
"courses.animalDesc": "Pata ujuzi wa utunzaji wa mifugo, lishe, uzalishaji, na usimamizi wa kuku kwa mafanikio ya biashara ya kilimo.",
"courses.animalDuration": "Miaka 3",

"courses.duration": "Muda",
"courses.eligibility": "Sifa",
"courses.std7": "Darasa la 7 au zaidi",

"courses.learnMore": "Soma Zaidi",
"courses.viewAll": "Angalia Kozi Zote",
  // Stats
  "stats.graduates": "Wahitimu",
  "stats.courses": "Kozi Zinazoatolewa",
  "stats.years": "Miaka ya Ubora",
  "stats.placement": "Kiwango cha Ajira",

  // Why Choose Us
  "why.title": "Kwa Nini Utuchague",
  "why.subtitle": "Kinachotutofautisha na taasisi nyingine.",
  "why.handson": "Mafunzo ya Vitendo",
  "why.handsonDesc": "Jifunze kwa kufanya — mtaala wetu unasisitiza ujuzi wa vitendo na mashamba halisi na maabara.",
  "why.teachers": "Walimu Wenye Uzoefu",
  "why.teachersDesc": "Walimu wetu wana uzoefu wa miaka mingi na shauku ya mafanikio ya wanafunzi.",
  "why.opportunities": "Fursa za Kazi",
  "why.opportunitiesDesc": "Ushirikiano na waajiri na mashirika yanahakikisha wahitimu wetu wanapata kazi.",
  "why.environment": "Mazingira Bora",
  "why.environmentDesc": "Chuo salama na cha kisasa katika Babati yenye mazingira mazuri na jumuiya hai.",

  // Footer
  "footer.quickLinks": "Viungo vya Haraka",
  "footer.contact": "Wasiliana Nasi",
  "footer.followUs": "Tufuate",
  "footer.rights": "Haki zote zimehifadhiwa.",
  "footer.tagline": "Elimu ya Vitendo kwa Maisha Bora",
  "footer.address": "S.L.P 460, Babati, Manyara, Tanzania",

  // Contact
  "contact.title": "Wasiliana Nasi",
  "contact.subtitle": "Tungependa kusikia kutoka kwako. Wasiliana nasi kupitia njia yoyote hapa chini.",
  "contact.name": "Jina Lako",
  "contact.email": "Barua Pepe",
  "contact.message": "Ujumbe Wako",
  "contact.send": "Tuma Ujumbe",
  "contact.getDirections": "Pata Maelekezo",
  "contact.officeHours": "Saa za Ofisi",
  "contact.officeHoursValue": "Jumatatu – Ijumaa, 8:00 AM – 4:00 PM",
  "contact.responseTime": "Kwa kawaida tunajibu ndani ya masaa 24.",

  // About
"about.title": "Kuhusu Chuo Chetu",
"about.historyTitle": "Historia na Urithi Wetu",
"about.history": "Chuo cha Kilimo cha Pamoja Ebenezer kilianzishwa mwaka 2009 kwa lengo la kuwainua vijana kupitia elimu ya vitendo na yenye msingi wa ujuzi. Chuo hiki kilianzishwa kutoa fursa za mafunzo zinazoleta maana kwa vijana waliohitimu shule za msingi na sekondari, wakiwa na ujuzi unaohitajika pamoja na maarifa ya vitendo katika kilimo na ujasiriamali. Kilichopo Babati, Manyara, chuo hiki kimekua kutoka kituo kidogo cha mafunzo hadi kuwa chuo kinachotambuliwa kikamilifu na NACTVET (REG/0999P). Kwa miaka yote, kimeendeleza ahadi yake ya ubora wa kitaaluma, ubunifu, na maendeleo ya jamii.",
"about.history2": "Kipindi kikubwa katika historia ya chuo hiki kilikuwa sherehe ya kwanza ya kuhitimu iliyofanyika mwaka 2012, ikiacha msingi wa kuzalisha wahitimu wenye ujuzi tayari kuchangia sekta ya kilimo na uchumi kwa ujumla. Jina Pamoja Ebenezer linaakisi maadili ya msingi ya umoja, ushirikiano, na imani. Linaonyesha imani ya taasisi hii katika kufanya kazi pamoja na kutegemea mwongozo wa Mungu ili kujenga mustakabali bora na endelevu kwa kila mwanafunzi.",
"about.visionTitle": "Dira Yetu",
"about.vision": "Kuwa taasisi inayoongoza ya mafunzo ya ufundi nchini Tanzania, inayozalisha wahitimu wenye ujuzi na wanaojitegemea wanaochangia vyema jamii na taifa.",
"about.missionTitle": "Dhima Yetu",
"about.mission": "Kutoa elimu ya ufundi yenye ubora, ya bei nafuu, na ya vitendo inayowapa wanafunzi ujuzi, maarifa, na maadili yanayohitajika kwa maisha endelevu.",
"about.valuesTitle": "Maadili Yetu",
"about.value1": "Ubora katika Elimu",
"about.value2": "Uadilifu na Uwazi",
"about.value3": "Huduma kwa Jamii",
"about.value4": "Ubunifu na Ugunduzi",
"about.value5": "Umoja na Timu",
"about.facilitiesTitle": "Vifaa Vyetu",
"about.facilities": "Chuo chetu kina madarasa ya kisasa, karakana ya ushonaji, maabara ya kompyuta, shamba la kilimo la maonyesho, maktaba, na hosteli za wanafunzi.",
  
// Student Life
  "studentLife.title": "Maisha ya Wanafunzi",
  "studentLife.subtitle": "Maisha katika Pamoja Ebenezer yanazidi madarasa. Gundua vilabu, michezo, na jumuiya hai ya chuo.",
  "studentLife.clubsTitle": "Vilabu na Shughuli",
  "studentLife.clubsSubtitle": "Jiunge na klabu na kuendeleza ujuzi mpya huku ukiunda urafiki wa kudumu.",
  "studentLife.club.farming": "Klabu ya Kilimo",
  "studentLife.club.farmingDesc": "Fanya mazoezi ya mbinu za kilimo cha kisasa, panda mazao, na jifunze kilimo endelevu.",
  "studentLife.club.fashion": "Klabu ya Mitindo na Ushonaji",
  "studentLife.club.fashionDesc": "Buni na tengeneza nguo, shiriki maonyesho ya mitindo, na chunguza sanaa za nguo.",
  "studentLife.club.tech": "Klabu ya Teknolojia",
  "studentLife.club.techDesc": "Chunguza teknolojia, jifunze misingi ya programu, na fanya kazi kwenye miradi ya kidijitali.",
  "studentLife.club.sports": "Michezo na Riadha",
  "studentLife.club.sportsDesc": "Mpira wa miguu, netiboli, riadha, na mashindano ya vyuo ili kukuweka hai na mzima.",
  "studentLife.club.music": "Klabu ya Muziki na Utamaduni",
  "studentLife.club.musicDesc": "Jieleze kupitia muziki, ngoma, na maonyesho ya kitamaduni kwenye matukio ya chuo.",
  "studentLife.club.community": "Klabu ya Huduma kwa Jamii",
  "studentLife.club.communityDesc": "Rudisha kwa Babati kupitia miradi ya kujitolea, usafi, na programu za kufikia jamii.",
  "studentLife.scheduleTitle": "Siku katika Maisha",
  "studentLife.scheduleSubtitle": "Angalia siku ya kawaida inavyokuwa kwa wanafunzi wetu.",
  "studentLife.supportTitle": "Huduma za Msaada kwa Wanafunzi",
  "studentLife.support.counseling": "Huduma za Ushauri",
  "studentLife.support.counselingDesc": "Ushauri wa kitaalamu kwa msaada wa kitaaluma, kibinafsi, na kihisia.",
  "studentLife.support.career": "Mwongozo wa Kazi",
  "studentLife.support.careerDesc": "Msaada wa kupata kazi, warsha za kuandika CV, na maandalizi ya mahojiano.",
  "studentLife.support.academic": "Msaada wa Kitaaluma",
  "studentLife.support.academicDesc": "Ufundishaji, vikundi vya kusoma, na vipindi vya ziada kwa kozi zote.",

  // Impact
  "impact.title": "Athari Yetu",
  "impact.subtitle": "Angalia jinsi wahitimu wetu wanavyobadilisha jamii zao na kujenga kazi zenye mafanikio.",
  "impact.alumniTitle": "Hadithi za Mafanikio ya Wahitimu",
  "impact.alumniSubtitle": "Hadithi halisi kutoka kwa wahitimu halisi wanaofanya tofauti.",
  "impact.communityTitle": "Miradi ya Jamii",
  "impact.communitySubtitle": "Tunaamini katika kurudisha kwa jamii inayotusaidia.",
  "impact.project.freeTraining": "Mafunzo Bure ya Ushonaji",
  "impact.project.freeTrainingDesc": "Kutoa madarasa ya ushonaji bure kwa wanawake wa Babati ili kuwawezesha kiuchumi.",
  "impact.project.farmDemo": "Maonyesho ya Shamba",
  "impact.project.farmDemoDesc": "Siku za shamba wazi ambapo wakulima wa eneo hilo wanajifunza mbinu za kisasa.",
  "impact.project.computerLit": "Ujuzi wa Kompyuta",
  "impact.project.computerLitDesc": "Kufundisha ujuzi wa msingi wa kompyuta kwa wanajamii na wanafunzi wa shule.",
  "impact.project.youthEmp": "Uwezeshaji wa Vijana",
  "impact.project.youthEmpDesc": "Programu za ushauri zinazounganisha wahitimu na wanafunzi wa sasa kwa mwongozo.",

  // News & Events
  "news.title": "Habari na Matukio",
  "news.subtitle": "Endelea kusasishwa na matukio ya hivi karibuni katika Chuo cha Pamoja Ebenezer.",
  "news.upcoming": "Matukio Yajayo",
  "news.past": "Matukio ya Zamani",
  "news.announcements": "Tangazo",

  // FAQ
  "faq.title": "Maswali Yanayoulizwa Mara kwa Mara",
  "faq.subtitle": "Pata majibu ya maswali ya kawaida kuhusu uandikishaji, kozi, ada, na maisha ya chuo.",
  "faq.searchPlaceholder": "Tafuta maswali...",
  "faq.cat.all": "Yote",
  "faq.cat.admissions": "Uandikishaji",
  "faq.cat.fees": "Ada",
  "faq.cat.courses": "Kozi",
  "faq.cat.campus": "Chuo",
  "faq.noResults": "Hakuna maswali yanayolingana. Jaribu neno lingine la utaftaji.",
};

const translations: Record<Language, Record<string, string>> = { en, sw };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("pamoja-lang");
    return (saved === "sw" ? "sw" : "en") as Language;
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("pamoja-lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => translations[lang][key] || translations.en[key] || key,
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
