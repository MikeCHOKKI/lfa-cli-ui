import {
  Bot, Zap, Cpu, Code2, Lock, GitFork, FileType
} from 'lucide-react'
import { motion } from 'motion/react'
import { useVersion } from '../useVersion'

export default function BentoFeatures() {
  const { agents, skills } = useVersion()
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
  }

  return (
    <div id="features" className="py-24 bg-lfa-bg px-4 sm:px-6 lg:px-8 relative border-t border-lfa-accent/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lfa-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-lfa-text mb-4 font-sans">
            L'installateur intelligent pour OpenCode
          </h2>
          <p className="text-lfa-text/60 text-base max-w-2xl mx-auto">
            LFA CLI détecte, configure et déploie votre environnement OpenCode en une commande. Agents, skills, fournisseur LLM : tout est prêt.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-lfa-surface via-lfa-bg to-lfa-accent/5 border border-lfa-accent/30 rounded-3xl p-8 flex flex-col justify-between group hover:border-lfa-accent/40 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-lfa-accent/10 border border-lfa-accent/30 text-lfa-accent flex items-center justify-center shadow-[0_0_10px_rgba(88,166,255,0.15)]">
                <Bot className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-lfa-accent/30 text-lfa-accent bg-lfa-accent/10">
                DÉTECTION INTELLIGENTE
              </span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold font-sans text-lfa-text text-left tracking-tight">
                Analyse système et déploiement automatisé
              </h3>
              <p className="text-lfa-text/60 text-sm mt-3 text-left max-w-xl leading-relaxed">
                LFA CLI scanne votre système, détecte l'OS, localise OpenCode, vérifie Ollama, puis déploie {agents} agents et {skills} skills prêts à l'emploi. Aucune configuration manuelle.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-lfa-accent/20 flex flex-wrap items-center gap-6 text-xs text-lfa-text/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-lfa-text/60" /> Multi-OS
              </div>
              <div className="flex items-center gap-1.5">
                <FileType className="w-3.5 h-3.5 text-lfa-text/60" /> Config auto
              </div>
              <div className="flex items-center gap-1.5">
                <GitFork className="w-3.5 h-3.5 text-lfa-text/60" /> Backup intégré
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-lfa-bg border border-lfa-accent/20 rounded-2xl p-6 flex flex-col justify-between group hover:border-lfa-accent/30 transition-all shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-lfa-warning/10 border border-lfa-warning/20 text-lfa-warning flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-lfa-text text-left">{agents} agents embarqués</h4>
              <p className="text-lfa-text/60 text-xs mt-2 text-left leading-relaxed">
                Agents spécialisés préconfigurés : code, design, documentation, analyse, sécurité et plus.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-lfa-bg border border-lfa-accent/20 rounded-2xl p-6 flex flex-col justify-between group hover:border-lfa-accent/30 transition-all shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-lfa-accent/10 border border-lfa-accent/20 text-lfa-accent flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-lfa-text text-left">{skills} skills inclus</h4>
              <p className="text-lfa-text/60 text-xs mt-2 text-left leading-relaxed">
                Compétences prêtes à l'emploi : génération de code, refactoring, débogage, revue de code.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-lfa-bg border border-lfa-accent/20 rounded-2xl p-6 flex flex-col justify-between group hover:border-lfa-accent/30 transition-all shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-lfa-success/10 border border-lfa-success/20 text-lfa-success flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-lfa-text text-left">Liaison Ollama</h4>
              <p className="text-lfa-text/60 text-xs mt-2 text-left leading-relaxed">
                Connexion automatique à vos modèles locaux via Ollama pour une exécution hors-ligne souveraine.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-gradient-to-r from-lfa-bg to-lfa-accent/5 border border-lfa-accent/20 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-lfa-accent/30 transition-all shadow-md"
          >
            <div className="flex-1">
              <div className="w-10 h-10 rounded-lg bg-lfa-accent/10 border border-lfa-accent/20 text-lfa-accent flex items-center justify-center mb-4 md:mb-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="mt-3 md:mt-4">
                <h4 className="text-base font-bold text-lfa-text text-left font-sans">Mode non-interactif (lfa setup -y)</h4>
                <p className="text-lfa-text/60 text-xs mt-1.5 text-left leading-relaxed max-w-lg">
                  Automatisez le déploiement dans vos scripts CI/CD ou vos provisioning. Une seule commande, zéro interaction requise.
                </p>
              </div>
            </div>

            <div className="bg-lfa-bg p-3 rounded-xl border border-lfa-accent/20 font-mono text-[10px] text-lfa-text/60 w-full md:w-56 text-left self-end md:self-auto shadow-inner">
              <div className="text-lfa-accent font-bold">$ lfa setup -y</div>
              <div className="text-lfa-text/40 mt-1">✓ OpenCode configured</div>
              <div className="text-lfa-success mt-0.5">✓ Setup complete.</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
