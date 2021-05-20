import React, { useState } from 'react'

const CounterHook = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(prevCout => prevCout + 1)


  const incrementCount10 = () => {
    for (let index = 0; index < 10; index++) {
      setCount(prevCout => prevCout + 1);

    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>かうんと　＋</button>
      <button onClick={incrementCount10}>かうんと　＋10</button>
    </div>
  )
}

export default CounterHook
