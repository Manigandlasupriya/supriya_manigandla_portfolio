import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./data";
import { externalClickHandler } from "@/lib/open-external";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.955L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  const phone = PROFILE.phone.replace(/[^0-9]/g, "");
  const message = encodeURIComponent("Hi Manigandla Supriya, I came across your portfolio and would like to connect with you regarding an opportunity.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Supriya Manigandla</span>.
        </div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.linkedin} onClick={externalClickHandler(PROFILE.linkedin)} target="_blank" rel="noreferrer" data-cursor="magnet" title="LinkedIn — opens in new tab" className="glass relative grid h-10 w-10 place-items-center rounded-full hover:text-primary transition-colors" aria-label="LinkedIn (opens in new tab)"><Linkedin size={16} /><span className="absolute -top-1 -right-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary text-primary-foreground text-[7px]">↗</span></a>
          <a href={PROFILE.github} onClick={externalClickHandler(PROFILE.github)} target="_blank" rel="noreferrer" data-cursor="magnet" title="GitHub — opens in new tab" className="glass relative grid h-10 w-10 place-items-center rounded-full hover:text-primary transition-colors" aria-label="GitHub (opens in new tab)"><Github size={16} /><span className="absolute -top-1 -right-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary text-primary-foreground text-[7px]">↗</span></a>
          <a href={`mailto:${PROFILE.email}`} data-cursor="magnet" title="Email Supriya" className="glass grid h-10 w-10 place-items-center rounded-full hover:text-primary transition-colors" aria-label="Email Supriya"><Mail size={16} /></a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

            data-cursor="cta"
            className="shine inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground glow-electric"
            style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 255), oklch(0.68 0.22 305))" }}
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>

      {/* Floating WhatsApp action button — circular icon, higher up */}
      <div className="fixed bottom-20 right-6 z-50 group">
        <a
          href={whatsappUrl}
          onClick={externalClickHandler(whatsappUrl)}
          target="_blank"
          rel="noreferrer"
          data-cursor="magnet"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Chat on WhatsApp with Manigandla Supriya (opens in new tab)"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[200px] rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#075E54] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
        >
          Chat on WhatsApp
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
        </span>
      </div>
    </footer>
  );
}
