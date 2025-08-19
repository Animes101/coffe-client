import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Root from "./components/layout/Root";
import Home from "./pages/Home";
import Coffe from "./pages/coffe";
import AddCoffe from "./pages/AddCoffe";
import Update from "./pages/Update";



function App() {


  const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/coffe', element: <Coffe /> },
      { path: '/cofeadd', element: <AddCoffe /> },
      { path: '/coffeupdate/:id', element: <Update/> }
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
