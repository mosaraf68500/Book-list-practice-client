import { createBrowserRouter } from 'react-router'
import Root from '../components/Root'
import Home from '../components/Home'
import Books from '../components/Books'
import Book from '../components/Book'
 export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
               index:true, Component:Home
            },
            {
                path:"/books",
                Component:Books
            },

            {
                path:"/book",
                Component:Book
            }
        ]

    }
 ])