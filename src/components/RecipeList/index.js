import React from 'react'

import {Container, RecipeCard} from './styles'

export default function RecipeList({recipes}) {
  return (
    <Container>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id}>
          <strong>{recipe.title}</strong>
          <hr />
          <div>
            <em>Criado por {recipe.user.name}</em>
            <p>{recipe.category.name} </p>
          </div>
          <div>
            <p>{recipe.description}</p>
          </div>
          <div>
            <a href="#">Ver receita</a>
          </div>
        </RecipeCard>
      ))}
    </Container>
  )
}
