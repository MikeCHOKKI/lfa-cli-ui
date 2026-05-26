import { useState } from 'react'
import { CLI_COMMANDS_DOC } from '../data'
import { Copy, Check, Terminal, Search, Info } from 'lucide-react'
import { motion } from 'motion/react'

export default function CommandCheatsheet() {
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(idx)
    setTimeout(() => setCopiedIndex(null), 1500)
  }

  const filteredCommands = CLI_COMMANDS_DOC.filter(cmd =>
    cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div id="commands" className="py-24 bg-lfa-bg px-4 sm:px-6 lg:px-8 relative border-t border-lfa-accent/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lfa-accent/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-lfa-bg border border-lfa-accent/30 text-lfa-accent font-bold tracking-wider">
            INDEX DES COMMANDES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-lfa-text mt-4 font-sans">
            Toutes les commandes LFA CLI
          </h2>
          <p className="text-lfa-text/60 text-sm mt-3 leading-relaxed">
            Guide de référence rapide pour toutes les commandes disponibles.
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-lfa-text/30 group-focus-within:text-lfa-accent transition-colors">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une commande... (doctor, setup, dashboard...)"
            className="w-full bg-lfa-surface/40 backdrop-blur border border-lfa-accent/20 rounded-xl py-2.5 pl-11 pr-4 text-xs font-mono text-lfa-text placeholder-lfa-text/40 focus:outline-none focus:ring-1 focus:ring-lfa-accent focus:border-lfa-accent transition-all shadow-inner"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredCommands.map((cmd, idx) => {
            const isCopied = copiedIndex === idx

            let badgeStyle = 'text-lfa-text/60 bg-lfa-bg border-lfa-accent/10'
            if (cmd.badge === 'AI') badgeStyle = 'text-lfa-accent bg-lfa-accent/10 border-lfa-accent/30'
            if (cmd.badge === 'Git') badgeStyle = 'text-lfa-success bg-lfa-success/10 border-lfa-success/30'
            if (cmd.badge === 'Config') badgeStyle = 'text-lfa-warning bg-lfa-warning/10 border-lfa-warning/30'

            return (
              <motion.div
                key={cmd.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-lfa-surface/40 backdrop-blur border border-lfa-accent/20 rounded-xl p-5 hover:border-lfa-accent/40 hover:bg-lfa-bg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex-1 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-sm font-bold text-lfa-text flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-lfa-accent shrink-0" /> {cmd.name}
                      {cmd.args && <span className="text-lfa-text/40 font-normal">{cmd.args}</span>}
                    </span>
                    <span className={`text-[9px] font-bold font-sans uppercase px-2 py-0.5 rounded-full border ${badgeStyle}`}>
                      {cmd.badge}
                    </span>
                  </div>
                  <p className="text-lfa-text/60 text-xs mt-1.5 leading-relaxed">
                    {cmd.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto">
                  <div className="bg-lfa-bg border border-lfa-accent/20 rounded-lg px-3 py-1.5 font-mono text-[10px] text-lfa-accent text-left w-64 md:w-56 overflow-x-auto truncate shadow-inner">
                    <span className="text-lfa-text/30 font-bold">$</span> {cmd.example}
                  </div>

                  <button
                    onClick={() => handleCopy(cmd.example, idx)}
                    className="p-2 bg-lfa-accent/10 text-lfa-accent hover:text-lfa-text rounded-lg border border-lfa-accent/30 hover:border-lfa-accent transition-all cursor-pointer shadow-sm"
                    title="Copier l'exemple"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-lfa-success animate-bounce" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>
            )
          })}

          {filteredCommands.length === 0 && (
            <div className="text-center py-12 border border-dashed border-lfa-accent/20 rounded-2xl bg-lfa-bg">
              <Info className="w-6 h-6 text-lfa-text/30 mx-auto mb-2" />
              <p className="text-lfa-text/40 font-mono text-xs">Aucune commande trouvée.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
