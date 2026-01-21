import React from 'react'
import { Route, Routes } from 'react-router'
import AdminPanel from './pages/AdminPanel'
import Games from './pages/Games'
import Layout from './pages/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<AdminPanel />} />
        <Route path='/games' element={<Games />} />
      </Route>
    </Routes>
  )
}

export default App