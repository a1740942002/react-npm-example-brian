import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button'

interface Config {
  style: 'vertical' | 'horizontal'
  defaultChain: string
  chains: any[]
  theme: {
    accentColor: string
    secondaryColor: string
    darkMode: true
  }
}

const initialConfig: Config = {
  style: 'vertical',
  defaultChain: '5',
  chains: [],
  theme: {
    accentColor: '#f0f0f0',
    secondaryColor: 'f0f0f0',
    darkMode: true
  }
}

function App() {
  const [count, setCount] = useState(0)

  const [config, setConfig] = useState<Config>(initialConfig)

  return (
    <div className="App">
      <XSwapWidget config={config} />
    </div>
  )
}

export default App

function XSwapWidget(props: any) {
  return <h1>X Swap</h1>
}
