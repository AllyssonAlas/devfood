import styled from 'styled-components'

export const Container = styled.div`
  max-width: 80rem;
  margin: 6rem auto;
  padding: 4rem;

  h1 {
    margin: 2rem auto;
    text-align: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 25rem;
  border: rgba(150, 150, 150, 1) solid 0.1rem;
  width: 40rem;
  align-items: center;
  padding-top: 2rem;
  margin: 0 auto;

  span {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  input {
    display: inline;
    width: 20rem;
    border: rgb(175, 175, 175, 1) solid 0.2rem;
    border-radius: 0.4rem;
    margin-bottom: 1.5rem;
    height: 2.7rem;
    padding: 0 0.5rem;
    font-size: 1.4rem;
  }

  input ~ input {
    margin-bottom: 3rem;
  }

  button {
    background-color: rgb(255, 115, 0);
    border: 0;
    border-radius: 0.4rem;
    color: rgba(255, 255, 255, 1);
    height: 2.5rem;
    width: 20rem;
  }
`
