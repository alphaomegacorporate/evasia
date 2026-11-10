# EVASIA TRAVEL & CONSULTING

Site vitrine Next.js en français : accueil, destinations, services, à propos et contact.

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

Dans `.env.local`, renseigner :

- `BREVO_API_KEY` : clé API Brevo, conservée côté serveur.
- `BREVO_SENDER_EMAIL` : adresse expéditrice vérifiée dans Brevo.
- `BREVO_SENDER_NAME` : nom présenté aux destinataires.
- `CONTACT_TO_EMAIL` : adresse qui reçoit les demandes du formulaire.

Le formulaire envoie les demandes vers l’API transactionnelle Brevo. L’adresse de réception n’étant pas encore fournie, le formulaire affiche un message de configuration jusqu’à ce que ces variables soient renseignées.

## Visuels

Le logo officiel est extrait de la charte EVASIA fournie. Les photographies viennent d’Unsplash et sont utilisées sous leur licence : [Canada — Moraine Lake](https://unsplash.com/photos/a-mountain-lake-surrounded-by-trees-and-mountains-8QvLqc56EDU), [Paris — café de rue](https://unsplash.com/photos/street-cafe-in-paris-08qI7f_Di3o), [Dubaï — skyline](https://unsplash.com/photos/city-skyline-under-blue-sky-during-daytime-yoksEYoQUD4), [Chine — Grande Muraille](https://unsplash.com/photos/a-stone-wall-on-a-hill-eTcSiwZYA-k), [Turquie — Sainte-Sophie](https://unsplash.com/photos/hagia-sophia-with-palm-trees-and-fountain-in-istanbul-_fX9e-3RG6w), [Maurice — Le Morne](https://unsplash.com/photos/a-beach-with-palm-trees-and-a-body-of-water-MXzQb-6Faeg), [Albanie — Berat](https://unsplash.com/es/fotos/un-monton-de-edificios-que-estan-en-la-ladera-de-una-colina-ewm4VMupeBI), [étudiants](https://unsplash.com/photos/students-sitting-at-tables-in-room-KW4qF4GiRtc) et [préparation d’un voyage](https://unsplash.com/photos/travel-planning-with-map-and-passport-AX6s7zREtZE).
