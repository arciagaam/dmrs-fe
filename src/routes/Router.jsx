import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'

// Elements/Pages
import App from '../App'
import Home from '../pages/Home'
import Thailand from '../pages/Home/thailand'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            
            <Route path="dmrs/thailand" thailand  element={<Thailand/>}/>
        </Route>
    )
)

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router