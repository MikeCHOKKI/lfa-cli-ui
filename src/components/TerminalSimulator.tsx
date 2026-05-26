import { useState, useEffect, useRef, FormEvent } from 'react'
import {
  Folder, FolderOpen, Play, RotateCcw, Check,
  Terminal as TermIcon, Sparkles, ChevronRight, FileCode, CheckCircle2
} from 'lucide-react'
import { motion } from 'motion/react'
import { TERMINAL_PRESETS, INITIAL_FILE_TREE } from '../data'
import { TerminalStep, FileItem } from '../types'

export default function TerminalSimulator() {
  const [activePresetId, setActivePresetId] = useState('doctor')
  const [isPlaying, setIsPlaying] = useState(false)
  const [logs, setLogs] = useState<TerminalStep[]>([])
  const [currentStepIndex, setCurrentStepIndex] = useState(-1)
  const [currentTypingText, setCurrentTypingText] = useState('')
  const [isTypingInput, setIsTypingInput] = useState(false)
  const [showPromptCursor, setShowPromptCursor] = useState(true)
  const [fileTree, setFileTree] = useState<FileItem[]>(INITIAL_FILE_TREE)
  const [customInput, setCustomInput] = useState('')

  const terminalScreenRef = useRef<HTMLDivElement>(null)
  const activePreset = TERMINAL_PRESETS.find(p => p.id === activePresetId) || TERMINAL_PRESETS[0]

  const scrollToBottom = () => {
    if (terminalScreenRef.current) {
      terminalScreenRef.current.scrollTop = terminalScreenRef.current.scrollHeight
    }
  }

  useEffect(() => { scrollToBottom() }, [logs, currentTypingText, isTypingInput])

  useEffect(() => {
    const flashInterval = setInterval(() => setShowPromptCursor(prev => !prev), 550)
    return () => clearInterval(flashInterval)
  }, [])

  const runSimulation = () => {
    if (isPlaying) return
    setIsPlaying(true)
    setLogs([])
    setCurrentStepIndex(-1)
    setCurrentTypingText('')
    setIsTypingInput(true)
    setFileTree(INITIAL_FILE_TREE.map(item => ({ ...item, status: 'unchanged' })))

    let charIndex = 0
    const commandText = activePreset.command

    const typingTimer = setInterval(() => {
      if (charIndex < commandText.length) {
        setCurrentTypingText(prev => prev + commandText.charAt(charIndex))
        charIndex++
      } else {
        clearInterval(typingTimer)
        setIsTypingInput(false)
        setCurrentStepIndex(0)
      }
    }, 45)
  }

  useEffect(() => {
    if (currentStepIndex === -1 || currentStepIndex >= activePreset.steps.length) {
      if (currentStepIndex >= activePreset.steps.length) setIsPlaying(false)
      return
    }

    const step = activePreset.steps[currentStepIndex]
    const executionTimer = setTimeout(() => {
      setLogs(prev => [...prev, step])

      if (step.filePath) {
        setFileTree(prevTree => prevTree.map(item => {
          if (item.path === step.filePath) {
            return { ...item, status: step.fileAction === 'create' ? 'created' : 'modified' }
          }
          return item
        }))
      }

      setCurrentStepIndex(prev => prev + 1)
    }, step.delay)

    return () => clearTimeout(executionTimer)
  }, [currentStepIndex, activePresetId])

  const handleCustomSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!customInput.trim() || isPlaying) return

    setIsPlaying(true)
    setLogs([])
    setCurrentStepIndex(-1)
    setCurrentTypingText('')
    setIsTypingInput(true)

    let charIndex = 0
    const commandText = `lfa setup "${customInput}"`

    const typingTimer = setInterval(() => {
      if (charIndex < commandText.length) {
        setCurrentTypingText(prev => prev + commandText.charAt(charIndex))
        charIndex++
      } else {
        clearInterval(typingTimer)
        setIsTypingInput(false)

        const customSteps: TerminalStep[] = [
          { type: 'input', text: commandText, delay: 100 },
          { type: 'spinner', text: 'Analyse de votre environnement...', delay: 800 },
          { type: 'thinking', text: 'Génération de la configuration OpenCode...', delay: 1100 },
          { type: 'file-change', text: `📝 Configuration générée pour : ${customInput}`, delay: 400, filePath: '.config/opencode/opencode.jsonc', fileAction: 'modify' },
          { type: 'output', text: `✓ Environnement "${customInput}" configuré avec succès.`, delay: 200 },
          { type: 'success', text: `🚀 Agent terminé en 2.8s.`, delay: 400 }
        ]

        let stepIdx = 0
        const triggerNextStep = () => {
          if (stepIdx < customSteps.length) {
            const s = customSteps[stepIdx]
            setTimeout(() => {
              setLogs(prev => [...prev, s])
              if (s.filePath) {
                setFileTree(prevTree => prevTree.map(item => {
                  if (item.path === s.filePath) return { ...item, status: 'modified' }
                  return item
                }))
              }
              stepIdx++
              triggerNextStep()
            }, s.delay)
          } else {
            setIsPlaying(false)
            setCustomInput('')
          }
        }
        triggerNextStep()
      }
    }, 40)
  }

  const toggleFolder = (id: string) => {
    setFileTree(prev => prev.map(item =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ))
  }

  const currentCommandStr = isTypingInput ? currentTypingText : (logs[0]?.text || activePreset.command)

  return (
    <div id="playground" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden border-t border-lfa-accent/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#58A6FF_1px,transparent_1px),linear-gradient(to_bottom,#58A6FF_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-[0.03] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lfa-accent/10 border border-lfa-accent/30 text-lfa-accent text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Bac à sable interactif
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-lfa-text font-sans">
          Expérimentez le terminal autonome
        </h2>
        <p className="text-lfa-text/60 text-base mt-3 max-w-2xl mx-auto">
          Sélectionnez un cas d'usage ou formulez votre propre commande pour observer LFA CLI en action.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 max-w-4xl mx-auto relative z-10">
        {TERMINAL_PRESETS.map((preset) => (
          <button
            key={preset.id}
            disabled={isPlaying}
            onClick={() => {
              setActivePresetId(preset.id)
              setLogs([])
              setFileTree(INITIAL_FILE_TREE.map(f => ({ ...f, status: 'unchanged' })))
              setCurrentTypingText('')
              setCurrentStepIndex(-1)
            }}
            className={`px-4 py-3 rounded-xl border text-left transition-all ${
              activePresetId === preset.id
                ? 'bg-lfa-accent/10 border-lfa-accent/40 text-lfa-text'
                : 'bg-lfa-bg border-lfa-accent/10 text-lfa-text/60 hover:border-lfa-accent/30 hover:text-lfa-accent'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <div className={`text-[10px] font-mono font-bold mb-1 tracking-wider ${activePresetId === preset.id ? 'text-lfa-accent' : 'text-lfa-text/30'}`}>
              PRESET {preset.id.toUpperCase()}
            </div>
            <div className="text-xs sm:text-sm font-semibold line-clamp-1">{preset.name.replace(/^[^\s]+\s/, '')}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        <div className="lg:col-span-4 bg-lfa-surface/40 backdrop-blur border border-lfa-accent/20 rounded-2xl p-5 flex flex-col h-[520px] shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-lfa-accent/20 mb-4">
            <span className="text-xs font-mono font-bold text-lfa-accent uppercase tracking-wider flex items-center gap-1.5 italic">
              <Folder className="w-4 h-4 text-lfa-accent" /> Explorateur
            </span>
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-lfa-bg border border-lfa-accent/20 text-lfa-accent">
              opencode
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1 pr-1">
            {fileTree.map((item) => {
              const depth = item.path.split('/').length - 1

              if (item.type === 'folder') {
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleFolder(item.id)}
                    style={{ paddingLeft: `${depth * 12}px` }}
                    className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-mono text-lfa-text/80 hover:bg-lfa-accent/10 cursor-pointer select-none transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lfa-text/30 mr-0.5">{item.isOpen ? '├─' : '└─'}</span>
                      {item.isOpen ? (
                        <FolderOpen className="w-4 h-4 text-lfa-accent" />
                      ) : (
                        <Folder className="w-4 h-4 text-lfa-text/40 group-hover:text-lfa-accent transition-colors" />
                      )}
                      <span className="group-hover:text-lfa-accent transition-colors">{item.name}/</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 text-lfa-text/30 transition-transform ${item.isOpen ? 'rotate-90 text-lfa-accent' : ''}`} />
                  </div>
                )
              }

              const parentPath = item.path.substring(0, item.path.lastIndexOf('/'))
              const parentItem = fileTree.find(f => f.path === parentPath)
              if (parentItem && !parentItem.isOpen) return null

              return (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  style={{ paddingLeft: `${depth * 12 + 8}px` }}
                  animate={{
                    scale: item.status !== 'unchanged' ? [1, 1.05, 1] : 1,
                    backgroundColor: item.status === 'created' ? 'rgba(88, 166, 255, 0.08)' : item.status === 'modified' ? 'rgba(46, 160, 67, 0.08)' : 'rgba(0,0,0,0)'
                  }}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-mono select-none group transition-all ${
                    item.status === 'created' ? 'bg-lfa-accent/10 text-lfa-accent' :
                    item.status === 'modified' ? 'bg-lfa-success/10 text-lfa-success' :
                    'text-lfa-text/60 hover:text-lfa-text hover:bg-lfa-accent/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lfa-text/30">├─</span>
                    <FileCode className={`w-3.5 h-3.5 ${item.status === 'created' || item.status === 'modified' ? 'text-lfa-accent' : 'text-lfa-text/40'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.status !== 'unchanged' && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded border uppercase font-sans animate-pulse"
                      style={{ color: item.status === 'created' ? '#58A6FF' : '#2EA043', borderColor: item.status === 'created' ? '#58A6FF40' : '#2EA04340' }}>
                      {item.status === 'created' ? 'Nouveau' : 'Modifié'}
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-lfa-accent/20 text-left font-mono shrink-0">
            <div className="text-[10px] text-lfa-text/30 font-bold mb-3 tracking-widest">TÉLÉMÉTRIE</div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-lfa-text/50">CPU</span>
                  <span className="text-lfa-accent">42%</span>
                </div>
                <div className="h-1 bg-lfa-accent/20 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-lfa-accent w-[42%] rounded-full shadow-[0_0_8px_rgba(88,166,255,0.6)]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-lfa-text/50">RAM</span>
                  <span className="text-lfa-warning">8.2 GB</span>
                </div>
                <div className="h-1 bg-lfa-accent/20 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-lfa-warning w-[68%] rounded-full shadow-[0_0_8px_rgba(210,153,34,0.6)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-lfa-accent/20 mt-3 text-[10px] text-lfa-text/30 flex items-center justify-between font-mono">
            <span>ROOT: ~/.config/opencode</span>
            <span>FILES: {fileTree.length}</span>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col h-[520px]">
          <div className="bg-lfa-surface/40 border-t border-x border-lfa-accent/20 rounded-t-2xl px-4 py-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] block" />
              <div className="h-4 w-px bg-lfa-accent/20 mx-1.5" />
              <span className="text-lfa-text/60 font-mono text-xs flex items-center gap-1.5">
                <TermIcon className="w-3.5 h-3.5 text-lfa-accent" /> bash ~ lfa-cli
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isPlaying}
                className="flex items-center gap-1 px-3 py-1 rounded bg-lfa-accent text-lfa-bg font-sans text-xs font-bold hover:bg-lfa-accent/90 hover:shadow-[0_0_12px_rgba(88,166,255,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <Play className="w-3 h-3 fill-lfa-bg" /> Exécuter
              </button>

              <button
                onClick={() => {
                  setLogs([])
                  setFileTree(INITIAL_FILE_TREE.map(f => ({ ...f, status: 'unchanged' })))
                  setCurrentStepIndex(-1)
                  setCurrentTypingText('')
                  setIsPlaying(false)
                }}
                className="p-1 text-lfa-text/60 hover:text-lfa-accent hover:bg-lfa-accent/10 border border-transparent hover:border-lfa-accent/20 rounded transition-all cursor-pointer"
                title="Vider la console"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div
            ref={terminalScreenRef}
            className="flex-1 bg-lfa-bg/90 border-x border-b border-lfa-accent/20 p-5 rounded-b-2xl font-mono text-xs/relaxed text-lfa-text overflow-y-auto"
          >
            <div className="text-lfa-text/30 mb-2 font-mono">
              # LFA CLI v0.1.0 — Installateur OpenCode<br />
              # Cliquez sur "Exécuter" ou tapez une instruction ci-dessous.
            </div>

            <div className="space-y-1.5">
              {(isPlaying || logs.length > 0 || currentTypingText) && (
                <div className="flex items-start text-lfa-accent">
                  <span className="text-lfa-accent mr-2 select-none">$</span>
                  <p className="flex-1 whitespace-pre-wrap break-all">
                    {currentCommandStr}
                    {isTypingInput && showPromptCursor && (
                      <span className="inline-block w-1.5 h-3.5 bg-lfa-accent ml-0.5 border-l animate-blink" />
                    )}
                  </p>
                </div>
              )}

              {logs.map((step, idx) => {
                if (step.type === 'input') return null

                if (step.type === 'spinner') {
                  const isCurrentSpinner = isPlaying && idx === logs.length - 1
                  return (
                    <div key={idx} className="flex items-center gap-2 text-lfa-text/60">
                      {isCurrentSpinner ? (
                        <div className="w-3.5 h-3.5 rounded-full border border-t-lfa-accent border-r-lfa-accent/20 animate-spin" />
                      ) : (
                        <Check className="w-3.5 h-3.5 text-lfa-accent" />
                      )}
                      <span>{step.text}</span>
                    </div>
                  )
                }

                if (step.type === 'thinking') {
                  return (
                    <div key={idx} className="flex items-center gap-2 text-lfa-text/40 italic">
                      <span>🤖</span>
                      <span>{step.text}</span>
                    </div>
                  )
                }

                if (step.type === 'file-change') {
                  return (
                    <div key={idx} className="flex items-center gap-1.5 text-lfa-accent font-bold font-mono pl-3">
                      <span>{step.text}</span>
                    </div>
                  )
                }

                if (step.type === 'success') {
                  return (
                    <div key={idx} className="mt-2 text-lfa-success font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-lfa-success" />
                      <span>{step.text}</span>
                    </div>
                  )
                }

                return (
                  <div key={idx} className="whitespace-pre-wrap text-lfa-text/80">
                    {step.text}
                  </div>
                )
              })}
            </div>

            {!isPlaying && logs.length === 0 && (
              <div className="flex items-center text-lfa-text/40">
                <span className="text-lfa-text/40 mr-2">$</span>
                <span className="text-lfa-text/40 italic">En attente de commandes... (cliquez sur "Exécuter")</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <form onSubmit={handleCustomSubmit} className="mt-5 max-w-4xl mx-auto flex items-center gap-2 relative z-10">
        <div className="flex-1 bg-lfa-bg border border-lfa-accent/20 rounded-xl px-4 py-2 flex items-center gap-2 focus-within:ring-1 focus-within:ring-lfa-accent focus-within:border-lfa-accent transition-all">
          <span className="font-mono text-lfa-text/40 text-sm font-bold">$ lfa setup</span>
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            disabled={isPlaying}
            placeholder='Nom du projet (ex: "mon-app")'
            className="flex-1 bg-transparent border-none text-lfa-text font-mono text-xs focus:ring-0 focus:outline-none placeholder-lfa-text/40 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isPlaying || !customInput.trim()}
          className="px-5 py-2.5 rounded-xl bg-lfa-accent hover:bg-lfa-accent/90 text-lfa-bg font-sans font-bold text-xs flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md hover:shadow-lfa-accent/20"
        >
          <Sparkles className="w-3.5 h-3.5 fill-lfa-bg text-lfa-bg" /> Configurer
        </button>
      </form>
    </div>
  )
}
