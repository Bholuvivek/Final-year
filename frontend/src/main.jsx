import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Home,Login, About,Registration, Contact, Page1, Page2, Gallery, Classes, Teachers} from './componets/index.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       {/* <Route path='/' element={<Home/>}/> */}
       <Route path='/page1' element={<Page1/>}/>
       <Route path='/page2' element={<Page2/>}/>
       <Route path='gallery' element={<Gallery/>}/>
       <Route path='Classes' element={<Classes/>}/>
       <Route path='teachers' element={<Teachers/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='registration' element={<Registration/>}/>
       <Route path='login' element={<Login/>}/>
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
