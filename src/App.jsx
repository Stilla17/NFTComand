import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './Page/Home'
import Product from './Page/Product'
import Layout from './Page/Layout'
import Posts from './Component/Posts'
import Income from './Page/Income'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
        </Route>
      </Routes>

    </>
  )
}

export default App