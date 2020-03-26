import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

const Container = styled.div`
  background-color: rgb(220, 220, 220, 1);
  border-radius: 0.8rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2rem auto;
  min-height: ${px2vw(500)};
  padding: 2rem;
  width: ${px2vw(1250)};

  h1 {
    color: rgba(255, 115, 0, 1);
    display: block;
    font-size: 1.7rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  div {
    padding: ${px2vw(32)} ${px2vw(24)};
  }

  h1 + button {
    align-self: center;
  }
`

export default Container
