import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PageContainer from '../../components/PageContainer'
import {authenticate} from '../../services/auth'
import {store} from '../../components/UserProvider'

import {Form} from './styles'

export default function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const user = useContext(store)
  const {dispatch} = user

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      if (!username || !password) {
        return toast.error('Há campos que precisam ser preenchidos corretamente.', {
          position: toast.POSITION.TOP_CENTER,
        })
      }

      const user = await authenticate(username, password)

      dispatch({type: 'LOGIN', payload: user.data})

      if (!user) {
        throw new Error()
      }

      history.push('home')
    } catch (err) {
      return toast.error('Usuário não existe', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <PageContainer>
      <h1>Entre com seus dados</h1>
      <Form onSubmit={handleSubmit}>
        <span>Email</span>
        <input
          placeholder={'exemplo@exemplo.com'}
          type={'email'}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <span>Senha</span>
        <input type={'password'} value={password} onChange={e => setPassword(e.target.value)} />

        <button type={'submit'}> Login </button>
      </Form>
    </PageContainer>
  )
}
