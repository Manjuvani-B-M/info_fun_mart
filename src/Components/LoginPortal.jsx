import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Jokes from './Jokes'
import Weather from './Weather'
import Shopping from './Shopping'
import ViewProducts from './ViewProducts'

const LoginPortal = () => {
  return (
    <>    
    <Navbar/>

    <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Jokes/>} path='/jokes'/>
        <Route element={<Weather/>} path='/weather'/>
        <Route element={<Shopping/>} path='/shopping'/>
        <Route element={<ViewProducts/>} path='/viewproducts/:id'/>
    </Routes>
            
    </>
  )
}

export default LoginPortal