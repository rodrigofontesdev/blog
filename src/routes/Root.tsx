import { DefaultLayout } from '@layouts/DefaultLayout'
import { Error } from '@pages/Error'
import { Home } from '@pages/Home'
import { Post } from '@pages/Post'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/post/:postId', element: <Post /> },
    ],
  },
])
