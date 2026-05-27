# LFA CLI UI

Site vitrine / landing page pour le projet LFA CLI — installateur et configurateur OpenCode.

## Aperçu

Interface web statique présentant :
- Hero section avec commande d'installation
- Terminal simulator interactif
- Grille de fonctionnalités (bento grid)
- Cheatsheet des commandes CLI
- Historique des versions (GitHub Releases API)
- Section de téléchargement multi-plateforme
- FAQ

## Stack technique

| Composant | Version |
|-----------|---------|
| React | 18.3 |
| Vite | 5.4 |
| Tailwind CSS | 3.4 |
| TypeScript | 5.5 (strict mode) |
| lucide-react | 1.16 |
| motion | 12.40 |

## Structure

```
lfa-cli-ui/
├── src/
│   ├── main.tsx                      # Point d'entrée React
│   ├── App.tsx                       # Composant racine
│   ├── types.ts                      # Types TypeScript
│   ├── data.ts                       # Données statiques (features, releases)
│   ├── components/
│   │   ├── Navbar.tsx                # Navigation fixe
│   │   ├── TerminalSimulator.tsx     # Terminal animé
│   │   ├── BentoFeatures.tsx         # Grille de fonctionnalités
│   │   ├── CommandCheatsheet.tsx     # Tableau des commandes
│   │   ├── Releases.tsx              # Historique des versions (API GitHub)
│   │   ├── Download.tsx              # Cartes de téléchargement
│   │   └── FAQ.tsx                   # Questions fréquentes
│   └── styles/
│       └── index.css                 # Styles globaux + animations
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Développement

```bash
npm install           # Installation des dépendances
npm run dev           # Serveur de développement (localhost:5173)
npm run build         # Build de production → dist/
npm run preview       # Prévisualisation du build
```

## Déploiement

Le site est déployé sur **Vercel**. Le dossier `dist/` contient le build statique.

```bash
npm run build         # Génère dist/
```

### Configuration Vercel

- Build command : `npm run build`
- Output directory : `dist/`
- Framework preset : Vite

## Thème

Palette de couleurs cohérente avec la CLI Go :

| Token | Hex | Usage |
|-------|-----|-------|
| `lfa-bg` | `#0D1117` | Fond principal |
| `lfa-surface` | `#161B22` | Surfaces/cartes |
| `lfa-accent` | `#58A6FF` | Liens, boutons, highlights |
| `lfa-text` | `#C9D1D9` | Texte principal |
| `lfa-success` | `#2EA043` | Indicateurs positifs |
| `lfa-warning` | `#D29922` | Avertissements |
| `lfa-error` | `#FF6B6B` | Erreurs |

## Bundle

| Fichier | Brut | Gzip |
|---------|------|------|
| JS | 158 KB | 50.5 KB |
| CSS | 14.2 KB | 3.7 KB |
| **Total** | **172 KB** | **54.2 KB** |

## License

MIT
