const REPO = 'github.com/lfa-cli/lfa-cli-ai'

const installMethods = [
  {
    title: 'Quick install (curl)',
    cmd: 'curl -fsSL https://lfa-cli.vercel.app/install.sh | sh',
    note: 'Détecte OS/arch, télécharge le binaire, ajoute au PATH',
    highlight: true,
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: 'Go install',
    cmd: `go install ${REPO}@latest`,
    note: 'Nécessite Go 1.22+',
    highlight: false,
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Build from source',
    cmd: `git clone https://${REPO}.git && cd lfa-cli-ai && make build`,
    note: 'Binaire dans bin/lfa',
    highlight: false,
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
]

export default function Download() {
  return (
    <section id="download" className="w-full max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-lfa-accent">
        Installation
      </h2>
      <p className="text-lfa-text/60 text-center mb-16 max-w-xl mx-auto">
        Une commande pour installer et configurer LFA CLI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {installMethods.map((m, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 ${
              m.highlight
                ? 'bg-lfa-accent/10 border-2 border-lfa-accent hover:border-lfa-accent/80 scale-105 md:scale-110'
                : 'bg-lfa-surface border border-lfa-text/10 hover:border-lfa-accent/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={m.highlight ? 'text-lfa-accent' : 'text-lfa-text/60'}>{m.icon}</div>
              <h3 className={`text-sm font-semibold ${m.highlight ? 'text-lfa-accent' : 'text-lfa-text'}`}>
                {m.title}
              </h3>
            </div>
            <div className="bg-lfa-bg border border-lfa-text/10 rounded-lg p-3 font-mono text-xs text-lfa-accent overflow-x-auto break-all">
              <span className="text-lfa-text/40">$ </span>{m.cmd}
            </div>
            <p className="text-xs text-lfa-text/40">{m.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href={`https://${REPO}/releases`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-lfa-text/50 hover:text-lfa-accent transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          Voir les releases
        </a>
      </div>
    </section>
  )
}
