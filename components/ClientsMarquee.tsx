import { clients } from "@/lib/studio";

export function ClientsMarquee() {
  const track = [...clients, ...clients];

  return (
    <section className="border-t border-border py-16">
      <p className="mb-8 text-center text-xs uppercase tracking-wider text-muted">
        С кем мы работали
      </p>

      <div className="marquee">
        <div className="marquee-track">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 px-8 text-2xl font-semibold tracking-tight text-foreground/40 transition-colors hover:text-foreground sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
