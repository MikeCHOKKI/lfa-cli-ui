const installMethods = [
  {
    title: 'Go install',
    cmd: 'go install github.com/MikeCHOKKI/lfa-cli-ai@latest',
    note: 'Nécessite Go 1.22+',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: 'Build from source',
    cmd: 'git clone https://github.com/MikeCHOKKI/lfa-cli-ai.git && cd lfa-cli-ai && make build',
    note: 'Binaire dans bin/lfa',
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
        Deux méthodes pour installer LFA CLI sur votre machine.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {installMethods.map((m, i) => (
          <div key={i} className="bg-lfa-surface border border-lfa-text/10 rounded-xl p-6 hover:border-lfa-accent/40 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="text-lfa-accent">{m.icon}</div>
              <h3 className="text-base font-semibold text-lfa-text">{m.title}</h3>
            </div>
            <div className="bg-lfa-bg border border-lfa-text/10 rounded-lg p-4 font-mono text-xs md:text-sm text-lfa-accent overflow-x-auto">
              <span className="text-lfa-text/40">$ </span>{m.cmd}
            </div>
            <p className="text-xs text-lfa-text/40">{m.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/MikeCHOKKI/lfa-cli-ai/releases"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-lfa-text/50 hover:text-lfa-accent transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          Binaires précompilés — bientôt disponibles
        </a>
      </div>
    </section>
  )
}
