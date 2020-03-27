import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FaTrashAlt, FaPencilAlt, FaSpinner} from 'react-icons/fa'
import {toast} from 'react-toastify'
import PropTypes from 'prop-types'

import api from '../../services/api'

import {Container, RecipeCard, IconButton} from './styles'

export default function RecipeList({recipes, owner}) {
  const [recipeList, setRecipeList] = useState([])
  const [recipeSelected, setRecipeSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleDelete(recipeID) {
    setLoading(true)
    setRecipeSelected(recipeID)
    try {
      await api.delete(`/recipe/${recipeID}`)

      const recipeIndex = recipes.findIndex(r => r.id === recipeID)

      if (recipeIndex >= 0) {
        recipes.splice(recipeIndex, 1)
      }
      toast.success('Receita apagada com sucesso')
      setRecipeList(recipes)
    } catch (err) {
      toast.error('Impossível apagar receita')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setRecipeList(recipes)
  }, [])

  return (
    <Container>
      {recipeList.map(recipe => (
        <RecipeCard key={recipe.id}>
          <strong title={recipe.title}>{recipe.title}</strong>
          <div>
            <em>Criado por {recipe.user.name}</em>
            <p>{recipe.category.name}</p>
          </div>
          <div>
            <p>{recipe.description}</p>
          </div>
          <div>
            <Link to={`/recipe/${recipe.id}`}>Ver receita</Link>
            {owner && (
              <div>
                <IconButton onClick={() => history.push(`/recipeForm/${recipe.id}`)}>
                  <FaPencilAlt />
                </IconButton>
                <IconButton
                  loading={loading}
                  selected={recipeSelected === recipe.id}
                  onClick={() => handleDelete(recipe.id)}
                >
                  {loading && recipeSelected === recipe.id ? <FaSpinner /> : <FaTrashAlt />}
                </IconButton>
              </div>
            )}
          </div>
        </RecipeCard>
      ))}
    </Container>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
      }),
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,
        user: PropTypes.number,
      }),
    }),
  ).isRequired,
  owner: PropTypes.bool,
}

RecipeList.defaultProps = {
  owner: false,
}
