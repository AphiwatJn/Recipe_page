import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Recipe_Page from '../pages/Recipe_Page'

const MainLayout = () =>{
    return(
        <>
        {/* <Header/> */}
        <Outlet/>
        </>
    )
}

const main = createBrowserRouter([
    {
        path: '/recipe_page',
        element : <MainLayout/>,
        children:[
            {index : true , element: <Recipe_Page/>},
            // {path : '/recipe', element: <Recipe_Page/>}
        ]
    }
])

export default function Approuter() {
  return (
    <RouterProvider router={main}/>
  )
}
