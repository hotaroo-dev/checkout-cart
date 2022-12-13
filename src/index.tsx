import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import { reset } from './reset'
import { RouterProvider } from 'react-router-dom'
import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={reset} />
    <RouterProvider router={router} />
  </React.StrictMode>
)
