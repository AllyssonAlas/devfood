import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: rgb(220, 220, 220, 1);
  border-bottom-right-radius: 2.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  min-height: 40rem;
  padding: 1rem;

  h1 {
    color: rgba(255, 115, 0, 1);
    display: block;
    font-size: 2.5rem;
    text-align: center;
  }
  div {
    padding: 2rem;
  }
`

export default PageContainer
