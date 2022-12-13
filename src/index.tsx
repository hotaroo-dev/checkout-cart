import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, Global } from '@emotion/react'
import { reset } from './reset'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
    </ThemeProvider>
  </React.StrictMode>
)
