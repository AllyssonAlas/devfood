import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'

import api from '../../services/api'

import {RecipeCard} from './styles'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const user = useContext(store)
  const {dispatch} = user

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
      <h1>Home</h1>
      <div>
        {recipes.map(item => {
          return (
            <RecipeCard key={item.id}>
              <h2>{item.title}</h2>
              <i>Criado por {item.user.name}</i>
              <p>{item.description}</p>
              <span>{item.category.name}</span>
            </RecipeCard>
          )
        })}
      </div>
    </PageContainer>
  )
}
