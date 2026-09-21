import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { cases, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    return { title: "Кейс не найден — Nafa IT" };
  }

  return {
    title: `${item.title} — Nafa IT`,
    description: item.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  const currentPosition = cases.findIndex((c) => c.slug === slug);
  const next = cases[(currentPosition + 1) % cases.length];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,123,255,0.2),transparent)]"
      />

      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
        <Link
          href="/#cases"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Все кейсы
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-sm text-muted">{item.index}</span>
          <span className="text-sm text-muted">/</span>
          <span className="text-sm text-muted">{item.category}</span>
          <span
            className={
              "ml-auto rounded-full border px-2.5 py-1 text-[11px] leading-none " +
              (item.status === "В разработке"
                ? "border-accent/40 text-accent"
                : "border-border text-muted")
            }
          >
            {item.status}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          {item.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{item.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-accent-soft px-3 py-1.5 text-sm text-accent"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="glass-card relative mt-12 flex aspect-video items-center justify-center overflow-hidden">
          {item.heroImage ? (
            <Image
              src={item.heroImage}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              preload
            />
          ) : (
            <>
              <div aria-hidden className="glass-card-glow" />
              <div aria-hidden className="glass-card-sheen" />
              <span className="relative z-10 text-8xl font-semibold tracking-tight text-foreground/10">
                {item.index}
              </span>
            </>
          )}
        </div>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Задача</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {item.task}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Процесс</h2>
          <ol className="mt-6 space-y-8 border-l border-border pl-6">
            {item.process.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[29px] flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background text-[10px] text-accent">
                  {i + 1}
                </span>
                <h3 className="text-base font-medium">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Результат</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {item.result}
          </p>
        </section>

        {item.gallery ? (
          <section className="mt-20">
            <h2 className="text-xl font-semibold tracking-tight">
              Скриншоты
            </h2>
            <div className="mt-6 grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
              {item.gallery.map((shot) => (
                <div
                  key={shot.src}
                  className="overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={shot.src}
                    alt=""
                    width={shot.width}
                    height={shot.height}
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-20 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                aria-hidden
                className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted"
              >
                Скриншот {i}
              </div>
            ))}
          </div>
        )}

        <Link
          href={`/cases/${next.slug}`}
          className="glass-card group mt-24 flex items-center justify-between p-6"
        >
          <div aria-hidden className="glass-card-glow" />
          <div aria-hidden className="glass-card-sheen" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-wider text-muted">
              Следующий кейс
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight">
              {next.title}
            </p>
          </div>
          <span className="relative z-10 text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </Link>
      </main>

      <SiteFooter />
    </div>
  );
}
