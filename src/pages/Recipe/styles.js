import styled from 'styled-components'

export const RecipeCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  color: rgba(20, 116, 75);
  flex-direction: column;
  min-height: 35rem;
  justify-content: space-between;

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
      text-align: justify;
      font-weight: 600;
      font-size: 1.2rem;
      min-height: 20rem;
      padding: 1rem;
      width: 100%;
    }
  }
`
