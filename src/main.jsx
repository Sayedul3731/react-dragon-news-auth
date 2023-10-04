import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './Routes/Routes.jsx'
import { RouterProvider } from "react-router-dom"
import AuthProvider from './providers/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
