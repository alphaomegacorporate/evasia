import { NextResponse } from "next/server";

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 200)) return NextResponse.json({ ok: true }); // honeypot
    const name = clean(body.name, 120), email = clean(body.email, 254), phone = clean(body.phone, 50), service = clean(body.service, 120), destination = clean(body.destination, 120), details = clean(body.details, 4000);
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 6 || !service || !destination || details.length < 10 || body.consent !== true) return NextResponse.json({ error: "Vérifiez les champs du formulaire et votre consentement." }, { status: 400 });
    const apiKey = process.env.BREVO_API_KEY, sender = process.env.BREVO_SENDER_EMAIL, recipient = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !sender || !recipient) return NextResponse.json({ error: "Le formulaire n’est pas encore configuré. Contactez-nous par téléphone." }, { status: 503 });
    const response = await fetch("https://api.brevo.com/v3/smtp/email", { method: "POST", headers: { "accept": "application/json", "api-key": apiKey, "content-type": "application/json" }, body: JSON.stringify({ sender: { name: process.env.BREVO_SENDER_NAME || "EVASIA TRAVEL & CONSULTING", email: sender }, to: [{ email: recipient }], replyTo: { email, name }, subject: `Nouvelle demande ${service} — ${destination} | ${name}`, textContent: `Nouvelle demande depuis le site EVASIA\n\nNom : ${name}\nE-mail : ${email}\nTéléphone : ${phone}\nService : ${service}\nDestination : ${destination}\n\nMessage :\n${details}` }) });
    if (!response.ok) return NextResponse.json({ error: "L’envoi n’a pas abouti. Réessayez ou contactez-nous par téléphone." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Impossible de traiter votre demande pour le moment." }, { status: 400 }); }
}
