import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/mainPage/MainPage";
import BlogPage from "./pages/BlogPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blogPost',
        element: '/blogPost',
      },
      {
        path: '/aboutUs',
        element: <AboutUsPage />,
      },
      {
        path: '/category',
        element: '/category',
      },
      {
        path: '/author',
        element: '/author',
      },
      {
        path: '/contactUs',
        element: <ContactUsPage />,
      },
      {
        path: '/privacyPolicy',
        element: <PrivacyPolicyPage />,
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;