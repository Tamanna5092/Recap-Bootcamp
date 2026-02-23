import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleCounterIncrease = () => {
        const countIncrese = count + 1
        setCount(countIncrese)
    }
    const handleCounterDecrease = () => {
        const countDecrese = count - 1
        setCount(countDecrese)
    }
    const handleResetCount = () => {
        setCount(0)
    }

  return (
    <div>
      <h3>Counter Number: {count}</h3>
      <button onClick={handleCounterIncrease}>Increase</button>
      <button onClick={handleCounterDecrease}>Decrease</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  )
}
