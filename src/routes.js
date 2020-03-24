import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header'

import Auth from './pages/Auth'
import Home from './pages/Home'
import MyRecipes from './pages/MyRecipes'
import NewRecipe from './pages/NewRecipe'
import Recipe from './pages/Recipe'

export default function Routes() {
  /*put the dispatch refresh here. */
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} component={Auth} exact />
        <Route path={'/home'} component={Home} />
        <Route path={'/myRecipes'} component={MyRecipes} />
        <Route path={'/newRecipe'} component={NewRecipe} />
        <Route path={'/recipe/:recipeId'} component={Recipe} />
      </Switch>
    </BrowserRouter>
  )
}
