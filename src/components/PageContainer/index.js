import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding: 1rem;
  background-color: rgb(220, 220, 220, 1);
  flex-direction: column;
  min-height: 40rem;

  h1 {
    display: block;
    color: rgba(255, 115, 0, 1);
    text-align: center;
    font-size: 2.5rem;
  }
  div {
    padding: 2rem;
  }
`

export default PageContainer
