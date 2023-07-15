import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Books from '../pages/Books'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import WishList from '../pages/WishList'

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
      {
        path: '/wishlist',
        element: <WishList />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

export default routes
