const steps = [
  {
    title: "Исследование",
    description:
      "Разбираемся в задаче, аудитории и конкурентах — прежде чем что-то рисовать.",
  },
  {
    title: "Дизайн",
    description:
      "Проектируем структуру и интерфейс, опираясь на цель продукта, а не на моду.",
  },
  {
    title: "Разработка",
    description:
      "Собираем и тестируем продукт — от прототипа до рабочей версии.",
  },
  {
    title: "Запуск и поддержка",
    description:
      "Выкатываем в релиз и остаёмся на связи — дорабатываем и после запуска.",
  },
];

export function HowWeWork() {
  return (
    <section className="border-t border-border py-24">
      <div className="mb-10 max-w-xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Как мы работаем
        </h2>
        <p className="mt-3 text-muted">
          Один и тот же процесс — от лендинга до CRM-платформы.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="glass-card relative p-6">
            <div aria-hidden className="glass-card-glow" />
            <div aria-hidden className="glass-card-sheen" />
            <div className="relative z-10">
              <span className="text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
