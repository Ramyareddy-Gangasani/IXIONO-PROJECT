
import React from 'react'
import Output from './Components/Output'
import Signin from './Components/Signin'

import { Routes, Route,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route  path="/"  element={<Signin/>}/>
        <Route  path="/Output"  element={<Output  />}/>
        </Routes>
  </BrowserRouter>
  )
}