import styled from 'styled-components'

export const RecipeCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  color: rgba(20, 116, 75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 35rem;

  div:first-child {
    align-items: center;
    border-bottom: rgba(20, 116, 75) solid 0.1rem;
    height: 4.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
      min-height: 20rem;
      padding: 1rem;
      text-align: justify;
      width: 100%;
    }
  }
`
