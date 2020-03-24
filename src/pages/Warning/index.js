import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import Button from '../../components/Button'

export default function Home({isAuthed}) {
  const history = useHistory()

  useEffect(() => {
    console.log(isAuthed)
    if (isAuthed) {
      history.push('/home')
    }
  }, [isAuthed])

  return (
    <PageContainer>
      <h1>Para acessar esse conteúdo você precisa estar logado</h1>
      <div>
        <Button title={'Página de login'} onClick={() => history.push('/')} />
      </div>
    </PageContainer>
  )
}
