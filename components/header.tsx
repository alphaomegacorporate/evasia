import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export function Header() {
  return <header className="site-header"><Link href="/" className="official-brand" aria-label="EVASIA TRAVEL & CONSULTING — Voyagez. Découvrez. Explorez. — Accueil"/><nav className="main-nav" aria-label="Navigation principale"><Link href="/destinations">Destinations</Link><Link href="/services">Nos services</Link><Link href="/a-propos">À propos</Link></nav><Link className="header-cta" href="/contact">Parlons de votre projet <ArrowUpRight size={16}/></Link><Link className="mobile-menu" href="/destinations" aria-label="Ouvrir les destinations"><Menu size={22}/></Link></header>;
}

export function Footer() {
  return <footer className="footer"><div><Link href="/" className="official-brand footer-brand" aria-label="EVASIA TRAVEL & CONSULTING — Voyagez. Découvrez. Explorez. — Accueil"/></div><div className="footer-links"><Link href="/destinations">Destinations</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div><small className="copyright">© {new Date().getFullYear()} EVASIA TRAVEL & CONSULTING. Tous droits réservés.</small></footer>;
}
