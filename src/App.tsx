import Terminal from './components/Terminal'
import Features from './components/Features'
import Download from './components/Download'

function App() {
  return (
    <div className="min-h-screen bg-lfa-bg font-mono">
      <header className="fixed top-0 left-0 right-0 z-50 bg-lfa-bg/80 backdrop-blur-md border-b border-lfa-text/10">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-lfa-accent font-bold text-lg tracking-tight">
            {'>'} LFA CLI
          </span>
          <div className="flex gap-6 text-sm text-lfa-text/60">
            <a href="#features" className="hover:text-lfa-accent transition-colors">Fonctionnalités</a>
            <a href="#download" className="hover:text-lfa-accent transition-colors">Télécharger</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="pt-32 pb-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-lfa-accent">LFA</span>{' '}
              <span className="text-lfa-text">CLI</span>
            </h1>
            <p className="text-lg md:text-xl text-lfa-text/60 mb-10">
              Automatisez votre environnement OpenCode
            </p>
            <Terminal />
          </div>
        </section>

        <Features />
        <Download />
      </main>

      <footer className="border-t border-lfa-text/10 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-lfa-text/30">
          <span>LFA CLI — Open Source (MIT)</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lfa-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-lfa-accent transition-colors">Documentation</a>
            <a href="#" className="hover:text-lfa-accent transition-colors">npm</a>
          </div>
          <span>Construit avec OpenCode</span>
        </div>
      </footer>
    </div>
  )
}

export default App
