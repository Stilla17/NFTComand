import React from 'react'
import search from './../../assets/Search.png'
import search1 from './../../assets/mode.png'
import search2 from './../../assets/bell.png'
import search3 from './../../assets/avatar.png'
const Nav = () => {
  return (
    <div className='ml-[10%] flex items-center justify-between pr-[70px]'>
      <div className=' relative pt-7 flex items-center'>
        <div className='ps-20 '>
          <input type="text" className='bg-[#1D1932] w-70 h-9.5 rounded-lg text-white ps-12' placeholder='Search Here' />
        </div>
        <img className='absolute top-8.5 left-22' src={search} alt="" />
      </div>
      <div className='flex items-center space-x-2 gap-5'>
        <img src={search1} alt="" />
        <img src={search2} alt="" />
        <img src={search3} alt="" />
      </div>
    </div>

  )
}

export default Nav