import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Books from '../pages/Books'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

export default routes
