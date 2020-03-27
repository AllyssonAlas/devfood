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

  async function handleDelete(id) {
    try {
      const deleteRequest = await api.delete(`/recipe/${id}`)

      if (deleteRequest) {
        history.goBack()
        toast.success('Receita apagada com sucesso')
      }
    } catch (err) {
      toast.error('Não foi possivel apagar a receita')
    }
  }

  useEffect(() => {
    async function getRecipe(id) {
      try {
        const recipeRequest = await api.get(`/recipe/${id}`)
        if (recipeRequest) {
          setRecipe(recipeRequest.data)
        }
      } catch (err) {
        setRecipe(null)
      } finally {
        setLoading(false)
      }
    }
    getRecipe(recipeId)
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!loading && !recipe) {
    return (
      <Container>
        <h1>Não foi possivel achar receita</h1>
        <Button title={'Voltar'} onClick={() => history.goBack()} />
      </Container>
    )
  }

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <div>
        <RecipeCard>
          <div>
            <em>Criado por {recipe.user.name}</em>
            <em>{recipe.category.name}</em>
          </div>
          <strong>Descrição</strong>
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
