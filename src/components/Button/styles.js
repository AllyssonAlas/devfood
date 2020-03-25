import styled, {css, keyframes} from 'styled-components'

import px2vw from '../../utils/px2vw'

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
  border-radius: ${px2vw(15)};
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  height: ${px2vw(45)};
  text-transform: uppercase;
  transition: all 0.2s;
  width: ${px2vw(300)};

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
      padding-top: ${px2vw(8)};
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`
