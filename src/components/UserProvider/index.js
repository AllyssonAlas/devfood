import React, {createContext, useReducer} from 'react'

const inititalState = {}
const store = createContext(inititalState)
const {Provider} = store

function UserProvider({children}) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {state: action.payload}
      case 'LOGOUT':
        return inititalState
      case 'REFRESH': {
        const user = localStorage.getItem('user')
        if (user) {
          return {state: JSON.parse(user)}
        }
      }
      default:
        return state
    }
  }, inititalState)

  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, UserProvider}
