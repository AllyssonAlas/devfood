import React, {useEffect, useState} from 'react'

import Loading from '../../components/Loading'
import PageContainer from '../../components/PageContainer'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function getRecipes() {
      const recipesRequest = await api.get('/recipe')
      setRecipes(recipesRequest.data)

      setLoading(false)
    }

    getRecipes()
  }, [])

  return (
    <PageContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Receitas</h1>
          <div>
            <RecipeList recipes={recipes} />
          </div>
        </>
      )}
    </PageContainer>
  )
}
