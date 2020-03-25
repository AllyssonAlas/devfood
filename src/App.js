import React from 'react'
import {ToastContainer} from 'react-toastify'

import {UserProvider} from './components/UserProvider'

import Routes from './routes'

import GlobalStyles from './styles/global'

function App() {
  return (
    <UserProvider>
      <Routes />
      <GlobalStyles />
      <ToastContainer position={'top-left'} autoClose={3000} />
    </UserProvider>
  )
}

export default App
