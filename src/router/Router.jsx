import { createBrowserRouter } from 'react-router'
import Root from '../components/Root'
import Home from '../components/Home'
import Books from '../components/Books'
import Book from '../components/Book'
import Details from '../components/Details'
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
            },
            {
                path:"/details/:id",
                loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`),
                Component:Details
            }
        ]

    }
 ])