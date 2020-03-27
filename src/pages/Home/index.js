import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import Container from '../../components/Container'
import Loading from '../../components/Loading'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'
import Button from '../../components/Button'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function getRecipes() {
      try {
        const recipesRequest = await api.get('/recipe')
        if (recipesRequest) {
          setRecipes(recipesRequest.data)
        }
      } catch (err) {
        setRecipes([])
      } finally {
        setLoading(false)
      }
    }
    getRecipes()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Container bareContent={recipes.length === 0}>
      {recipes.length === 0 ? (
        <>
          <h1>Não há receitas cadastradas</h1>
          <Button title={'Nova receita'} onClick={() => history.push('recipeForm')} />
        </>
      ) : (
        <>
          <h1>Receitas</h1>
          <div>
            <RecipeList recipes={recipes} />
          </div>
        </>
      )}
    </Container>
  )
}
