import React from 'react'
import useInput from '../hooks/useInput'

function Form() {


  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')
  const handleSubmit = e => {
    e.preventDefault()
    alert(`hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()


  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">first name</label>
          <input
            type="text"
            {...bindFirstName}
          />
        </div>
        <div>
          <label htmlFor="">last name</label>
          <input
            type="text"
            {...bindLastName}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  )
}

export default Form
