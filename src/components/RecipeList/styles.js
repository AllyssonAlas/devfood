import styled from 'styled-components'

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
  padding: 2rem;
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
    display: flex;
    height: 2rem;
    justify-content: flex-end;
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
