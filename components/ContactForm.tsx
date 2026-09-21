"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "rashid.magomedov.official@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Заявка с сайта${name ? ` — ${name}` : ""}`
    );
    const body = encodeURIComponent(
      `Имя: ${name}\nКонтакт для связи: ${contact}\n\n${message}`
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
            <span className="text-muted">Контакт для связи</span>
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="rounded-lg border border-border bg-white/[0.03] px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent"
              placeholder="Telegram, телефон или почта"
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
