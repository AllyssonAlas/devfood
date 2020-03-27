import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

import {store} from '../../components/UserProvider'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import Container from '../../components/Container'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'

export default function MyRecipes() {
  const [loading, setLoading] = useState(true)
  const [userRecipes, setUserRecipes] = useState([])
  const history = useHistory()
  const {state} = useContext(store)

  useEffect(() => {
    async function getUserRecipes() {
      try {
        const {id} = state.user

        const recipesRequest = await api.get('/recipe', {params: {user: id}})

        if (recipesRequest) {
          setUserRecipes(recipesRequest.data)
        }
      } catch (e) {
        toast.error('Não foi possível encontrar receitas')
      } finally {
        setLoading(false)
      }
    }

    if (state.user !== undefined) {
      getUserRecipes()
    }
  }, [state])

  if (loading) {
    return <Loading />
  }

  return (
    <Container bareContent={userRecipes.length === 0}>
      {userRecipes.length === 0 ? (
        <>
          <h1>Você não tem receitas cadastradas</h1>
          <Button title={'Nova receita'} onClick={() => history.push('recipeForm')} />
        </>
      ) : (
        <>
          <h1>Minhas Receitas</h1>
          <div>
            <RecipeList recipes={userRecipes} owner />
          </div>
        </>
      )}
    </Container>
  )
}
