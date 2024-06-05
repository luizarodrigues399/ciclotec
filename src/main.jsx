import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Routers/Home'
import Sobre from './Routers/Sobre'
import Servicos from './Routers/Servicos'
import Portfolio from './Routers/Portfolio'
import GaleriaFotos from './Routers/GaleriaFotos'
import ErrorPage from './Routers/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'portfolio',
        element: <Portfolio/>
      },
      {
        path: 'servicos',
        element: <Servicos/>
      },
      {
        path: 'sobre',
        element: <Sobre/>
      },
      {
        path: 'galeriaFotos',
        element: <GaleriaFotos/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
