# lfa-cli-ui — Site vitrine

> Site de présentation du CLI [lfa-cli-ai](https://github.com/MikeCHOKKI/lfa-cli-ai), déployé sur Vercel.

[![Déployé sur Vercel](https://img.shields.io/badge/Déployé%20sur-Vercel-black?logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Licence Apache 2.0](https://img.shields.io/badge/Licence-Apache%202.0-blue)](./LICENSE)

---

## 📖 À propos

Ce site vitrine présente **lfa-cli-ai**, un outil CLI en Go permettant de configurer instantanément des environnements de développement IA sur Linux — avec support pour **Antigravity**, **Cursor**, **VS Code** et **Windsurf** — incluant workflows, règles, 21 MCP skills et un serveur MCP portable.

---

## 🛠️ Stack technique

| Technologie | Rôle |
|---|---|
| **Next.js 16** | App Router, Turbopack |
| **React 19** | UI library |
| **Tailwind CSS v4** | Styling |
| **TypeScript** | Type safety |
| **Lucide React** | Icônes |
| **Space Grotesk / JetBrains Mono** | Typographies |
| **Vercel** | Déploiement & hébergement |

---

## 🚀 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (Turbopack)
npm run dev

# Linter
npm run lint

# Build de production
npm run build

# Démarrer en mode production
npm run start
```

Le serveur de développement sera disponible sur [http://localhost:3000](http://localhost:3000).

---

## ☁️ Déploiement sur Vercel

Le site est automatiquement déployé sur Vercel via **GitHub Integration** — chaque push sur la branche principale déclenche un nouveau déploiement.

### Variables d'environnement

| Variable | Description | Défaut |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL du site pour SEO / Open Graph | Auto-détecté via `VERCEL_URL` |

> **Note :** En production, Vercel définit automatiquement `VERCEL_URL`. La variable `NEXT_PUBLIC_SITE_URL` n'est nécessaire que si vous utilisez un domaine personnalisé.

---

## 🔍 SEO

Le site inclut une configuration SEO complète :

- Métadonnées **Open Graph** et **Twitter Cards**
- `sitemap.xml` pour l'indexation Google
- `robots.txt` pour les crawlers
- Images OG (1200×630 et 1200×1200) pour le partage social
- URL canonique et balises `hreflang`

---

## 📂 Structure du projet

```
.
├── app/
│   ├── layout.tsx       # Layout racine (métadonnées, polices)
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux Tailwind
├── public/
│   ├── og-image.jpg         # Image Open Graph (1200×630)
│   ├── og-image-square.jpg  # Image Open Graph carrée (1200×1200)
│   ├── sitemap.xml
│   └── robots.txt
└── ...
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

## 📄 Licence

Apache 2.0 — Voir [LICENSE](LICENSE)

---

<div align="center">

Créé par [**@Ekim's**](https://github.com/MikeCHOKKI) · [LinkedIn](https://www.linkedin.com/in/mikechokki) · [mikechokki5@gmail.com](mailto:mikechokki5@gmail.com)

</div>