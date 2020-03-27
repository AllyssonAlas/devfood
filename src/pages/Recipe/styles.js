import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const RecipeCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1rem;
  color: rgba(20, 116, 75);
  display: flex;
  flex-direction: column;
  min-height: ${px2vw(450)};
  padding: 1rem;
  width: ${px2vw(1200)};
  height: 100%;
  word-break: break-all;

  div {
    align-items: center;
    height: ${px2vw(40)};
    display: flex;
    justify-content: space-between;
    border-bottom: rgba(20, 116, 75) solid 0.1rem;

    @media (max-width: 768px) {
      height: ${px2vw(60)};
    }

    em {
      font-size: 1.2rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  strong {
    color: rgba(255, 115, 0, 1);
    font-size: 2rem;
    margin: 1rem 0;
    align-self: center;
  }

  strong + div {
    align-items: flex-start;
    height: 100%;
    border: 0;
    font-size: 1.5rem;
    text-align: justify;
  }

  div + div {
    border: 0;
    margin: 1rem 0;
  }
`
