import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button>Hello World</Button>
    </div>
  )
}

export default App
