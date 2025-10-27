import { Routes, Route } from 'react-router'
import Home from './Page/Home'
import Layout from './Page/Layout'
import Star from './Page/Star'
import Profile from './Page/Profile'
import WriteBoard from './Page/WriteBoard'
import Likes from './Page/Likes'
import Settings from './Page/Settings'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route index path='/writeboard' element={<WriteBoard />} />
          <Route index path='/likes' element={<Likes />} />
          <Route index path='/star' element={<Star />} />
          <Route index path='/profile' element={<Profile />} />
          <Route index path='/settings' element={<Settings />} />
        </Route>
      </Routes>

    </>
  )
}

export default App