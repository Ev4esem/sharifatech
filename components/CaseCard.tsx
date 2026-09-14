import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.02] transition-colors hover:border-accent/50"
    >
      <div
        aria-hidden
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_20%,rgba(124,123,255,0.25),transparent_60%)]"
      >
        <span className="text-6xl font-semibold tracking-tight text-foreground/10 transition-colors group-hover:text-accent/25 sm:text-7xl">
          {item.index}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">
              {item.category}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
          </div>
          <span
            className={
              "shrink-0 rounded-full border px-2.5 py-1 text-[11px] leading-none " +
              (item.status === "В разработке"
                ? "border-accent/40 text-accent"
                : "border-border text-muted")
            }
          >
            {item.status}
          </span>
        </div>

        <p className="text-sm text-muted">{item.summary}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-2">
            {item.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-accent"
              >
                {service}
              </span>
            ))}
          </div>
          <span className="text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
