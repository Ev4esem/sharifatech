"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "rashid.magomedov.official@gmail.com";
const PHONE_PATTERN = "^\\+?[0-9\\s\\-\\(\\)]{7,20}$";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      const subject = encodeURIComponent(
        `Заявка с сайта${name ? ` — ${name}` : ""}`
      );
      const body = encodeURIComponent(
        `Имя: ${name}\nТелефон: ${phone}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }
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

        <div className="mt-2 flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-fit rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Отправляем…" : "Отправить заявку"}
          </button>

          {status === "success" && (
            <span className="text-sm text-accent">
              Заявка отправлена, скоро ответим
            </span>
          )}
          {status === "error" && (
            <span className="text-sm text-muted">
              Не получилось — открыли письмо на почту
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
