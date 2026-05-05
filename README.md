# lfa-cli-ui — Site vitrine

Site de présentation du CLI [lfa-cli-ai](https://github.com/MikeCHOKKI/lfa-cli-ai), déployé sur Vercel.

## Stack

- **Next.js 16** — App Router, Turbopack
- **React 19** — UI library
- **Tailwind CSS v4** — Styling
- **TypeScript** — Type safety
- **Lucide React** — Icons
- **Vercel** — Deployment

## Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Linter
npm run lint

# Build production
npm run build

# Démarrer en production
npm run start
```

## Déploiement sur Vercel

Le site est automatiquement déployé sur Vercel via GitHub Integration.

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL du site pour SEO/OG | Auto-détecté via `VERCEL_URL` |

En production, Vercel définit automatiquement `VERCEL_URL`, donc `NEXT_PUBLIC_SITE_URL` n'est généralement pas nécessaire sauf pour un domaine personnalisé.

## SEO

Le site inclut:
- Métadonnées Open Graph et Twitter Cards
- sitemap.xml pour Google
- robots.txt pour les crawlers
- Images OG pour le partage social

## Licence

Apache 2.0 — Voir [LICENSE](./LICENSE)