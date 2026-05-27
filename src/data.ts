import { FileItem, TerminalPreset, CLICommandDoc, FAQItem } from './types'

export const INITIAL_FILE_TREE: FileItem[] = [
  { id: '1', name: '.config', path: '.config', type: 'folder', isOpen: true },
  { id: '1-1', name: 'opencode', path: '.config/opencode', type: 'folder', isOpen: true },
  { id: '1-1-1', name: 'opencode.jsonc', path: '.config/opencode/opencode.jsonc', type: 'file', status: 'unchanged' },
  { id: '1-1-2', name: 'AGENTS.md', path: '.config/opencode/AGENTS.md', type: 'file', status: 'unchanged' },
  { id: '1-1-3', name: 'agents', path: '.config/opencode/agents', type: 'folder', isOpen: false },
  { id: '1-1-4', name: 'skills', path: '.config/opencode/skills', type: 'folder', isOpen: false },
  { id: '2', name: '.local', path: '.local', type: 'folder', isOpen: true },
  { id: '2-1', name: 'bin', path: '.local/bin', type: 'folder', isOpen: true },
  { id: '2-1-1', name: 'lfa', path: '.local/bin/lfa', type: 'file', status: 'unchanged' },
]

export const TERMINAL_PRESETS: TerminalPreset[] = [
  {
    id: 'doctor',
    name: '🔍 Diagnostiquer (lfa doctor)',
    command: 'lfa doctor',
    description: 'Analyse votre système et détecte les composants disponibles.',
    steps: [
      { type: 'input', text: 'lfa doctor', delay: 400 },
      { type: 'spinner', text: 'Analyse du système en cours...', delay: 800 },
      { type: 'thinking', text: 'Détection de l\'OS, OpenCode et Ollama...', delay: 1000 },
      { type: 'output', text: '✓ OS detected: Linux (Fedora 40)', delay: 300 },
      { type: 'output', text: '✓ OpenCode found: ~/.config/opencode/opencode.jsonc', delay: 300 },
      { type: 'output', text: '✓ Ollama reachable (http://localhost:11434)', delay: 300 },
      { type: 'output', text: '→ 22 agents available', delay: 200 },
      { type: 'output', text: '→ 18 skills available', delay: 200 },
      { type: 'success', text: '✅ Système prêt pour la configuration.', delay: 500 }
    ]
  },
  {
    id: 'setup',
    name: '⚡ Configurer (lfa setup)',
    command: 'lfa setup --ollama',
    description: 'Déploie la configuration complète d\'OpenCode avec tous les agents et skills.',
    steps: [
      { type: 'input', text: 'lfa setup --ollama', delay: 500 },
      { type: 'spinner', text: 'Création du répertoire de configuration...', delay: 800 },
      { type: 'thinking', text: 'Génération de opencode.jsonc avec 22 agents et 18 skills...', delay: 1200 },
      { type: 'file-change', text: '📝 Fichier modifié : .config/opencode/opencode.jsonc', delay: 200, filePath: '.config/opencode/opencode.jsonc', fileAction: 'modify' },
      { type: 'output', text: '✓ Config directory created (~/.config/opencode)', delay: 200 },
      { type: 'output', text: '✓ Agents deployed (22/22)', delay: 200 },
      { type: 'output', text: '✓ Skills deployed (18/18)', delay: 200 },
      { type: 'output', text: '✓ Ollama linked as LLM provider', delay: 200 },
      { type: 'success', text: '✅ Configuration OpenCode terminée en 3.2s.', delay: 500 }
    ]
  },
  {
    id: 'dashboard',
    name: '🖥️ Dashboard (lfa dashboard)',
    command: 'lfa dashboard',
    description: 'Lance l\'interface interactive en mode TUI pour gérer votre environnement.',
    steps: [
      { type: 'input', text: 'lfa dashboard', delay: 300 },
      { type: 'spinner', text: 'Démarrage du dashboard interactif...', delay: 600 },
      { type: 'thinking', text: 'Initialisation du TUI avec Bubbletea...', delay: 800 },
      { type: 'output', text: '┌─────────────────────────────────────┐', delay: 150 },
      { type: 'output', text: '│  LFA CLI - DASHBOARD v0.1.0         │', delay: 150 },
      { type: 'output', text: '├─────────────────────────────────────┤', delay: 150 },
      { type: 'output', text: '│  ✓ OpenCode: configuré              │', delay: 150 },
      { type: 'output', text: ' ' + '│  ✓ Ollama: connecté (mistral:7b)      │', delay: 150 },
      { type: 'output', text: ' ' + '│  ✓ Agents: 22 actifs                │', delay: 150 },
      { type: 'output', text: '│  ✓ Skills: 18 disponibles           │', delay: 150 },
      { type: 'output', text: '└─────────────────────────────────────┘', delay: 150 },
      { type: 'success', text: '🚀 Dashboard prêt. Tapez q pour quitter.', delay: 400 }
    ]
  }
]

