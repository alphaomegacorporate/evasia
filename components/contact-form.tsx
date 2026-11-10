"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("loading"); setMessage("");
    const form = event.currentTarget; const raw = Object.fromEntries(new FormData(form).entries()); const data = { ...raw, consent: raw.consent === "on" };
    try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const result = await response.json(); if (!response.ok) throw new Error(result.error || "Une erreur est survenue."); setState("success"); setMessage("Votre demande a bien été envoyée. Notre équipe revient vers vous rapidement."); form.reset(); }
    catch (error) { setState("error"); setMessage(error instanceof Error ? error.message : "Envoi impossible pour le moment."); }
  }
  return <form className="contact-form" onSubmit={submit}>
    <label aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>Site web<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <div className="form-row"><label>Nom complet<input name="name" autoComplete="name" placeholder="Votre nom" required minLength={2}/></label><label>Adresse e-mail<input type="email" name="email" autoComplete="email" placeholder="vous@exemple.com" required/></label></div>
    <div className="form-row"><label>Téléphone<input name="phone" autoComplete="tel" placeholder="+237 …" required/></label><label>Votre projet<select name="service" defaultValue="" required><option value="" disabled>Choisissez un service</option><option>Études</option><option>Visa visiteur ou tourisme</option><option>Résidence permanente</option><option>Contrat de travail</option><option>Bourse d’études</option><option>Équivalence de diplôme</option><option>Formation ou réservation TCF</option><option>Autre projet</option></select></label></div>
    <label>Destination souhaitée<select name="destination" defaultValue="" required><option value="" disabled>Choisissez une destination</option><option>Canada</option><option>France</option><option>Belgique</option><option>Italie</option><option>Dubaï</option><option>Chine</option><option>Allemagne</option><option>Turquie</option><option>Serbie, Lituanie ou Île Maurice</option><option>Albanie</option><option>Corée du Sud</option><option>Russie</option><option>Je ne sais pas encore</option></select></label>
    <label>Parlez-nous de votre projet<textarea name="details" rows={4} placeholder="Quelques mots sur votre projet, votre calendrier ou vos questions…" required minLength={10}/></label>
    <label className="consent"><input type="checkbox" name="consent" required/><span>J’accepte que mes informations soient utilisées pour répondre à ma demande.</span></label>
    <button className="button button-gold submit-button" disabled={state === "loading"}>{state === "loading" ? <>Envoi en cours <LoaderCircle className="spin" size={17}/></> : <>Envoyer ma demande <ArrowRight size={17}/></>}</button>
    {message && <p className={`form-message ${state}`} role="status">{state === "success" && <CheckCircle2 size={18}/>} {message}</p>}
    <p className="form-note">Vos informations restent confidentielles et servent uniquement au suivi de votre demande.</p>
  </form>;
}
