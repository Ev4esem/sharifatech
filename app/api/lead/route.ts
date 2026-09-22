import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { name?: string; phone?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Имя и телефон обязательны" },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram не настроен" },
      { status: 500 }
    );
  }

  const text = [
    "🆕 Новая заявка с сайта",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    "",
    message || "Без описания",
  ].join("\n");

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  if (!telegramRes.ok) {
    return NextResponse.json(
      { error: "Не удалось отправить в Telegram" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
