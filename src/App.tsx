import { Analytics } from '@vercel/analytics/react'
import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from './components/Navbar'
import TerminalSimulator from './components/TerminalSimulator'
import BentoFeatures from './components/BentoFeatures'
import CommandCheatsheet from './components/CommandCheatsheet'
import Download from './components/Download'
import Releases from './components/Releases'
import FAQ from './components/FAQ'
import { useVersion } from './useVersion'

function App() {
  const version = useVersion()
  const [copied, setCopied] = useState(false)

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('curl -fsSL https://lfa-cli.vercel.app/install.sh | sh')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-lfa-bg font-mono text-lfa-text overflow-x-hidden selection:bg-lfa-accent/30 selection:text-white">
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none select-none overflow-hidden">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-lfa-accent/10 blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lfa-bg border border-lfa-accent/30 text-xs text-lfa-text/60 font-mono mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-lfa-accent shadow-[0_0_8px_rgba(88,166,255,0.8)] animate-pulse" />
            <span className="text-lfa-accent">Installateur OpenCode — {version}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-lfa-text leading-tight font-sans text-center">
            Automatisez votre environnement{' '}
            <span className="bg-gradient-to-r from-lfa-accent via-blue-300 to-lfa-accent bg-clip-text text-transparent">
              OpenCode
            </span>
          </h1>

          <p className="text-lfa-text/60 text-base sm:text-lg mt-6 max-w-3xl mx-auto font-sans leading-relaxed text-center">
            LFA CLI analyse votre système, détecte OpenCode et Ollama, puis déploie 22 agents et 18 skills prêts à l'emploi. Une commande suffit.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopyInstall}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-lfa-bg border border-lfa-accent/30 text-sm font-mono text-lfa-text hover:text-lfa-text hover:border-lfa-accent/50 transition-all cursor-pointer group shadow-xl"
            >
              <span className="text-lfa-accent font-bold">$</span>
              <span>curl -fsSL https://lfa-cli.vercel.app/install.sh | sh</span>
              {copied ? (
                <Check className="w-4 h-4 text-lfa-success" />
              ) : (
                <ArrowRight className="w-4 h-4 opacity-50 text-lfa-accent group-hover:translate-x-1 transition-transform" />
              )}
            </button>

            <a
              href="#playground"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-lfa-accent text-lfa-bg text-sm font-bold hover:bg-lfa-accent/90 hover:shadow-[0_0_15px_rgba(88,166,255,0.6)] transition-all cursor-pointer shadow-lg shadow-lfa-accent/20"
            >
              Démo interactive
            </a>
          </div>
        </div>
      </header>

      <main>
        <TerminalSimulator />
        <BentoFeatures />
        <CommandCheatsheet />
        <Releases />
        <Download />
        <FAQ />
      </main>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-lfa-bg to-[#010203] relative border-t border-lfa-accent/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-lfa-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-lfa-text mb-6 font-sans">
            Prêt à configurer OpenCode ?
          </h2>
          <p className="text-lfa-text/60 text-base max-w-xl mx-auto mb-8">
            Installez LFA CLI et laissez-le configurer votre environnement en une commande.
          </p>

          <div className="max-w-md mx-auto bg-lfa-bg border border-lfa-accent/30 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl">
            <div className="flex items-center justify-between font-mono text-[11px] text-lfa-text/40 pb-2 border-b border-lfa-accent/20">
              <span>BASH — INSTALL</span>
              <span>lfa-cli</span>
            </div>

            <div className="flex items-center justify-between bg-lfa-bg border border-lfa-accent/20 rounded-xl px-4 py-3 font-mono text-sm">
              <span className="text-lfa-accent">
                <span className="text-lfa-text/30 font-bold">$</span> curl -fsSL https://lfa-cli.vercel.app/install.sh | sh
              </span>
              <button
                onClick={handleCopyInstall}
                className="p-1 rounded bg-lfa-accent/10 text-lfa-accent hover:text-lfa-text border border-lfa-accent/30 hover:border-lfa-accent transition-all cursor-pointer"
                title="Copier"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-lfa-success" />
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex gap-1.5 items-center justify-center font-mono text-[10px] text-lfa-text/40 mt-2">
              <span>Puis exécutez <strong className="text-lfa-accent">lfa setup --ollama</strong></span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-lfa-bg py-12 px-4 sm:px-6 lg:px-8 border-t border-lfa-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-lfa-text/40 font-mono">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-lfa-accent shadow-[0_0_6px_rgba(88,166,255,0.8)]" />
            <span>&copy; {new Date().getFullYear()} LFA CLI — Open Source (MIT)</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/MikeCHOKKI/lfa-cli-ai" target="_blank" rel="noopener noreferrer" className="hover:text-lfa-accent transition-colors">GitHub</a>
            <a href="https://lfa-cli.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-lfa-accent transition-colors">Site</a>
            <span className="text-lfa-text/20">|</span>
            <span>{version}</span>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  )
}

export default App
