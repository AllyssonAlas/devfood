import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Auth} exact />
        <Route path={'/home'} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
