import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Root from "./components/layout/Root";
import Home from "./pages/Home";
import Coffe from "./pages/coffe";
import AddCoffe from "./pages/AddCoffe";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./context/AuthProveder";
import UserUpdate from "./pages/UserUpdate";



function App() {


  const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/coffe', element: <Coffe /> },
      { path: '/cofeadd', element: <AddCoffe /> },
      { path: '/coffeupdate/:id', element: <Update/> },
      {path:'/login' , element:<Login />},
      {path:'register' , element:<Register />},
      {path:'/userUpdate/:id', element:<UserUpdate />}
    ],
  },
])

  return (
    <>
    <div>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
    </div>
    </>
  )
}

export default App
