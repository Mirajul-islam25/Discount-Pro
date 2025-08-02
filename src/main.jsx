import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'

import Home from './Components/Home/Home'
import Error from './Components/ErrorPage/Error'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AuthProvider from './provider/AuthProvider'
import PrivateRoutes from './Components/routes/PrivateRoutes'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import AboutDev from './Components/AboutDev/AboutDev'
import Brands from './Components/Brands/Brands'
import BrandDetails from './Components/BrandDetails/BrandDetails'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'Update-profile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: 'Profile',
          element: <Profile></Profile>
        },
        {
          path: 'aboutdev',
          element: <AboutDev></AboutDev>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          
            path: "forget-password",
            element: <ForgetPassword></ForgetPassword>
        },
        {
          
            path: 'brands',
            element: <Brands></Brands>
        },
        {
          path:'brand/:id',
          loader:()=>fetch('/coupons.json'),
          element:(<PrivateRoutes>
            <BrandDetails></BrandDetails>
          </PrivateRoutes>)
        },

      ]

    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
