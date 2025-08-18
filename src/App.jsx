import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Root from "./components/layout/Root";
import Home from "./pages/Home";
import Coffe from "./pages/coffe";



function App() {


  const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/coffe', element: <Coffe /> },
    ],
  },
])

  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
