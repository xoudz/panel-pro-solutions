import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, COMPANY_EN, EMAIL, PHONE, PHONE_DISPLAY, ADDRESS, WHATSAPP_URL, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

import heroImg from "@/assets/hero.jpg";
import supplyImg from "@/assets/service-supply.jpg";
import installImg from "@/assets/service-install.jpg";
import coldImg from "@/assets/service-cold.jpg";
import warehouseImg from "@/assets/service-warehouse.jpg";
import factoryImg from "@/assets/app-factory.jpg";
import hangarImg from "@/assets/app-hangar.jpg";
import prepImg from "@/assets/app-prep.jpg";
import commercialImg from "@/assets/app-commercial.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

function SectionHead({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  className?: string;
}) {
  return (
    <div className={cn("reveal max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */

export function Hero() {
  return (
    <section id="home" className="relative pt-16">
      <div className="relative">
        <img
          src={heroImg}
          alt="تركيب ألواح ساندويتش بانل على هيكل معدني لمستودع صناعي"
          width={1920}
          height={1280}
          className="h-[68vh] min-h-[440px] w-full object-cover sm:h-[78vh]"
        />
        <div className="image-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl text-graphite-foreground">
              <p className="eyebrow">SANDWICH PANEL SOLUTIONS</p>
              <h1 className="mt-4 text-3xl leading-[1.2] font-bold sm:text-5xl lg:text-6xl">
                حلول الـ Sandwich Panel من التوريد إلى التركيب.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-graphite-foreground/80 sm:text-lg">
                نوفر ونركب ألواح الساندويتش بانل للمستودعات، المصانع، غرف التبريد والمشاريع
                التجارية، بحلول مصممة حسب احتياجات مشروعك.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  اطلب عرض سعر
                </a>
                <a
                  href="#projects"
                  className="border border-graphite-foreground/35 px-7 py-3.5 text-sm font-semibold text-graphite-foreground transition-colors hover:bg-graphite-foreground/10"
                >
                  شاهد أعمالنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="metal-line bg-surface-1">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-x-reverse divide-border lg:grid-cols-4">

          {["توريد وتركيب", "تنفيذ احترافي", "حلول عزل", "داخل المملكة"].map((item) => (
            <div key={item} className="px-5 py-5 text-center lg:px-8">
              <span className="text-sm font-semibold sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SERVICES ----------------------------- */

const SERVICES = [
  {
    title: "توريد Sandwich Panels",
    img: supplyImg,
    desc: "ألواح بسماكات وأنواع عزل متعددة (PU / PIR / Rockwool) بمواصفات مطابقة ومصادر موثوقة.",
  },
  {
    title: "التركيب والتنفيذ",
    img: installImg,
    desc: "فرق تركيب متخصصة ومعدات رفع، تنفيذ دقيق للجدران والأسقف مع معالجة الوصلات والعزل.",
  },
  {
    title: "غرف التبريد",
    img: coldImg,
    desc: "غرف تبريد وتجميد بأبواب معزولة وأنظمة إحكام، مصممة لثبات درجة الحرارة وكفاءة الطاقة.",
  },
  {
    title: "المستودعات والهناجر",
    img: warehouseImg,
    desc: "تغليف كامل للهناجر والمستودعات: أسقف، جدران، فتحات إضاءة ومداخل شحن.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHead eyebrow="خدماتنا" title="حلول متكاملة لمشروعك" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="reveal metal-card group"
            style={{ transitionDelay: `${i * 60}ms` }}
          >

            <div className="relative overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-56 w-full object-cover brightness-[0.82] saturate-[0.85] transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-100 group-hover:saturate-100 sm:h-64"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/70 to-transparent" />
            </div>

            <div className="p-6 lg:p-7">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                اعرف المزيد
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ WHY US ------------------------------ */

const WHY = [
  { n: "01", t: "جودة المواد", v: "مواصفات موثقة" },
  { n: "02", t: "دقة التنفيذ", v: "قياس ميداني" },
  { n: "03", t: "سرعة الإنجاز", v: "جدول زمني ملتزم" },
  { n: "04", t: "حل متكامل", v: "جهة واحدة" },
];

export function WhyUs() {
  return (
    <section id="about" className="border-y border-border bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHead eyebrow="لماذا نحن" title="من التوريد إلى التسليم، جهة واحدة." />
        <div className="mt-12 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {WHY.map((w, i) => (
            <div
              key={w.n}
              className="reveal bg-graphite p-6 transition-colors duration-300 hover:bg-surface-1 lg:p-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >

              <span className="text-sm font-semibold text-primary">{w.n}</span>
              <h3 className="mt-4 text-lg font-bold sm:text-xl">{w.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- APPLICATIONS --------------------------- */

const APPS = [
  { t: "المستودعات", img: warehouseImg },
  { t: "المصانع", img: factoryImg },
  { t: "الهناجر", img: hangarImg },
  { t: "غرف التبريد", img: coldImg },
  { t: "غرف التجهيز", img: prepImg },
  { t: "المباني التجارية", img: commercialImg },
];

export function Applications() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHead eyebrow="الاستخدامات" title="مصمم لاستخدامات متعددة" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {APPS.map((a, i) => (
          <a
            key={a.t}
            href="#contact"
            className="reveal group relative block overflow-hidden border border-border transition-colors duration-300 hover:border-primary/45"
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <img
              src={a.img}
              alt={a.t}
              loading="lazy"
              width={1000}
              height={1200}
              className="h-72 w-full object-cover brightness-[0.7] saturate-[0.8] transition-all duration-700 group-hover:scale-105 group-hover:brightness-95 group-hover:saturate-100 lg:h-80"
            />
            <span className="image-overlay absolute inset-0" />
            <span className="absolute inset-x-0 bottom-0 p-5">
              <span className="text-lg font-bold text-graphite-foreground">{a.t}</span>
              <span className="mt-2 block h-px w-10 bg-primary transition-all duration-500 group-hover:w-20" />
            </span>

          </a>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- PROJECTS ----------------------------- */

const PROJECTS = [
  { name: "مستودع صناعي", type: "مستودع لوجستي", city: "الدمام", work: "توريد وتركيب Sandwich Panel", img: p1 },
  { name: "مستودع مبرد", type: "غرف تبريد", city: "جدة", work: "توريد وتركيب ألواح معزولة", img: p2 },
  { name: "هنجر معدني", type: "هنجر", city: "الرياض", work: "تركيب أسقف ساندويتش بانل", img: p3 },
  { name: "مصنع أغذية", type: "مصنع", city: "القصيم", work: "تغليف جدران وأسقف", img: p4 },
  { name: "مركز توزيع", type: "مستودع", city: "الرياض", work: "توريد وتركيب متكامل", img: p5 },
  { name: "ورشة تجارية", type: "مبنى تجاري", city: "الخبر", work: "واجهات ساندويتش بانل", img: p6 },
];

export function Projects() {
  const [i, setI] = useState(0);
  const p = PROJECTS[i]!;
  const go = (d: number) => setI((v) => (v + d + PROJECTS.length) % PROJECTS.length);

  return (
    <section id="projects" className="border-y border-border bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <SectionHead eyebrow="مشاريعنا" title="أعمال منفذة داخل المملكة" />
          <div className="reveal flex items-center gap-2">
            <button
              type="button"
              aria-label="المشروع السابق"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center border border-border transition-colors hover:bg-secondary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="المشروع التالي"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center border border-border transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="reveal mt-10 grid gap-0 border border-border bg-surface-1 shadow-lift lg:grid-cols-[1.6fr_1fr]">
          <div className="relative overflow-hidden bg-graphite">

            {PROJECTS.map((pr, idx) => (
              <img
                key={pr.name}
                src={pr.img}
                alt={`${pr.name} — ${pr.city}`}
                loading="lazy"
                width={1600}
                height={1000}
                className={cn(
                  "h-64 w-full object-cover transition-opacity duration-500 sm:h-[26rem] lg:h-[32rem]",
                  idx === i ? "opacity-100" : "absolute inset-0 opacity-0",
                )}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between border-t border-border p-6 lg:border-t-0 lg:border-r lg:p-9">
            <div>
              <span className="text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-bold lg:text-3xl">{p.name}</h3>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted-foreground">نوع المشروع</dt>
                  <dd className="font-medium">{p.type}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted-foreground">المدينة</dt>
                  <dd className="font-medium">{p.city}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">نوع العمل</dt>
                  <dd className="text-end font-medium">{p.work}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-8 flex gap-1.5">
              {PROJECTS.map((pr, idx) => (
                <button
                  key={pr.name}
                  type="button"
                  aria-label={pr.name}
                  onClick={() => setI(idx)}
                  className={cn(
                    "h-1 flex-1 transition-colors",
                    idx === i ? "bg-primary" : "bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESS ----------------------------- */

const STEPS = [
  { n: "01", t: "أرسل تفاصيل مشروعك", d: "الأبعاد أو المخطط ونوع الاستخدام." },
  { n: "02", t: "نحدد المواصفات والكمية", d: "السماكة، نوع العزل، والكميات المطلوبة." },
  { n: "03", t: "التوريد والتجهيز", d: "تصنيع وتجهيز الألواح وجدولة التوصيل." },
  { n: "04", t: "التركيب والتسليم", d: "تنفيذ ميداني ثم تسليم نهائي بعد الفحص." },
];

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHead eyebrow="آلية العمل" title="كيف نعمل؟" />
      <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="reveal bg-background p-6 lg:p-8"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="block text-4xl font-bold text-concrete lg:text-5xl">{s.n}</span>
            <span className="mt-4 block h-px w-full bg-[image:var(--metal-line)]" />

            <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- FINAL CTA ----------------------------- */

export function FinalCta() {
  return (
    <section className="glow-accent metal-line border-y border-border bg-surface-1 text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

        <div className="reveal max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            مشروعك يبدأ من القياس الصحيح.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            أرسل لنا أبعاد مشروعك أو المخطط، وسنساعدك في تحديد الحل المناسب وتقديم عرض سعر.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              اطلب عرض سعر
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-surface-2"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ----------------------------- */

const FIELD =
  "mt-2 w-full border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary/40";


export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead
              eyebrow="تواصل معنا"
              title="اطلب عرض سعر"
              desc="أرسل تفاصيل مشروعك وسنعود إليك بعرض سعر واضح يشمل التوريد والتركيب."
            />
            <div className="reveal mt-8 space-y-3 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 border border-border bg-surface-1 p-4 transition-colors hover:border-primary/40">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-border bg-surface-1 p-4 transition-colors hover:border-primary/40"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">واتساب مباشر</span>
              </a>
              <div className="flex items-center gap-3 border border-border bg-surface-1 p-4 transition-colors hover:border-primary/40">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{EMAIL}</span>
              </div>
              <div className="flex items-center gap-3 border border-border bg-surface-1 p-4 transition-colors hover:border-primary/40">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{ADDRESS}</span>
              </div>
            </div>
          </div>

          <form
            className="reveal border border-border bg-surface-1 p-6 shadow-lift lg:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                الاسم
                <input required name="name" className={FIELD} placeholder="الاسم الكامل" />
              </label>
              <label className="block text-sm font-medium">
                رقم الجوال
                <input
                  required
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  className={FIELD}
                  placeholder="05xxxxxxxx"
                />
              </label>
              <label className="block text-sm font-medium">
                نوع المشروع
                <select required name="type" defaultValue="" className={FIELD}>
                  <option value="" disabled>
                    اختر النوع
                  </option>
                  <option>مستودع</option>
                  <option>مصنع</option>
                  <option>هنجر</option>
                  <option>غرفة تبريد</option>
                  <option>مبنى تجاري</option>
                  <option>أخرى</option>
                </select>
              </label>
              <label className="block text-sm font-medium">
                المدينة
                <input required name="city" className={FIELD} placeholder="الرياض" />
              </label>
              <label className="block text-sm font-medium sm:col-span-2">
                مساحة المشروع التقريبية
                <input name="area" className={FIELD} placeholder="مثال: 1200 م²" />
              </label>
              <label className="block text-sm font-medium sm:col-span-2">
                رسالتك
                <textarea name="message" rows={4} className={FIELD} placeholder="تفاصيل إضافية أو رابط المخطط" />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              إرسال طلب عرض السعر
            </button>
            {sent && (
              <p className="mt-4 text-center text-sm font-medium text-primary">
                تم استلام طلبك، سنتواصل معك قريبًا.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

export function Footer() {
  return (
    <footer className="metal-line bg-graphite pb-16 text-graphite-foreground md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center border border-primary/35 bg-surface-1">
              <span className="block h-3 w-3 border-2 border-primary" />
            </span>
            <span className="leading-tight">
              <span className="block font-bold">{COMPANY}</span>
              <span className="block text-[10px] tracking-[0.22em] text-graphite-foreground/60">
                {COMPANY_EN}
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-graphite-foreground/70">
            متخصصون في توريد وتركيب ألواح الساندويتش بانل للمشاريع الصناعية والتجارية داخل
            المملكة.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">روابط الموقع</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-graphite-foreground/70">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">الخدمات</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-graphite-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">بيانات التواصل</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-graphite-foreground/70">
            <li>
              <a href={`tel:${PHONE}`} className="transition-colors hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>{EMAIL}</li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-graphite-foreground/12">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-graphite-foreground/55 lg:px-8">
          © {new Date().getFullYear()} {COMPANY}. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
