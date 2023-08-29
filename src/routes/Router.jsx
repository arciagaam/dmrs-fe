import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
// Elements/Pages
import App from '../App'
import Home from '../pages/Home'

const router = createBrowserRouter(
    createRoutesFromElements(
        <ScrollToTop>
          <Route path="/dmrs-fe" element={<App/>}>
              <Route index element={<Home/>}/>
          </Route>
        </ScrollToTop>
    )
)

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router