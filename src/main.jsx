import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import Root from './layout/Root.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <div>
    <>
      <AuthProvider>
        <RouterProvider router={router}>
          <Root></Root>
        </RouterProvider>

        <ToastContainer />
      </AuthProvider>
    </>
    ,
  </div>
);
