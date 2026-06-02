import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import Home from './Home'
import Shop from './Shop'
import { Outlet } from 'react-router'
function App(){
  return(
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>

    </>
  )
}

export default App
