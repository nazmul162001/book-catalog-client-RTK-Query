import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Books from '../pages/Books'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import WishList from '../pages/WishList'
import SingleBook from '../pages/SingleBook'
import PrivateRoute from './PrivateRoute'

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
        path: '/books/:id',
        element: <SingleBook />,
      },
      // {
      //   path: '/wishlist',
      //   element: <WishList />,
      // },
      {
        path: '/wishlist',
        element: (
          <PrivateRoute>
            <WishList />,
          </PrivateRoute>
        ),
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
