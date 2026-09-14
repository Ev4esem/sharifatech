export function SiteFooter() {
  return (
    <footer
      id="contacts"
      className="mx-auto w-full max-w-6xl border-t border-border px-6 py-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            Готовы обсудить проект?
          </p>
          <p className="mt-1 text-sm text-muted">
            Напишите нам — расскажем, как можем помочь.
          </p>
        </div>
        <a
          href="mailto:rashid.magomedov.official@gmail.com"
          className="text-sm text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          rashid.magomedov.official@gmail.com
        </a>
      </div>
      <p className="mt-8 text-xs text-muted">
        © {new Date().getFullYear()} Nafa IT
      </p>
    </footer>
  );
}
