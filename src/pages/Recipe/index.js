import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'
import Button from '../../components/Button'
import Loading from '../../components/Loading'

import api from '../../services/api'

import {RecipeCard} from './styles'

export default function Recipe({match}) {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState({})
  const {recipeId} = match.params
  const {dispatch, state} = useContext(store)
  const history = useHistory()

  /* eslint-disable camelcase */

  async function handleDelete(id_recipe) {
    console.log(id_recipe)
    try {
      const deleteRequest = await api.delete(`/recipe/${id_recipe}`)

      if (deleteRequest) {
        history.goBack()
        toast.success('Receita apagada com sucesso')
      }
    } catch (err) {
      toast.error('Não foi possivel apagar a receitar')
      console.log(err)
    }
  }

  useEffect(() => {
    dispatch({type: 'REFRESH'})
    async function getRecipe(id_receita) {
      const recipeRequest = await api.get(`/recipe/${id_receita}`)
      await setRecipe(recipeRequest.data)
      setLoading(false)
      console.log(recipeRequest.data)
    }
    getRecipe(recipeId)
  }, [])
  /* eslint-enable camelcase */

  return (
    <PageContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                  <Button title={'Editar Receita'} />
                  <Button title={'Apagar Receita'} onClick={() => handleDelete(recipeId)} type={'button'} />
                </div>
              )}
            </RecipeCard>
          </div>
        </>
      )}
    </PageContainer>
  )
}
