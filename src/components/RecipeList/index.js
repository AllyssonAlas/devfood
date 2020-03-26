import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FaTrashAlt, FaPencilAlt, FaSpinner} from 'react-icons/fa'
import PropTypes from 'prop-types'

import api from '../../services/api'

import {Container, RecipeCard, IconButton} from './styles'

export default function RecipeList({recipes, owner}) {
  const [recipeList, setRecipeList] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  /* eslint-disable camelcase */
  async function handleDelete(id_recipe) {
    setLoading(true)
    try {
      await api.delete(`/recipe/${id_recipe}`)

      const recipeIndex = recipes.findIndex(r => r.id === id_recipe)

      if (recipeIndex >= 0) {
        recipes.splice(recipeIndex, 1)
      }

      setRecipeList(recipes)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  /* eslint-enable camelcase */

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
                <IconButton loading={loading} onClick={() => handleDelete(recipe.id)}>
                  {loading ? <FaSpinner /> : <FaTrashAlt />}
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
