import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  background-color: rgba(255, 115, 0, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
  margin-bottom: 1.5rem;
  padding: 0 2.5rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    a {
      color: rgba(255, 255, 255, 1);
      margin: 0 1.5rem;
      text-decoration: none;
      font-size: 2rem;
    }

    p {
      color: rgba(255, 255, 255, 1);
      font-size: 2rem;
    }

    button {
      align-content: flex-end;
      background-color: rgba(0, 0, 0, 0);
      border: 0;
      display: flex;
      height: 4rem;
      justify-content: center;
      min-width: 2rem;
      margin: 0 1rem;
      width: 4rem;
    }
  }
`
