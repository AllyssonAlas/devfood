import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import PropTypes from 'prop-types'

import 'react-toastify/dist/ReactToastify.css'

import {store} from '../../components/UserProvider'
import Loading from '../../components/Loading'
import Container from '../../components/Container'
import Button from '../../components/Button'

import api from '../../services/api'

import {RecipeCard} from './styles'

export default function Recipe({match}) {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState({})
  const {recipeId} = match.params
  const {state} = useContext(store)
  const history = useHistory()

  /* eslint-disable camelcase */

  async function handleDelete(id_recipe) {
    try {
      const deleteRequest = await api.delete(`/recipe/${id_recipe}`)

      if (deleteRequest) {
        history.goBack()
        toast.success('Receita apagada com sucesso')
      }
    } catch (err) {
      toast.error('Não foi possivel apagar a receita')
    }
  }

  useEffect(() => {
    async function getRecipe(id_receita) {
      const recipeRequest = await api.get(`/recipe/${id_receita}`)
      await setRecipe(recipeRequest.data)
      setLoading(false)
    }
    getRecipe(recipeId)
  }, [])
  /* eslint-enable camelcase */

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <div>
        <RecipeCard>
          <div>
            <strong>Criado por {recipe.user.name}</strong>
            <strong>{recipe.category.name}</strong>
          </div>
          <div>
            <p>{recipe.description}</p>
          </div>
          {recipe.user.id === state.user.id && (
            <div>
              <Button title={'Editar Receita'} onClick={() => history.push(`/recipeForm/${recipe.id}`)} />
              <Button title={'Apagar Receita'} onClick={() => handleDelete(recipeId)} type={'button'} />
            </div>
          )}
        </RecipeCard>
      </div>
    </Container>
  )
}

Recipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.number,
    }),
  }).isRequired,
}
