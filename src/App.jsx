import React from 'react'
import Disko from './Componets/Disko/Disko'
import About from './Componets/About/About'
import Login from "./Components/Login/Login"

function App() {
  return (
    <div>
      <Disko />
      <About />
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Login />
      </div>
    </div>

  );
}

export default App;
