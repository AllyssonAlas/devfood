import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const userProvider = useContext(store)
  const {dispatch} = userProvider

  useEffect(() => {
    dispatch({type: 'REFRESH'})
    async function getRecipes() {
      const recipesRequest = await api.get('/recipe')
      setRecipes(recipesRequest.data)
    }

    getRecipes()
  }, [])
  return (
    <PageContainer>
      <h1>Receitas</h1>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </PageContainer>
  )
}
