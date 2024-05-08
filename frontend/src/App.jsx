import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import './App.css'
import {Header,Home, Footer} from './componets/index'

function App() {


  return (
    <>
    <Header/>
      
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
