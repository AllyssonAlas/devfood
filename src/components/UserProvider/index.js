import React, {createContext, useReducer} from 'react'
import PropTypes from 'prop-types'

const initialState = {}
const store = createContext(initialState)
const {Provider} = store

function UserProvider({children}) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {user: action.payload}
      case 'LOGOUT':
        return initialState
      case 'REFRESH':
        {
          const user = localStorage.getItem('user')
          if (user) {
            return {user: JSON.parse(user)}
          }
        }
        break
      default:
        return state
    }
  }, initialState)

  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, UserProvider}

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
