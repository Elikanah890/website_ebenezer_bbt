import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import StudentLife from "./pages/StudentLife";
import Impact from "./pages/Impact";
import NewsEvents from "./pages/NewsEvents";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <I18nProvider>
          <TooltipProvider>
            <Toaster />

            <BrowserRouter>
              {/* Global layout (visible on all pages) */}
              <Navbar />

              {/* Page routing */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/news" element={<NewsEvents />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              {/* Global footer components */}
              <Footer />
              <BottomNav />
              <WhatsAppFAB />
            </BrowserRouter>
          </TooltipProvider>
        </I18nProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;