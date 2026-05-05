# lfa-cli-ui — Site vitrine

Site de présentation du CLI [lfa-cli-ai](https://github.com/MikeCHOKKI/lfa-cli-ai), built with Next.js 16.

## Stack

- **Next.js 16** — App Router, Turbopack
- **React 19** — UI library
- **Tailwind CSS v4** — Styling
- **TypeScript** — Type safety
- **Lucide React** — Icons

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

## Configuration

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL du site pour SEO/OG | `http://localhost:3000` |

### SEO

Le site utilise les métadonnées Open Graph et Twitter Cards pour le partage sur les réseaux sociaux. L'URL du site est configurable via `NEXT_PUBLIC_SITE_URL`.

## Déploiement

Le site est déployé sur GitHub Pages via GitHub Actions. Voir `.github/workflows/`.

## Licence

Apache 2.0 — Voir [LICENSE](./LICENSE)