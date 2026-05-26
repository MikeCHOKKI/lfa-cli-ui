import { useState, useEffect } from 'react'

type OSType = 'linux' | 'macos' | 'windows' | 'unknown'

function detectOS(): OSType {
  const p = navigator.platform.toLowerCase()
  if (p.includes('linux')) return 'linux'
  if (p.includes('mac')) return 'macos'
  if (p.includes('win')) return 'windows'
  return 'unknown'
}

const osInfo: Record<OSType, { name: string; icon: string; primary: string; others: string[] }> = {
  linux: {
    name: 'Linux',
    icon: '🐧',
    primary: 'lfa-cli_1.0.0_amd64.deb',
    others: ['lfa-cli-1.0.0.x86_64.rpm', 'lfa-cli-linux-static.tar.gz'],
  },
  macos: {
    name: 'macOS',
    icon: '🍎',
    primary: 'lfa-cli-1.0.0.dmg',
    others: ['lfa-cli-1.0.0-arm64.dmg', 'lfa-cli-macos.tar.gz'],
  },
  windows: {
    name: 'Windows',
    icon: '🪟',
    primary: 'lfa-cli-1.0.0-x64.exe',
    others: ['lfa-cli-1.0.0-x86.exe', 'lfa-cli-win.zip'],
  },
  unknown: {
    name: 'Système détecté',
    icon: '💻',
    primary: 'lfa-cli-1.0.0.tar.gz',
    others: [],
  },
}

export default function Download() {
  const [os, setOs] = useState<OSType>('unknown')

  useEffect(() => {
    setOs(detectOS())
  }, [])

  const info = osInfo[os]

  return (
    <section id="download" className="w-full max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-lfa-accent">
        Téléchargement
      </h2>
      <p className="text-lfa-text/60 text-center mb-12 max-w-xl mx-auto">
        Détecté : {info.icon} {info.name}
      </p>

      <div className="flex flex-col items-center gap-8">
        <a
          href="https://github.com/lfa-cli/lfa-cli-ai/releases"
          target="_blank" rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-lfa-accent text-lfa-bg font-semibold px-8 py-4 rounded-xl text-lg hover:brightness-110 transition-all duration-300 animate-pulse-glow"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Télécharger pour {info.name}
          <span className="text-xs text-lfa-bg/70 ml-1">({info.primary})</span>
        </a>

        <div className="w-full max-w-lg">
          <p className="text-xs text-lfa-text/40 mb-3 text-center">Autres formats disponibles</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {info.others.map((f) => (
              <a
                key={f}
                href="https://github.com/lfa-cli/lfa-cli-ai/releases" target="_blank" rel="noopener noreferrer"
                className="text-center text-xs bg-lfa-surface border border-lfa-text/10 rounded-lg px-3 py-2 text-lfa-text/60 hover:text-lfa-accent hover:border-lfa-accent/40 transition-all duration-200"
              >
                {f}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full max-w-lg mt-8">
          <p className="text-xs text-lfa-text/40 mb-2 text-center">Ou via curl</p>
          <div className="bg-lfa-surface border border-lfa-text/10 rounded-lg p-4 font-mono text-xs md:text-sm text-lfa-accent overflow-x-auto">
            <span className="text-lfa-text/40">$ </span>
            curl -fsSL https://get.lfa-cli.dev | sh
          </div>
        </div>
      </div>
    </section>
  )
}
