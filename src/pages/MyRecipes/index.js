import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import Loading from '../../components/Loading'
import Container from '../../components/Container'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'

export default function MyRecipes() {
  const [loading, setLoading] = useState(true)
  const [userRecipes, setUserRecipes] = useState([])
  const {state} = useContext(store)

  useEffect(() => {
    async function getUserRecipes() {
      const {id} = state.user

      const recipesRequest = await api.get('/recipe', {params: {user: id}})

      if (recipesRequest) {
        setUserRecipes(recipesRequest.data)
      }

      setLoading(false)
    }

    if (state.user !== undefined) {
      getUserRecipes()
    }
  }, [state])

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      {loading ? (
        <h1> arregando</h1>
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
