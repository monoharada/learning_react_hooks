import React, { useContext } from 'react'
import { UserContext, LanguageContext } from '../App'

function ComponentF() {
  const user = useContext(UserContext)
  const language = useContext(LanguageContext)
  return (
    <div>
      {user.name}:{language} hoge
      <>
        {/* <userContext.Consumer>
          {
            user => {
              return (
                <languageContext.Consumer >
                  {
                    language => {rfce
                      return <div>{user.name}:{language}</div>
                    }
                  }
                </languageContext.Consumer>
              )
            }
          }
        </userContext.Consumer> */}

      </>
    </div>
  )
}

export default ComponentF

