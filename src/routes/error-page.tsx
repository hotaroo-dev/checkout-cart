import React from 'react'
import styled from '@emotion/styled'
import { useRouteError } from 'react-router-dom'

interface IError {
  statusText: string
  message: string
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as IError

  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  i {
    font-style: italic;
    color: #818181;
  }
`

export default ErrorPage
