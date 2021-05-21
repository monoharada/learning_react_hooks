import React, { useEffect, useState, useRef } from 'react'

function CounUp() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()
  const reSetCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>ストップ</button>
      <button onClick={intervalRef.current}>再開</button>
    </div>
  )
}

export default CounUp
