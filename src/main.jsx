import React from 'react'
import ReactDOM from 'react-dom/client'
import Searcher from './Searcher.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Home from './Home.jsx'
import MoviePage from './MoviePage.jsx'
import Error from './Error.jsx'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />,
    errorElement: <Error/>
  },
  {
    path: `/movie`,
    element: <Searcher media="movie" />,
    errorElement: <Error/>
  },
  {
    path: `/tv`,
    element: <Searcher media="tv" />,
    errorElement: <Error/>
  },
  {
    path: `/:media/:id`,
    element: <MoviePage />,
    errorElement: <Error/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="app-container">
     <RouterProvider router={ router }>
</RouterProvider>
    </div>
  </React.StrictMode>,
)
