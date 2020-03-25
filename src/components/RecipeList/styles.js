import styled, {keyframes, css} from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.ul`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const RecipeCard = styled.li`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  color: rgba(20, 116, 75);
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: space-around;
  height: ${px2vw(450)};
  padding: 1.5rem;
  max-width: ${px2vw(1120)};

  @media (min-width: 768px) {
    font-size: ${px2vw(24)};
    max-width: ${px2vw(525)};
  }

  @media (min-width: 992px) {
    font-size: ${px2vw(16)};
    height: ${px2vw(350)};
    max-width: ${px2vw(350)};
  }

  strong {
    border-bottom: rgba(20, 116, 75) solid 0.1rem;
    color: rgba(255, 115, 0, 1);
    font-size: 2rem;
    max-width: ${px2vw(1120)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      max-width: ${px2vw(525)};
    }

    @media (min-width: 992px) {
      font-size: 1.3rem;
      max-width: ${px2vw(350)};
    }
  }

  strong + div {
    display: flex;
    flex-direction: row;
    height: 2rem;
    justify-content: space-between;
    max-width: ${px2vw(1120)};
    margin-bottom: 1rem;
    padding-right: 0.2rem;

    @media (min-width: 768px) {
      max-width: ${px2vw(525)};
    }

    @media (min-width: 992px) {
      max-width: ${px2vw(350)};
    }
  }

  div {
    height: 10rem;
    padding: 0;
    overflow: hidden;
    text-align: justify;
    text-overflow: ellipsis;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      p {
        -webkit-line-clamp: 5;
      }
      max-width: ${px2vw(525)};
    }

    @media (min-width: 992px) {
      p {
        -webkit-line-clamp: 6;
      }

      max-width: ${px2vw(350)};
    }
  }

  div:last-child {
    align-items: center;
    display: flex;
    height: ${px2vw(64)};
    justify-content: space-between;
    font-size: 1.8rem;

    @media (min-width: 768px) {
      max-width: ${px2vw(525)};
    }

    @media (min-width: 992px) {
      font-size: 1.4rem;
      max-width: ${px2vw(350)};
    }

    div {
      align-items: center;
      display: flex;
      height: 3.5rem;
    }
  }

  a {
    color: rgba(255, 115, 0, 1);
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
  height: ${px2vw(60)};
  margin-left: 1.5rem;
  width: ${px2vw(68)};

  @media (min-width: 768px) {
    height: ${px2vw(50)};
    width: ${px2vw(56)};
  }

  @media (min-width: 992px) {
    height: ${px2vw(40)};
    width: ${px2vw(44)};
  }

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

  svg {
    font-size: ${px2vw(40)};

    @media (min-width: 768px) {
      font-size: ${px2vw(28)};
    }

    @media (min-width: 992px) {
      font-size: ${px2vw(22)};
    }
  }
`
