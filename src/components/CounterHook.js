import React, { useState } from 'react'

const CounterHook = () => {
  const [count, setCount] = useState('')

  const incrementCount = () => {
    setCount(count + 'o')
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>かうんと　＋</button>
    </div>
  )
}

export default CounterHook
