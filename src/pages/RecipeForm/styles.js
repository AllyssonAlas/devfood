import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  input,
  select,
  textarea {
    background-color: rgba(255, 255, 255, 1);
    border: 0.1rem solid rgba(240, 240, 240, 1);
    border-radius: 1rem;
    margin: 1rem 0;
    min-height: 3.5rem;
    padding: 1rem 1.5rem;
  }

  h2 {
    color: rgba(255, 115, 0, 1);
    font-size: 1.7rem;
  }

  textarea {
    height: 15rem;
    margin-bottom: 2rem;
    resize: none;
  }

  button {
    align-self: center;
  }
`
