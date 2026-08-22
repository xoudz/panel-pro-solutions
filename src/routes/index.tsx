import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { FloatingActions } from "@/components/site/floating";
import {
  Hero,
  Services,
  WhyUs,
  Specs,
  Applications,
  Projects,
  Process,
  FinalCta,
  Contact,
  Footer,
} from "@/components/site/sections";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "ساندويتش بانل — توريد وتركيب في السعودية | ثِقل بانل";
const DESC =
  "توريد وتركيب ألواح الساندويتش بانل للمستودعات والمصانع والهناجر وغرف التبريد داخل المملكة. اطلب عرض سعر اليوم.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div dir="rtl">
      <Header />
      <main>
        <div data-reveal>
          <Hero />
        </div>
        <div data-reveal>
          <Services />
        </div>
        <div data-reveal>
          <WhyUs />
        </div>
        <div data-reveal>
          <Specs />
        </div>
        <div data-reveal>
          <Applications />
        </div>
        <div data-reveal>
          <Projects />
        </div>
        <div data-reveal>
          <Process />
        </div>
        <div data-reveal>
          <FinalCta />
        </div>
        <div data-reveal>
          <Contact />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
