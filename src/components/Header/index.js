import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GoSignOut} from 'react-icons/go'
import PropTypes from 'prop-types'

import px2vw from '../../utils/px2vw'

import {store} from '../UserProvider'

import {Container} from './styles'

export default function Header({user}) {
  const {dispatch} = useContext(store)

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
              <GoSignOut size={px2vw(32)} />
            </NavLink>
          </div>
        </>
      )}
    </Container>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.number,
    token: PropTypes.string,
    user: PropTypes.number,
  }).isRequired,
}