export const CLI_COMMANDS_DOC: CLICommandDoc[] = [
  {
    name: 'lfa doctor',
    args: '',
    description: 'Analyse votre système et détecte OS, OpenCode, Ollama et les agents disponibles.',
    example: 'lfa doctor',
    badge: 'Core'
  },
  {
    name: 'lfa setup',
    args: '[--ollama] [--dry-run]',
    description: 'Déploie la configuration complète d\'OpenCode avec agents, skills et fournisseur LLM.',
    example: 'lfa setup --ollama',
    badge: 'Core'
  },
  {
    name: 'lfa dashboard',
    args: '[-y]',
    description: 'Lance l\'interface interactive TUI pour gérer et monitorer votre environnement.',
    example: 'lfa dashboard',
    badge: 'Interactive'
  },
  {
    name: 'lfa version',
    args: '',
    description: 'Affiche la version installée de LFA CLI.',
    example: 'lfa version',
    badge: 'Core'
  }
]

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Général',
    question: "Qu'est-ce que LFA CLI ?",
    answer: "LFA CLI est un installateur et configurateur autonome pour l'environnement OpenCode. Il détecte automatiquement votre système, déploie les 22 agents et 18 skills, et configure Ollama comme fournisseur LLM local, le tout en une seule commande."
  },
  {
    category: 'Général',
    question: "Comment installer LFA CLI ?",
    answer: "La méthode la plus rapide est la commande curl : `curl -fsSL https://lfa-cli.vercel.app/install.sh | sh`. Vous pouvez aussi utiliser `go install github.com/lfa-cli/lfa-cli-ai@latest` si vous avez Go 1.22+, ou cloner le dépôt et faire `make build`."
  },
  {
    category: 'Technique',
    question: "LFA CLI modifie-t-il ma configuration OpenCode existante ?",
    answer: "Oui, LFA CLI enrichit votre fichier `opencode.jsonc` avec 22 agents spécialisés et 18 skills. Il conserve vos réglages existants et ajoute les nouvelles configurations. Utilisez `lfa setup --dry-run` pour prévisualiser les changements sans les appliquer."
  },
  {
    category: 'Technique',
    question: "Quels systèmes d'exploitation sont supportés ?",
    answer: "Linux (Fedora, Ubuntu, Arch, etc.), macOS (Intel et Apple Silicon), et Windows (via WSL2). Le binaire est compilé pour 6 architectures différentes (amd64, arm64 pour Linux, macOS et Windows)."
  },
  {
    category: 'Sécurité',
    question: "Mes données sont-elles transmises à des serveurs externes ?",
    answer: "Non. LFA CLI fonctionne entièrement en local. Les modèles LLM sont exécutés via Ollama sur votre machine. Aucune donnée, code source ou configuration n'est envoyée à des serveurs externes. Votre environnement reste souverain."
  }
]
