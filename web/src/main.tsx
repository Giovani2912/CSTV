import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Games from './Screens/Games';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Games />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/register",
//     element: <Register />
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
