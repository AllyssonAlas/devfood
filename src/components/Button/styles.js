import styled, {css, keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  background-color: rgba(255, 115, 0, 1);
  border: 0;
  border-radius: 1rem;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  height: 3rem;
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
      padding-top: 0.5rem;
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`
