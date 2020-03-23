import styled, {keyframes, css} from 'styled-components'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;
`

export const RecipeCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  justify-content: space-around;
  height: 25rem;
  color: rgba(20, 116, 75);

  strong {
    color: rgba(255, 115, 0, 1);
    font-size: 2rem;
  }

  hr {
    border-top: 0.1rem solid rgba(20, 116, 75);
  }

  hr + div {
    display: flex;
    flex-direction: row;
    height: 2rem;
    justify-content: space-between;
    padding-right: 0.2rem;
  }

  div {
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 10rem;
    text-align: justify;
  }

  div:last-child {
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: space-between;

    div {
      align-items: center;
      display: flex;
      height: 3.5rem;
    }
  }

  a {
    color: rgba(255, 115, 0, 1);
    font-size: 1.5rem;
    horiz-align: right;
  }

  a:hover {
    color: rgba(20, 116, 75);
    opacity: 0.8;
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

export const IconButton = styled.button.attrs(props => ({
  disabled: props.loading,
  type: 'button',
}))`
  background-color: rgba(255, 115, 0, 1);
  border-radius: 0.5rem;
  border: 0;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 2.5rem;
  margin: 0 0.5rem;
  width: 3rem;

  &:hover {
    opacity: 0.85;
    transform: translateY(-0.2rem);
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
