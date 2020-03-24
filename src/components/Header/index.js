import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GoSignOut} from 'react-icons/go'

import {store} from '../UserProvider'

import {Container} from './styles'

export default function Header() {
  const {dispatch, state} = useContext(store)

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

      {Object.keys(state).length !== 0 && (
        <>
          <div>
            <NavLink to={'/home'}>Receitas </NavLink>
            <NavLink to={'/myRecipes'}>Minhas Receitas</NavLink>
            <NavLink to={'/newRecipe'}>Adicionar Nova Receita</NavLink>
          </div>

          <div>
            <p>{state.user.name}</p>
            <img src={state.user.image} alt={'Imagem do usuário'} />
            <NavLink to={'/'} onClick={() => handleLogout()} title={'Sair'}>
              <GoSignOut size={30} />
            </NavLink>
          </div>
        </>
      )}
    </Container>
  )
}
