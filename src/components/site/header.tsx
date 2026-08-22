import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY, COMPANY_EN, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "metal-line bg-graphite/85 backdrop-blur-md"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary/40 bg-surface-2">
            <span className="block h-3 w-3 border-2 border-primary" />
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-bold">{COMPANY}</span>
            <span className="block truncate text-[10px] tracking-[0.22em] text-muted-foreground">
              {COMPANY_EN}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-7 px-6 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle className="me-1" />
          <a
            href="#contact"
            className="hidden shrink-0 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            اطلب عرض سعر
          </a>
          <button
            type="button"
            aria-label="القائمة"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3.5 text-sm font-medium last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-3 bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              اطلب عرض سعر
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
