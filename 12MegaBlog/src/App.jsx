import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
//  console.log(process.env.REACT_APP_APPWRITE_URL)

// console.log(import.meta.env.APPWRITE_URL)

const [loading, setLoading] = useState(true)

const dispatch = useDispatch()

useEffect( () => {
  authService.getCurrentUser()
  .then( (userData) => {
    if(userData){
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .finally( () => {
    setLoading(false)
  })
}, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
