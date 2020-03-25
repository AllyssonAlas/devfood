import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Form = styled.form`
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: rgba(150, 150, 150, 0.5) solid 0.1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: ${px2vw(375)};
  margin: 0 auto;
  width: ${px2vw(600)};

  @media (min-width: 768px) {
    height: ${px2vw(350)};
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  input {
    display: inline;
    border: rgb(175, 175, 175, 1) solid ${px2vw(3)};
    border-radius: ${px2vw(24)};
    height: ${px2vw(40)};
    margin-bottom: ${px2vw(10)};
    padding: 0 ${px2vw(12)};
    width: ${px2vw(350)};
  }

  input ~ input {
    margin-bottom: ${px2vw(40)};
  }
`
