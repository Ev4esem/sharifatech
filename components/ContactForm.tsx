"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "rashid.magomedov.official@gmail.com";
const PHONE_PATTERN = "^\\+?[0-9\\s\\-\\(\\)]{7,20}$";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const subject = encodeURIComponent(
      `Заявка с сайта${name ? ` — ${name}` : ""}`
    );
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card relative p-6 sm:p-8">
      <div aria-hidden className="glass-card-glow" />
      <div aria-hidden className="glass-card-glow-2" />
      <div aria-hidden className="glass-card-sheen" />

      <div className="relative z-10 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-muted">Имя</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
              placeholder="Как к вам обращаться"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm">
            <span className="text-muted">Телефон</span>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern={PHONE_PATTERN}
              title="Введите номер телефона, например +7 900 000-00-00"
              className="rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
              placeholder="+7 900 000-00-00"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-muted">О проекте</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
            placeholder="Коротко о задаче — что нужно сделать"
          />
        </label>

        <button
          type="submit"
          className="mt-2 w-fit rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Отправить заявку
        </button>
      </div>
    </form>
  );
}
