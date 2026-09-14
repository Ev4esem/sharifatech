import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Nafa IT
      </Link>
      <nav className="flex items-center gap-6 text-sm text-muted">
        <Link
          href="/#cases"
          className="transition-colors hover:text-foreground"
        >
          Кейсы
        </Link>
        <Link
          href="/#services"
          className="hidden transition-colors hover:text-foreground sm:inline"
        >
          Услуги
        </Link>
        <Link
          href="/#contacts"
          className="rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Контакты
        </Link>
      </nav>
    </header>
  );
}
