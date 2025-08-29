import React from 'react'
import logo from './assets/Storefront.svg'

const Header = () => {
  return (
    <>
    <div>
      <header>
        <nav>
          <div>
            <img src={logo} alt="" />
          </div>
        </nav>
      </header>
    </div>
    </>
  )
}

export default Header