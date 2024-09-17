import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Users from '../pages/Users'
import Error from '../pages/Error'
import Layout from '../layouts/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/signup',
        element: <Signup />
      },
      {
        path:'/users',
        element: <Users />
      },
      {
        path:'*',
        element: <Error />
      },  
    ]
  },
])