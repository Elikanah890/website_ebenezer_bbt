import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const message = encodeURIComponent("Good day, I am interested in learning more about the programs offered at Pamoja Ebenezer College of Agriculture, including admission requirements and course details. Kindly assist.");

  return (
    <a
      href={`https://wa.me/255614878752?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center fab-shadow hover:scale-110 transition-transform touch-feedback"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
}
