import React, {useContext, useEffect} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Header'
import {store} from './components/UserProvider'

import Login from './pages/Login'
import Home from './pages/Home'
import MyRecipes from './pages/MyRecipes'
import RecipeForm from './pages/RecipeForm'
import Recipe from './pages/Recipe'
import Warning from './pages/Warning'

export default function Routes() {
  const {dispatch, state} = useContext(store)

  useEffect(() => {
    if (!state) {
      dispatch({type: 'REFRESH'})
    }
  })

  useEffect(() => {
    dispatch({type: 'REFRESH'})
  }, [])

  return (
    <BrowserRouter>
      <Header user={state !== undefined ? state.user : false} />
      <Switch>
        <Route path={'/'} component={() => <Login isAuthed={state !== undefined ? state.user : false} />} exact />
        <Route path={'/warning'} component={() => <Warning isAuthed={state !== undefined} />} />

        {!state ? (
          <Redirect to={{pathname: '/warning'}} />
        ) : (
          <>
            <Route path={'/home'} component={Home} />
            <Route path={'/myRecipes'} component={MyRecipes} />
            <Route path={'/recipeForm/:id?'} component={RecipeForm} />
            <Route path={'/recipe/:recipeId'} component={Recipe} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  )
}
