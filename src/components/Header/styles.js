import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const DropDownMenu = styled.aside`
  button {
    background-color: rgba(0, 0, 0, 0);
    border: 0;
  }

  img {
    border-radius: 50%;
    height: ${px2vw(130)};
    margin-top: 1rem;
    width: ${px2vw(130)};
  }

  aside {
    background-color: rgba(255, 255, 255, 1);
    border: rgba(210, 210, 210, 0.4) solid 0.1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${px2vw(600)};
    right: ${px2vw(25)};
    padding: 1.2rem;
    position: absolute;
    top: ${px2vw(130)};
    width: ${px2vw(420)};
  }

  strong {
    border-bottom: rgba(20, 116, 75, 1) solid 0.1rem;
    font-size: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  aside > a {
    color: rgba(20, 116, 75, 1);
    font-size: 2.5rem;
    margin: 0.3rem 0;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
  }
`

export const Container = styled.header`
  align-items: center;
  background-color: rgba(255, 115, 0, 1);
  border-bottom: rgba(20, 116, 75, 1) solid 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${px2vw(60)};
  left: 0;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  width: 100%;

  @media (max-width: 768px) {
    height: ${px2vw(180)};
    border-bottom: rgba(20, 116, 75, 1) solid 0.7rem;
  }

  h1 {
    color: rgba(255, 255, 255, 1);
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 6rem;
    }

    span {
      font-size: 1.5rem;
      color: rgba(20, 116, 75, 1);
      @media (max-width: 768px) {
        font-size: 4rem;
      }
    }
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > a {
      color: rgba(255, 255, 255, 1);
      font-size: 1.3rem;
      margin: 0 1rem;
      text-align: center;
      text-decoration: none;
    }

    a:hover {
      opacity: 0.8;
    }

    p {
      color: rgba(255, 255, 255, 1);
      font-size: 1.5rem;
    }

    img {
      border-radius: 50%;
      height: ${px2vw(45)};
      margin: 0 1rem;
      width: ${px2vw(45)};

      @media (max-width: 768px) {
        height: ${px2vw(90)};
        margin: 0 1rem;
        width: ${px2vw(90)};
      }
    }

    img + a {
      align-items: center;
      display: flex;
      height: ${px2vw(40)};
      justify-content: center;
      padding-top: 0.5rem;
      margin: 0;
      width: ${px2vw(40)};
    }
  }
`
