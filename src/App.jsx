import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Work from './pages/Work'
import Work2 from './pages/Work2'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />} />
      <Route path='/work2' element={<Work2 />} />
      <Route path='/login' element={<Login />} />


    </Routes>
  )
}

export default App