import React from 'react'
import ComponentF from './ComponentF'
import { UserContext } from '../App'


function ComponentE() {
  return (
    <div>
      <ComponentF />
      <UserContext.Consumer>
        {
          user => {
            return <div>{user.age}</div>
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentE
