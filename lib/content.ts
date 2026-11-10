export const offers = [
  { country: "Canada", region: "Amérique du Nord", image: "photo-1632764727060-af92af33b59e", services: ["Résidence permanente", "Études", "Visa visiteur", "Contrat de travail"], badge: "Destination phare" },
  { country: "France & Belgique", region: "Europe", image: "photo-1792753584461-887a4fea8273", services: ["Études", "Visa visiteur", "Tourisme", "Conférences"] },
  { country: "Italie", region: "Europe", image: "photo-1516483638261-f4dbaf036963", services: ["Études", "Visa visiteur"] },
  { country: "Allemagne", region: "Europe", image: "photo-1467269204594-9661b134dd2b", services: ["Études", "Contrat de travail", "Formation rémunérée"] },
  { country: "Dubaï", region: "Émirats arabes unis", image: "photo-1597278315489-a4b8b67659f0", services: ["Études", "Affaires & visite", "Contrat de travail"], badge: "Opportunités professionnelles" },
  { country: "Chine", region: "Asie", image: "photo-1668333140118-84e827fe42ca", services: ["Bourse d’études", "Bourse partiellement financée", "Visa affaires & visite"] },
  { country: "Turquie", region: "Eurasie", image: "photo-1765394945627-3a29d0dc5c2c", services: ["Visa tourisme", "Études", "Séjour médical"] },
  { country: "Russie", region: "Europe & Asie", image: "photo-1513326738677-b964603b136d", services: ["Études", "Tourisme multi-entrées", "Travail"] },
  { country: "Serbie, Lituanie & Île Maurice", region: "Mobilité internationale", image: "photo-1662979610820-54433ea15ae4", services: ["Contrat de travail"] },
  { country: "Albanie", region: "Europe", image: "photo-1708871980677-13e9c69030d8", services: ["Opportunités de travail"] },
  { country: "Corée du Sud", region: "Asie", image: "photo-1538485399081-7191377e8241", services: ["Participation aux conférences"] },
];

export const expertise = [
  { title: "Équivalence de diplôme", text: "Faites reconnaître votre parcours académique et préparez la suite de votre projet." },
  { title: "Préparation au TCF", text: "Une formation structurée pour avancer avec méthode et confiance." },
  { title: "Réservation TCF", text: "Nous vous accompagnons dans la réservation de votre place à l’examen." },
];

export const phoneNumbers = ["+237 680 865 938", "+237 655 621 875"];
export const photo = (id: string, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
