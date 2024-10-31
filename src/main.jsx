import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import User from './User/User.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import Posts from './Posts/Posts.jsx';
import PostDetails from './Post/PostDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path: '/user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User/>
      },
      {
        path: '/user/:userId',
        element:<UserDetails/>
      },
      {
        path: '/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails/>
      }

    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
