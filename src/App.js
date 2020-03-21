import React from 'react'
import {ToastContainer} from 'react-toastify'

import Container from './components/Container'
import {UserProvider} from './components/UserProvider'
import Routes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <UserProvider>
      <Container>
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </Container>
    </UserProvider>
  )
}

export default App
