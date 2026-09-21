import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contacts"
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mb-10 max-w-xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Обсудим проект
        </h2>
        <p className="mt-3 text-muted">
          Расскажите коротко о задаче — ответим и предложим, как лучше
          подойти к разработке.
        </p>
      </div>

      <div className="max-w-xl">
        <ContactForm />
      </div>
    </section>
  );
}
