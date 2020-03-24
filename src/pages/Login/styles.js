import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: rgba(150, 150, 150, 0.5) solid 0.1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: 27rem;
  margin: 0 auto;
  padding-top: 2rem;
  width: 40rem;

  span {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  input {
    display: inline;
    border: rgb(175, 175, 175, 1) solid 0.2rem;
    border-radius: 1.5rem;
    font-size: 1.4rem;
    height: 2.7rem;
    margin-bottom: 1.5rem;
    padding: 0 0.7rem;
    width: 20rem;
  }

  input ~ input {
    margin-bottom: 3rem;
  }
`
