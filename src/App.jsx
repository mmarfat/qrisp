import { useState } from 'react';
import { Button } from "@/components/ui/button"


const App = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
        <p>{counter}</p>
        <Button onClick={handleCounter}>Click me</Button>
    </div>
  )
}

export default App