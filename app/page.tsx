export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,255,0.25),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,255,0.15),transparent)]"
      />

      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="text-lg font-semibold tracking-tight">
          Nafa IT
        </span>
        <a
          href="#contacts"
          className="text-sm text-foreground/70 transition-colors hover:text-foreground"
        >
          Контакты
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
        <span className="mb-6 w-fit rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/60">
          Кейсы скоро появятся здесь
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Nafa IT — студия разработки
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Создаём цифровые продукты: сайты, приложения и сервисы под ключ.
        </p>
      </main>

      <footer
        id="contacts"
        className="mx-auto w-full max-w-5xl border-t border-foreground/10 px-6 py-10"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Nafa IT
          </span>
          <a
            href="mailto:rashid.magomedov.official@gmail.com"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            rashid.magomedov.official@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
