import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

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
    <Container bareContent>
      <h1>
        É necessário está logado para acessar
        <br />
        conteúdo ou conteúdo não existe
      </h1>
      <Button title={'Página de login'} onClick={() => history.push('/')} />
    </Container>
  )
}

Warning.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}
