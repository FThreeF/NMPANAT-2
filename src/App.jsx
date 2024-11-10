import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MainPage from "./pages/mainPage/MainPage";

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
        element:"Blog",
      },
      {
        path: '/blogPost',
        element: '/blogPost',
      },
      {
        path: '/aboutUs',
        element: '/aboutUs',
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
        element: '/contact',
      },
      {
        path: '/privacyPolicy',
        element: '/privacyPolicy',
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