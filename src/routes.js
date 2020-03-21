import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'
import Header from './components/Header'

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} component={Auth} exact />
        <Route path={'/home'} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
