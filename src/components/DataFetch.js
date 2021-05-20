import React, { useState, useEffect } from 'react'

function DataFetch() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const responce = await fetch('https://api.randomuser.me/')
    const data = await responce.json()
    const [item] = data.results

    setUser(item)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {loading ? <h1>Loading ...</h1> : <h1>{user.name.first} {user.name.last}</h1>}
    </div>
  )
}

export default DataFetch
