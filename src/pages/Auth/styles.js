import styled, {css, keyframes} from 'styled-components'

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SubmitButton = styled.button.attrs(props => ({
  disabled: props.loading,
  type: 'submit',
}))`
  background-color: rgba(255, 115, 0, 1);
  border: 0;
  border-radius: 0.4rem;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  height: 3rem;
  padding-top: 0.5rem;
  text-transform: uppercase;
  transition: all 0.2s;
  width: 20rem;

  &:hover {
    transform: translateY(-0.3rem);
  }

  &:active {
    transform: translateY(-0.1rem);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`
