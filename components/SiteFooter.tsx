export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-border px-6 py-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-muted">
          © {new Date().getFullYear()} Nafa IT
        </span>
        <a
          href="mailto:rashid.magomedov.official@gmail.com"
          className="text-xs text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
        >
          rashid.magomedov.official@gmail.com
        </a>
      </div>
    </footer>
  );
}
