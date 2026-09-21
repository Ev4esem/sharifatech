import { services } from "@/lib/studio";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Услуги
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Берём продукт целиком — от дизайна до разработки — или включаемся в
          конкретный этап.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="glass-card p-6">
            <div aria-hidden className="glass-card-glow" />
            <div aria-hidden className="glass-card-sheen" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
