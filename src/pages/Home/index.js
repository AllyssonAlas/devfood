import React, {useEffect, useState} from 'react'
import {toast} from 'react-toastify'

import Container from '../../components/Container'
import Loading from '../../components/Loading'
import RecipeList from '../../components/RecipeList'

import api from '../../services/api'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function getRecipes() {
      try {
        const recipesRequest = await api.get('/recipe')
        if (recipesRequest) {
          setRecipes(recipesRequest.data)
        }
      } catch (err) {
        toast.error('Não foi possível encontrar receitas')
        setRecipes(null)
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
    <Container>
      <h1>Receitas</h1>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </Container>
  )
}
