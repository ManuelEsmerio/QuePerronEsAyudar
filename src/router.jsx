import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Adoptions = lazy(() =>  import('./pages/Adoptions'));
const HowToHelp = lazy(() => import('./pages/HowToHelp'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AppLayout = lazy(() => import('./AppLayout'));
const ArticlePage = lazy(() => import('./pages/blog/[slug]'));

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
        path: '/blog/:slug',
        element: <ArticlePage />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
])

export default router