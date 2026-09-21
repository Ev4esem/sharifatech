import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CaseCard } from "@/components/CaseCard";
import { HeroVideo } from "@/components/HeroVideo";
import { Services } from "@/components/Services";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ContactSection } from "@/components/ContactSection";
import { cases } from "@/lib/cases";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <HeroVideo />

      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        <section className="flex flex-col justify-center py-24">
          <span className="mb-6 w-fit rounded-full border border-border px-3 py-1 text-xs text-muted">
            Цифровая студия
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Создаём сайты и приложения, которые доводят продукт до релиза
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Nafa IT — студия полного цикла: от дизайна до разработки. Ниже —
            кейсы, над которыми мы работали.
          </p>
        </section>

        <ClientsMarquee />

        <section id="cases" className="scroll-mt-24 border-t border-border py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Кейсы
            </h2>
            <span className="text-sm text-muted">{cases.length} проектов</span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        <Services />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
