import React from 'react'
import Disko from './Componets/Disko/Disko'
import About from './Componets/About/About'
import Login from "./Components/Login/Login"
import Browse from './Componets/Componets/Browse/Browse'

function App() {
  return (
    <div>
      <Disko />
      <About />
      <Browse />
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Login />
      </div>


    </div>

  );
}

export default App;
