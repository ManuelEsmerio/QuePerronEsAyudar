import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Adoptions from './pages/Adoptions'
import HowToHelp from './pages/HowToHelp'
import SuccessStories from './pages/SuccessStories'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AppLayout from './AppLayout'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/adoptions',
        element: <Adoptions />
      },
      {
        path: '/how-to-help',
        element: <HowToHelp />
      },
      {
        path: '/success-stories',
        element: <SuccessStories />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      }
    ]
  }
])

export default router