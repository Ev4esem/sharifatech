export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-border px-6 py-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-muted">
          © {new Date().getFullYear()} Nafa IT
        </span>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="tel:+79285835396"
            className="text-xs text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            +7 928 583-53-96
          </a>
          <a
            href="mailto:rashid.magomedov.official@gmail.com"
            className="text-xs text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            rashid.magomedov.official@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
