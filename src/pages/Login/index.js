import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import PropTypes from 'prop-types'

import Container from '../../components/Container'
import Button from '../../components/Button'
import {authenticate} from '../../services/auth'
import {store} from '../../components/UserProvider'

import {Form} from './styles'

export default function Login({isAuthed}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {dispatch} = useContext(store)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    try {
      if (!username || !password) {
        return toast.error('Preencha os campos corretamente')
      }

      const user = await authenticate(username, password)

      dispatch({type: 'LOGIN', payload: user.data})

      if (!user) {
        throw new Error()
      }

      return history.push('home')
    } catch (err) {
      return toast.error('Usuário não existe')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthed) {
      history.push('/home')
    }
  }, [isAuthed])

  return (
    <Container>
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

        <Button loading={loading} title={'Login'} type={'submit'} />
      </Form>
    </Container>
  )
}

Login.propTypes = {
  isAuthed: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.number,
    token: PropTypes.string,
    user: PropTypes.number,
  }),
}

Login.defaultProps = {
  isAuthed: false,
}
