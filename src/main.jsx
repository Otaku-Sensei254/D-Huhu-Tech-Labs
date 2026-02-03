import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Divisions from './components/Pages/Divisions.jsx'
import WebWorksProjects from './components/Pages/WebWorksProjects.jsx'
import Contact from './components/Pages/Contact'
const Layout = () => {
  return (
    <div> 
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/divisions',
        element: <Divisions/>
      },
      {
        path: '/webworks-projects',
        element: <WebWorksProjects/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} /> 
  </StrictMode>,
)
