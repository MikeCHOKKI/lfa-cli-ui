import { useState } from 'react'
import { Menu, X, ArrowRight, Check, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('curl -fsSL https://lfa-cli.vercel.app/install.sh | sh')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lfa-bg/70 backdrop-blur-md border-b border-lfa-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lfa-accent shadow-[0_0_8px_rgba(88,166,255,0.6)] animate-pulse" />
            <span className="font-mono text-sm font-bold tracking-widest text-lfa-accent italic flex items-center gap-1.5">
              LFA CLI <span className="text-lfa-text/30 font-normal select-none">//</span> SYSTEM
              <span className="text-[10px] font-sans font-normal px-2 py-0.2 rounded-full bg-lfa-accent/20 text-lfa-accent border border-lfa-accent/30">
                v0.1.0
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-lfa-text/60 hover:text-lfa-accent text-xs font-semibold tracking-wider transition-colors">
              FONCTIONNALITÉS
            </a>
            <a href="#playground" className="text-lfa-text/60 hover:text-lfa-accent text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-lfa-accent" />
              TERMINAL
            </a>
            <a href="#commands" className="text-lfa-text/60 hover:text-lfa-accent text-xs font-semibold tracking-wider transition-colors">
              COMMANDES
            </a>
            <a href="#faq" className="text-lfa-text/60 hover:text-lfa-accent text-xs font-semibold tracking-wider transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-tighter border-r border-lfa-accent/20 pr-5 select-none text-left">
              <div className="flex flex-col items-end">
                <span className="text-lfa-text/30 text-[9px] font-bold">STATUS</span>
                <span className="text-lfa-success font-mono">ONLINE</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lfa-text/30 text-[9px] font-bold">AGENTS</span>
                <span className="text-lfa-accent font-mono">22 ACTIFS</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lfa-text/30 text-[9px] font-bold">SKILLS</span>
                <span className="text-lfa-text font-mono">18</span>
              </div>
            </div>

            <button
              onClick={handleCopyInstall}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-lfa-bg border border-lfa-accent/30 text-[11px] font-mono text-lfa-text hover:bg-lfa-accent/10 hover:border-lfa-accent/50 transition-all cursor-pointer"
              title="Copier la commande d'installation"
            >
              <span className="text-lfa-accent font-bold">$</span>
              <span>curl -fsSL ... | sh</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-lfa-success" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 text-lfa-text/40 group-hover:translate-x-1 transition-transform" />
              )}
            </button>

            <a
              href="https://github.com/MikeCHOKKI/lfa-cli-ai"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-lfa-text/40 hover:text-lfa-accent hover:bg-lfa-accent/10 rounded-md border border-transparent hover:border-lfa-accent/20 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lfa-text/60 hover:text-lfa-accent p-2 rounded-md outline-none focus:ring-1 focus:ring-lfa-accent"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-lfa-bg/90 backdrop-blur-lg border-b border-lfa-accent/20 px-4 pt-2 pb-6 space-y-3"
        >
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-lfa-text hover:text-lfa-accent px-3 py-2 rounded-md text-base font-medium font-mono">
            [1] FONCTIONNALITÉS
          </a>
          <a href="#playground" onClick={() => setIsOpen(false)} className="block text-lfa-accent hover:text-lfa-accent/80 px-3 py-2 rounded-md text-base font-medium font-mono">
            [2] TERMINAL INTERACTIF
          </a>
          <a href="#commands" onClick={() => setIsOpen(false)} className="block text-lfa-text hover:text-lfa-accent px-3 py-2 rounded-md text-base font-medium font-mono">
            [3] COMMANDES
          </a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-lfa-text hover:text-lfa-accent px-3 py-2 rounded-md text-base font-medium font-mono">
            [4] FAQ
          </a>

          <div className="pt-4 border-t border-lfa-accent/20 flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11px] text-lfa-text/40 font-mono px-3">
              <span>STATUS: <span className="text-lfa-success">ONLINE</span></span>
              <span>AGENTS: <span className="text-lfa-accent">22</span></span>
            </div>
            <button
              onClick={handleCopyInstall}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-lfa-bg border border-lfa-accent/30 text-sm font-mono text-lfa-text"
            >
              <span>$ curl -fsSL ... | sh</span>
              {copied ? (
                <Check className="w-4 h-4 text-lfa-success" />
              ) : (
                <ArrowRight className="w-4 h-4 text-lfa-accent" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
