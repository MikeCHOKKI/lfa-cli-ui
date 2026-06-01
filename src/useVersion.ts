import { useEffect, useState } from 'react'

const REPO = 'MikeCHOKKI/lfa-cli-ai'
const BRANCH = 'main'

export function useVersion() {
  const [version, setVersion] = useState('v0.1.0')
  const [agents, setAgents] = useState(22)
  const [skills, setSkills] = useState(18)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.tag_name) setVersion(data.tag_name)
      })
      .catch(() => {})

    fetch(`https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`)
      .then((r) => r.json())
      .then((data) => {
        if (!data?.tree) return
        const agentCount = data.tree.filter(
          (f: { path: string }) => f.path.startsWith('data/agents/') && f.path.endsWith('.md')
        ).length
        const skillCount = data.tree.filter(
          (f: { path: string; type: string }) => /^data\/skills\/[^/]+$/.test(f.path) && f.type === 'tree'
        ).length
        if (agentCount) setAgents(agentCount)
        if (skillCount) setSkills(skillCount)
      })
      .catch(() => {})
  }, [])

  return { version, agents, skills }
}
