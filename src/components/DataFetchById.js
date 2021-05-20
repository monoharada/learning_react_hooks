import React, { useState, useEffect } from 'react'

export default function DataFetchById() {
  const [post, setPost] = useState(null)
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const item = await responce.json()
    setPost(item)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [id])
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      {loading ? <h1>Loading ...</h1> : <div><h1>{post.title}</h1><p>{post.body}</p></div>}
    </div>
  )
}
