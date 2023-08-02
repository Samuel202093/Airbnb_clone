import { useState } from 'react'
import NavBar from './components/NavBar'
import Index from './pages/Index'
import Modal from './components/Modal'
import Search from './pages/Search'
import Listing from './pages/Listing'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { ModalContextProvider } from './context/data'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/listing/:id",
    element: <Listing/>
  },
  {
    path: "/search",
    element: <Search/>
  }
])


function App() {


  return (

    <ModalContextProvider>
      <RouterProvider router={router}>
    {/* <Modal/> */}
     <Index />
     <Search />
     <Listing />
     </RouterProvider>
    </ModalContextProvider>
  )
}

export default App

