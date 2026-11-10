"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react";
import { phoneNumbers } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}><Link href="/" className="official-brand header-brand" aria-label="Logo officiel EVASIA TRAVEL & CONSULTING — Voyagez. Découvrez. Explorez. — Accueil" onClick={closeMenu}/><nav className="main-nav" aria-label="Navigation principale"><Link href="/destinations">Destinations</Link><Link href="/services">Nos services</Link><Link href="/a-propos">À propos</Link></nav><Link className="header-cta" href="/contact">Parlons de votre projet <ArrowUpRight size={16}/></Link><button className="mobile-menu" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X size={21}/> : <Menu size={22}/>}</button>{menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navigation mobile"><Link href="/destinations" onClick={closeMenu}>Destinations <ArrowUpRight size={16}/></Link><Link href="/services" onClick={closeMenu}>Nos services <ArrowUpRight size={16}/></Link><Link href="/a-propos" onClick={closeMenu}>À propos <ArrowUpRight size={16}/></Link><Link className="mobile-nav-cta" href="/contact" onClick={closeMenu}>Parlons de votre projet <ArrowUpRight size={16}/></Link></nav>}</header>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-main"><div className="footer-brand-column"><Link href="/" className="official-brand footer-brand" aria-label="EVASIA TRAVEL & CONSULTING — Voyagez. Découvrez. Explorez. — Accueil"/><p>Des projets d’études, de voyage ou de travail à l’international ? Parlons-en simplement.</p></div><div className="footer-column"><h2>Découvrir</h2><Link href="/destinations">Toutes les destinations</Link><Link href="/services">Nos services</Link><Link href="/a-propos">Qui sommes-nous ?</Link></div><div className="footer-column"><h2>Quelques horizons</h2><Link href="/destinations#canada">Canada</Link><Link href="/destinations#france-belgique">France & Belgique</Link><Link href="/destinations#dubai">Dubaï</Link><Link href="/destinations#chine">Chine</Link></div><div className="footer-column footer-contact"><h2>On en parle ?</h2><span><MapPin size={15}/> Yapaki Prestige, Bonamoussadi<br/><i>Douala, Cameroun</i></span>{phoneNumbers.map(phone => <a href={`tel:${phone.replaceAll(" ","")}`} key={phone}><Phone size={14}/>{phone}</a>)}<Link className="footer-contact-link" href="/contact">Écrire à EVASIA <ArrowUpRight size={15}/></Link></div></div><div className="footer-bottom"><small>© {new Date().getFullYear()} EVASIA TRAVEL & CONSULTING. Tous droits réservés.</small><span>Voyagez. Découvrez. Explorez.</span></div></footer>;
}
