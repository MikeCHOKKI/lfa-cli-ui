export interface TerminalStep {
  type: 'input' | 'thinking' | 'output' | 'file-change' | 'spinner' | 'success'
  text: string
  delay: number
  filePath?: string
  fileAction?: 'create' | 'modify' | 'delete'
}

export interface TerminalPreset {
  id: string
  name: string
  command: string
  description: string
  steps: TerminalStep[]
}

export interface FileItem {
  id: string
  name: string
  path: string
  type: 'file' | 'folder'
  status?: 'unchanged' | 'created' | 'modified' | 'deleted'
  isOpen?: boolean
}

export interface CLICommandDoc {
  name: string
  args: string
  description: string
  example: string
  badge: 'Core' | 'AI' | 'Git' | 'Config' | 'Interactive'
}

export interface FAQItem {
  question: string
  answer: string
  category: 'Général' | 'Technique' | 'Sécurité'
}
