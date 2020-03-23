import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'

import api from '../../services/api'

import {RecipeCard} from './styles'

export default function MyRecipes() {
  const [userRecipes, setUserRecipes] = useState([])
  const userProvider = useContext(store)
  const {dispatch} = userProvider

  /* eslint-disable camelcase */
  async function handleDelete(id_recipe) {
    try {
      await api.delete(`/recipe/${id_recipe}`)

      setUserRecipes(userRecipes.filter(r => r.id !== id_recipe))
    } catch (err) {
      console.log(err)
    }
  }

  /* eslint-enable camelcase */
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
        {userRecipes.map(recipe => {
          return (
            <RecipeCard key={recipe.id}>
              <h2>{recipe.title}</h2>
              <i>Criado por {recipe.user.name}</i>
              <p>{recipe.description}</p>
              <span>{recipe.category.name}</span>
              <button type={'button'} onClick={() => handleDelete(recipe.id)}>
                Apagar receita
              </button>
            </RecipeCard>
          )
        })}
      </div>
    </PageContainer>
  )
}
