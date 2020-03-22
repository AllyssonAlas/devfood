import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  select,
  textarea {
    border-radius: 1rem;
    border: 0.1rem solid rgba(240, 240, 240, 1);
    min-height: 3.5rem;
    padding: 0.5rem 1.5rem;
    margin: 1rem 0;
  }
`
