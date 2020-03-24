import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'
import Loading from '../../components/Loading'

export default function MyRecipes() {
  const [loading, setLoading] = useState(true)
  const [userRecipes, setUserRecipes] = useState([])
  const {dispatch, state} = useContext(store)

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

  useEffect(() => {
    dispatch({type: 'REFRESH'})
  }, [])

  return (
    <PageContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Minhas Receitas</h1>
          <div>
            <RecipeList recipes={userRecipes} owner />
          </div>
        </>
      )}
    </PageContainer>
  )
}
