import { MessageCircle, Phone } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-20 left-4 z-50 grid h-13 w-13 place-items-center rounded-full bg-whatsapp p-3.5 shadow-lift transition-transform hover:scale-105 md:bottom-6"
      >
        <MessageCircle className="h-6 w-6 text-graphite-foreground" />
      </a>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-px border-t border-border bg-border md:hidden">
        <a
          href="#contact"
          className="bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground"
        >
          اطلب عرض سعر
        </a>
        <a
          href={`tel:${PHONE}`}
          aria-label="اتصال مباشر"
          className="grid w-14 place-items-center bg-graphite text-graphite-foreground"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
