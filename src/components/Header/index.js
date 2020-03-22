import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GoSignOut} from 'react-icons/go'

import {store} from '../UserProvider'

import {Container} from './styles'

export default function Header() {
  const user = useContext(store)
  const {dispatch} = user

  function handleLogout() {
    localStorage.removeItem('user')
    dispatch({type: 'LOGOUT'})
  }

  return (
    <Container>
      <h1>Dev food</h1>

      {Object.keys(user.state).length !== 0 && (
        <>
          <div>
            <NavLink to={'/home'}>Receitas </NavLink>
            <NavLink to={'/myRecipes'}>Minhas Receitas</NavLink>
            <NavLink to={'/newRecipe'}>Adicionar Nova Receita</NavLink>
          </div>

          <div>
            <p>Allysson</p>
            <NavLink to={'/'} onClick={() => handleLogout()}>
              <GoSignOut size={20} />
            </NavLink>
          </div>
        </>
      )}
    </Container>
  )
}
