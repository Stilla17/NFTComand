import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Work from './pages/Work'
import Work2 from './pages/Work2'
import Login from './pages/Login'
import InfoPage from './pages/InfoPage'
import AdminPanel from './pages/AdminPanel'
import Games from './pages/Games'
import Layout from './pages/Layout'
import AdminLayot from './pages/AdminLayot'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<InfoPage />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work2' element={<Work2 />} />
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<AdminLayot />}>
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/games' element={<Games />} />
      </Route>
    </Routes>
  )
}

export default App