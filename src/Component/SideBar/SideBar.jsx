import React, { useState } from 'react'
import logo from './../../assets/Logo.png';
import home from './../../assets/DashBoard.svg';
import writeBoard from './../../assets/bid.svg';
import heart from './../../assets/heart.svg';
import star from './../../assets/Collection.svg';
import profile from './../../assets/Profile.svg';
import settings from './../../assets/setting.svg';
import { Link } from 'react-router';


const SideBar = () => {

  const [open, setOpen] = useState(false)


  return (
    <>
      <div className={`${open ? "w-[6%]" : "w-[14%]"} bg-[#1D1932] px-[25px] pt-[30px] text-white flex flex-col items-center h-[100vh] fixed  transition-all duration-500 ease-in-out`}>
        <img src={logo} alt="logo" onClick={() => setOpen(!open)} className='transition-transform duration-500' />

        <ul className='mt-[58px] flex flex-col gap-[50px]'>
          <li>
            <Link to="/" className='flex gap-4 transition-all duration-300 hover:text-[#FCB045]'>
              <img src={home} alt="home" />
              {open ? "" :
                <span
                  className={`transition-opacity duration-300 ${open ? "opacity-0 w-0" : "opacity-100 w-auto"
                    }`}
                >
                  Home
                </span>}
            </Link>
          </li>
          <li>
            <Link to="/writeboard" className='flex gap-4 transition-all duration-300 hover:text-[#FCB045]'>
              <img src={writeBoard} alt="writeBoard" /> {open ? "" : <span
                className={`transition-opacity duration-300 ${open ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
              >WriteBoard</span>}</Link>
          </li>
          <li>
            <Link to="/likes" className='flex gap-4 transition-all duration-300 hover:text-[#FCB045]'>
              <img src={heart} alt="heart" /> {open ? "" : <span
                className={`transition-opacity duration-400 ${open ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
              >Likes</span>}</Link>
          </li>
          <li>
            <Link to="/star" className='flex gap-4 transition-all duration-300 hover:text-[#FCB045]'>
              <img src={star} alt="star" /> {open ? "" : <span
                className={`transition-opacity duration-400 ${open ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
              >Star</span>}</Link>
          </li>
          <li>
            <Link to="/profile" className='flex gap-4 transition-all duration-300 hover:text-[#FCB045]'>
              <img src={profile} alt="profile" /> {open ? "" : <span
                className={`transition-opacity duration-400 ${open ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
              >Profile</span>}</Link>
          </li>
          <li>
            <Link to="/settings" className='flex gap-4 transition-all duration-1000 hover:text-[#FCB045]'>
              <img src={settings} alt="setting" />{open ? "" : <span
                className={`transition-opacity duration-1000 ${open ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
              >Settings</span>}</Link>
          </li>
        </ul>
      </div>


    </>
  )
}

export default SideBar