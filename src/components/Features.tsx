const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-lfa-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Détection multiplateforme',
    desc: 'Linux, macOS, Windows — LFA CLI détecte automatiquement votre OS et configure tout pour vous.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-lfa-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: 'Installation automatique',
    desc: 'Une seule commande, tout est prêt. Plus besoin de configurer manuellement votre environnement.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-lfa-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: '22 agents préconfigurés',
    desc: 'Des agents spécialisés pour le code, le design, la documentation et l\'analyse.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-lfa-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0-.96 6.953M5.639 13.49a48.088 48.088 0 0 1 9.733-3.108m0 0a48.125 48.125 0 0 1 9.733 3.108M5.639 13.49a48.09 48.09 0 0 1 3.557 6.755M5.639 13.49l3.557 6.755m0 0a48.113 48.113 0 0 1 5.608.273m-5.608-.273a48.113 48.113 0 0 0-5.608.273m5.608.273a48.125 48.125 0 0 0 5.608-.273M5.639 13.49l3.557-6.755M5.639 13.49l-3.557 6.755M12 3a48.01 48.01 0 0 1 9.918 4.243M12 3a48 48 0 0 0-9.918 4.243M12 3c2.2 0 4.605.815 6.918 2.243M12 3c-2.2 0-4.605.815-6.918 2.243M6.042 5.243L12 7.395l5.958-2.152M12 7.395v7.487" />
      </svg>
    ),
    title: '18 skills intégrés',
    desc: 'Des compétences prêtes à l\'emploi : analyse de code, génération, débogage, refactoring.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-lfa-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Liaison Ollama',
    desc: 'Connexion automatique à vos modèles locaux via Ollama pour une exécution hors-ligne.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-lfa-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Mode interactif TUI',
    desc: 'Interface terminal interactive avec menus, sélecteurs et barres de progression.',
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-lfa-accent">
        Fonctionnalités
      </h2>
      <p className="text-lfa-text/60 text-center mb-16 max-w-xl mx-auto">
        Tout ce dont vous avez besoin pour déployer et gérer votre environnement OpenCode en ligne de commande.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-lfa-surface border border-lfa-text/10 rounded-xl p-6 hover:border-lfa-accent/40 transition-all duration-300 hover:translate-y-[-2px] group"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
            <h3 className="text-base font-semibold text-lfa-text mb-2">{f.title}</h3>
            <p className="text-sm text-lfa-text/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
