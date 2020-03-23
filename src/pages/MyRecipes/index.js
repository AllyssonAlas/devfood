import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'

export default function MyRecipes() {
  const [userRecipes, setUserRecipes] = useState([])
  const userProvider = useContext(store)
  const {dispatch} = userProvider

  useEffect(() => {
    dispatch({type: 'REFRESH'})

    async function getUserRecipes() {
      const {id} = userProvider.state.user || ''

      const recipesRequest = await api.get('/recipe', {params: {user: id}})

      setUserRecipes(recipesRequest.data)
    }

    getUserRecipes()
  }, [])
  return (
    <PageContainer>
      <h1>Minhas Receitas</h1>
      <div>
        <RecipeList recipes={userRecipes} owner />
      </div>
    </PageContainer>
  )
}
