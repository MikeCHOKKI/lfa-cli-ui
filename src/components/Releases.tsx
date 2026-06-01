import { useEffect, useState } from 'react'
import { useVersion } from '../useVersion'

const REPO = 'lfa-cli/lfa-cli-ai'

type Release = {
  tag_name: string
  published_at: string
  body: string
  html_url: string
}

function extractChanges(body: string): string[] {
  return body
    .split('\n')
    .filter((l) => l.startsWith('-') || l.startsWith('*'))
    .map((l) => l.replace(/^[-*]\s*/, ''))
}

export default function Releases() {
  const { version } = useVersion()
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/repos/MikeCHOKKI/lfa-cli-ai/releases')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setReleases(data as Release[])
      })
      .catch((err) => console.error('Failed to fetch releases:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="releases" className="w-full max-w-4xl mx-auto px-4 py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-lfa-accent">
        Versions
      </h2>
      <p className="text-lfa-text/60 text-center mb-16 max-w-xl mx-auto">
        Historique des versions et changements.
      </p>

      {loading && (
        <p className="text-center text-lfa-text/40 text-sm">Chargement...</p>
      )}

      {!loading && releases.length === 0 && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-lfa-accent/10 border border-lfa-accent/30 rounded-xl px-6 py-4 mb-8">
            <span className="text-lfa-accent font-bold text-lg">{version}</span>
            <span className="text-xs bg-lfa-accent/20 text-lfa-accent px-2 py-0.5 rounded-full">Latest</span>
          </div>
          <p className="text-sm text-lfa-text/60 mb-6 max-w-lg mx-auto">
            Première version de LFA CLI. Une release officielle sera créée prochainement.
          </p>
        </div>
      )}

      {releases.length > 0 && (
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-lfa-text/10" />
          <div className="flex flex-col gap-10">
            {releases.map((r, idx) => {
              const changes = extractChanges(r.body)
              return (
                <div key={r.tag_name} className="relative pl-16">
                  <div className="absolute left-3 top-1.5 w-6 h-6 rounded-full bg-lfa-bg border-2 border-lfa-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-lfa-accent" />
                  </div>
                  <div className="bg-lfa-surface border border-lfa-text/10 rounded-xl p-6 hover:border-lfa-accent/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold text-lfa-text">
                        <span className="text-lfa-accent">{r.tag_name}</span>
                      </h3>
                      {idx === 0 && (
                        <span className="text-xs bg-lfa-success/20 text-lfa-success border border-lfa-success/30 px-2.5 py-0.5 rounded-full font-semibold">
                          Latest
                        </span>
                      )}
                      <span className="text-xs text-lfa-text/40 ml-auto">
                        {new Date(r.published_at).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    {changes.length > 0 ? (
                      <ul className="space-y-2">
                        {changes.map((c, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-lfa-text/70">
                            <span className="text-lfa-accent mt-0.5 shrink-0">▸</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-lfa-text/50">Consultez la release sur GitHub pour les détails.</p>
                    )}
                    <a
                      href={r.html_url}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-lfa-text/40 hover:text-lfa-accent mt-4 transition-colors"
                    >
                      Voir sur GitHub →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div className="mt-16 text-center">
        <a
          href={`https://github.com/${REPO}/releases`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-lfa-text/50 hover:text-lfa-accent transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          Toutes les versions
        </a>
      </div>
    </section>
  )
}
