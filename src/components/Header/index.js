import React, {useContext, useEffect, useState, useRef} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {GoSignOut} from 'react-icons/go'
import PropTypes from 'prop-types'

import px2vw from '../../utils/px2vw'

import {store} from '../UserProvider'

import {Container, DropDownMenu} from './styles'

export default function Header({user}) {
  const {dispatch} = useContext(store)
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const [dropMenu, setDropMenu] = useState(false)
  const location = useLocation()
  const dropDownRef = useRef()

  function handleLogout() {
    localStorage.removeItem('user')
    dispatch({type: 'LOGOUT'})
  }

  function handleClick(e) {
    const insideMenu = e.path.findIndex(element => element.tagName === 'ASIDE')

    if (insideMenu === -1) {
      setDropMenu(false)
    }
  }

  function setMenu(detectDeviceWidth) {
    if (detectDeviceWidth < 768) {
      return (
        <DropDownMenu ref={dropDownRef} onClick={false}>
          <button type={'button'} onClick={() => setDropMenu(!dropMenu)}>
            <img src={user.image} alt={'Imagem do usuário'} />
          </button>
          {dropMenu && (
            <aside>
              <strong>{user.name}</strong>
              <NavLink to={'/home'}>Receitas </NavLink>
              <NavLink to={'/myRecipes'}>Minhas Receitas</NavLink>
              <NavLink to={'/recipeForm'}>Adicionar Receita</NavLink>
              <NavLink to={'/'} onClick={handleLogout}>
                Sair
              </NavLink>
            </aside>
          )}
        </DropDownMenu>
      )
    }
    return (
      <>
        <div>
          <NavLink to={'/home'}>Receitas </NavLink>
          <NavLink to={'/myRecipes'}>Minhas Receitas</NavLink>
          <NavLink to={'/recipeForm'}>Adicionar Receita</NavLink>
        </div>

        <div>
          <p>{user.name}</p>
          <img src={user.image} alt={'Imagem do usuário'} />
          <NavLink to={'/'} onClick={handleLogout} title={'Sair'}>
            <GoSignOut size={px2vw(32)} />
          </NavLink>
        </div>
      </>
    )
  }

  useEffect(() => {
    setDropMenu(false)
    window.addEventListener('resize', () => setDeviceWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => false)
  }, [deviceWidth])

  useEffect(() => {
    setDropMenu(false)
  }, [location])

  useEffect(() => {
    document.addEventListener('click', handleClick, false)

    return () => document.removeEventListener('click', handleClick, false)
  }, [])

  return (
    <Container>
      <h1>
        Dev
        <span>food</span>
      </h1>
      {user && setMenu(deviceWidth)}
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
