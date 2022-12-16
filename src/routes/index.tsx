import React from 'react'
import styled from '@emotion/styled'

export const Container = styled.main`
  width: calc(100% - 38px);
  display: flex;
  align-item: center;

  p {
    flex: 1;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    color: #525252;
    letter-spacing: 2px;
  }
`

const Index: React.FC = () => {
  return (
    <Container>
      <p>Home page</p>
    </Container>
  )
}

export default Index
