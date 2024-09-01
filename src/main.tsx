import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import About from './About'
import Contact from './Contact'
import Home from './Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact-us",
        element: <Contact/>
      }
    ],
    errorElement: <ErrorPage/>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
