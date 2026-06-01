import { useState } from 'react'
import { FAQ_DATA } from '../data'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useVersion } from '../useVersion'

export default function FAQ() {
  const { agents, skills } = useVersion()
  const resolve = (text: string) => text
    .replace(/\{AGENTS\}/g, String(agents))
    .replace(/\{SKILLS\}/g, String(skills))
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div id="faq" className="py-24 bg-lfa-bg px-4 sm:px-6 lg:px-8 relative border-t border-b border-lfa-accent/10">
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-lfa-accent/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-lfa-text font-sans flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-lfa-accent" /> Questions fréquentes
          </h2>
          <p className="text-lfa-text/60 text-sm mt-3 leading-relaxed">
            Tout ce que vous devez savoir sur LFA CLI, son installation et son fonctionnement.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={idx}
                className="bg-lfa-surface/20 backdrop-blur border border-lfa-accent/20 rounded-xl overflow-hidden transition-colors hover:border-lfa-accent/30 shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-lfa-accent/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold font-sans uppercase px-2 py-0.5 rounded bg-lfa-bg text-lfa-accent border border-lfa-accent/20 shrink-0">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-lfa-text tracking-tight leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-lfa-text/30 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-lfa-accent' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-lfa-text/60 text-xs/relaxed border-t border-lfa-accent/20 bg-lfa-bg/10 text-left">
                        {resolve(item.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-lfa-accent/10 to-lfa-bg border border-lfa-accent/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lfa-accent/10 border border-lfa-accent/30 flex items-center justify-center text-lfa-accent">
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-lfa-text">Besoin d'aide ?</h4>
              <p className="text-xs text-lfa-text/60 mt-0.5">Consultez la documentation ou ouvrez une issue sur GitHub.</p>
            </div>
          </div>
          <a
            href="https://github.com/MikeCHOKKI/lfa-cli-ai/issues"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-lfa-accent hover:bg-lfa-accent/90 text-lfa-bg text-xs font-bold rounded-lg whitespace-nowrap transition-all shadow-md hover:shadow-lfa-accent/20 cursor-pointer"
          >
            Ouvrir une issue
          </a>
        </div>
      </div>
    </div>
  )
}
