import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  background-color: rgba(255, 115, 0, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
  margin-bottom: 1.5rem;
  padding: 0 2rem;

  h1 {
    color: rgba(255, 255, 255, 1);
    font-size: 2.5rem;

    span {
      font-size: 2rem;
      color: rgb(20, 116, 75);
    }
    br {
      height: 20rem;
      background-color: gold;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      color: rgba(255, 255, 255, 1);
      margin: 0 1.5rem;
      text-decoration: none;
      font-size: 1.5rem;
      text-align: center;
    }

    a:hover {
      opacity: 0.8;
    }

    p {
      color: rgba(255, 255, 255, 1);
      font-size: 2rem;
    }

    img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      margin: 0 1rem;
    }

    img + a {
      align-items: center;
      display: flex;
      height: 4rem;
      justify-content: center;
      padding-top: 0.5rem;
      margin: 0;
      min-width: 2rem;
      width: 4rem;
    }
  }
`
