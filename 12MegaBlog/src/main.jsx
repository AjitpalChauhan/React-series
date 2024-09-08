import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login} from './components/index.js'
import Home from "./page/Home.jsx"
import Signup from "./page/Signup.jsx" 
import EditPost from "./page/EditPost.jsx"
import AddPost from './page/AddPosts.jsx'
import AllPosts from "./page/AllPost.jsx"
import Post from "./page/Post.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication = {false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication = {false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path: '/AllPost',
        element: (
          <AuthLayout authentication = {true}>
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path: '/AddPost',
        element: (
          <AuthLayout authentication = {" "}>
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication = {" "}>
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />,
    },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
