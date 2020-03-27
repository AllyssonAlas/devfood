import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Form = styled.form`
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: rgba(150, 150, 150, 0.5) solid 0.1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: ${px2vw(400)};
  margin: 0 auto;
  padding-top: 1rem;
  width: ${px2vw(800)};

  @media (max-width: 768px) {
    height: ${px2vw(600)};
    width: ${px2vw(1200)};
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
  }

  input {
    display: inline;
    border: rgb(175, 175, 175, 1) solid ${px2vw(3)};
    border-radius: ${px2vw(24)};
    height: ${px2vw(40)};
    margin-bottom: ${px2vw(10)};
    padding: 0 ${px2vw(12)};
    width: ${px2vw(350)};

    @media (max-width: 768px) {
      height: ${px2vw(70)};
      width: ${px2vw(520)};
    }
  }

  input ~ input {
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      margin-bottom: 3.5rem;
    }
  }
`
