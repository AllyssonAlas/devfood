import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

const Container = styled.div`
  align-items: center;
  background-color: rgb(220, 220, 220, 1);
  border-radius: 0.8rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  width: 100%;

  h1 {
    color: rgba(255, 115, 0, 1);
    display: block;
    font-size: 1.7rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 4rem;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  & > div {
    padding: ${px2vw(32)} ${px2vw(24)};
    height: 100%;
  }

  h1 + button {
    align-self: center;
  }
`

export default Container
