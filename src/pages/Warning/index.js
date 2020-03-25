import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import Container from '../../components/Container'
import Button from '../../components/Button'

export default function Warning({isAuthed}) {
  const history = useHistory()

  useEffect(() => {
    if (isAuthed) {
      history.push('/home')
    }
  }, [isAuthed])

  return (
    <Container>
      <h1>
        Para acessar esse conteúdo você precisa estar logado
        <br />
        ou conteúdo não existe
      </h1>
      <Button title={'Página de login'} onClick={() => history.push('/')} />
    </Container>
  )
}
