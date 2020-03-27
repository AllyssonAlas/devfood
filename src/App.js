import React from 'react'
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import {UserProvider} from './components/UserProvider'

import Routes from './routes'

import GlobalStyles from './styles/global'

function App() {
  return (
    <UserProvider>
      <Routes />
      <GlobalStyles />
      <ToastContainer position={'top-left'} autoClose={3000} style={{fontSize: 14}} />
    </UserProvider>
  )
}

export default App
