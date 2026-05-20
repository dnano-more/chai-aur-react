import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-bold bg-orange-400 text-center py-3">Currency app</h1>
    </div>
  )
}

export default App
