import { createHashRouter } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import Index from './routes'
import Store from './routes/store'
import Team from './routes/team'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'store',
        element: <Store />
      },
      {
        path: 'team',
        element: <Team />
      }
    ]
  }
])

export default router
