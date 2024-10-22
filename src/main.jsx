import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import Root from './layout/Root.jsx'

createRoot(document.getElementById("root")).render(
  <div className='container mx-auto'>
    <StrictMode>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </StrictMode>
    ,
  </div>
);
