import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'

// Elements/Pages
import App from '../App'
import Home from '../pages/Home'
import Australia from '../pages/Australia'
import Thailand from '../pages/Thailand'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/dmrs-fe" element={<App/>}>
            <Route index element={<Home/>}/>
            
            <Route path="dmrs/thailand" element={<Thailand/>}/>

            <Route path="dmrs/australia" element={<Australia/>}/>
        </Route>
    )
)

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router