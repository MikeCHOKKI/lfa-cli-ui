import { useEffect, useState } from 'react'

export function useVersion() {
  const [version, setVersion] = useState('v0.1.0')

  useEffect(() => {
    fetch('https://api.github.com/repos/MikeCHOKKI/lfa-cli-ai/releases/latest')
      .then((r) => r.json())
      .then((data) => {
        if (data?.tag_name) setVersion(data.tag_name)
      })
      .catch(() => {})
  }, [])

  return version
}
