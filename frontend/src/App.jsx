import React from 'react'
import Home from './Components/Home/Home'
import Courses from './Courses/Courses'
import {Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import { Navigate } from 'react-router-dom'

function App() {

  const [authUser , setAuthUser] = useAuth()
     console.log(authUser)

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup' />}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App