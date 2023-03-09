import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Games from './Screens/Games';
import Matches from './Screens/Matches';
import News from './Screens/News';
import Home from './Screens/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/games",
        element: <Games />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/matches",
        element: <Matches />
      },
      {
        path: "/matches/:id/news",
        element: <News />
      },
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
