import React, {useContext, useEffect} from 'react'
import {NavLink, useLocation, useHistory} from 'react-router-dom'
import {GoSignOut} from 'react-icons/go'

import {store} from '../UserProvider'

import {Container} from './styles'

export default function Header({user}) {
  const {dispatch} = useContext(store)
  const location = useLocation()
  const history = useHistory()

  function handleLogout() {
    localStorage.removeItem('user')
    dispatch({type: 'LOGOUT'})
  }

  return (
    <Container>
      <h1>
        Dev
        <span>food</span>
      </h1>
      {user && (
        <>
          <div>
            <NavLink to={'/home'}>Receitas </NavLink>
            <NavLink to={'/myRecipes'}>Minhas Receitas</NavLink>
            <NavLink to={'/recipeForm'}>Adicionar Nova Receita</NavLink>
          </div>

          <div>
            <p>{user.name}</p>
            <img src={user.image} alt={'Imagem do usuário'} />
            <NavLink to={'/'} onClick={() => handleLogout()} title={'Sair'}>
              <GoSignOut size={30} />
            </NavLink>
          </div>
        </>
      )}
    </Container>
  )
}
