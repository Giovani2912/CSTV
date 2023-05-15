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
import About from './Screens/About';
import Preview from './Screens/Preview';
import Players from './Screens/Players';

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
        path: "/about",
        element: <About />
      },
      {
        path: "/preview",
        element: <Preview />
      },
      {
        path: "/matches",
        element: <Matches />
      },
      {
        path: "/matches/:id/news",
        element: <News />
      },
      {
        path: "/players",
        element: <Players />
      },
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
