import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Layout/MainLayOut';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import Login from './Pages/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Phone from './Pages/Phone/Phone';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('/phones.json')
      },
      {
        path:'/favorites',
        element:<Favorites></Favorites>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/phones/:id',
        element:<Phone></Phone>,
        loader: () => fetch('/phones.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
