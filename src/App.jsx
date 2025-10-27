import { Routes, Route } from 'react-router'
import Home from './Page/Home'
import Layout from './Page/Layout'

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