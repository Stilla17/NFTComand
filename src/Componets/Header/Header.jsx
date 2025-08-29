import React from 'react'
import Props from '../Props/Props'
import img from './../../assets/icons/Eye.png'
import between from './../../assets/img/Image (3).png'
import dfx from './../../assets/icons/Avatar (8).png'
import between1 from './../../assets/img/Image (4).png'
import between2 from './../../assets/img/imgag.png'
import dfx1 from './../../assets/icons/Avatar (9).png'
import dfx2 from './../../assets/icons/Avatar (10).png'












const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center pe-35 ps-17'>
      <div>
      <h1 className='text-4xl text-white ps-15 pt-10'>Discover More NFTs</h1>
       <p className='text-white ps-15 pt-5'>Explore new trending NFTs"</p>
      </div>
      <div>
      <button className='border-3 border-[#A259FF] w-35 rounded-2xl h-12 flex items-center gap-4'>
              <img className='ps-3' src={img} alt="" />
              <p className='text-white'>See All</p>
      </button>
      </div>
    </div>

    <div className='flex justify-center  gap-13 pt-20 '>
      <Props  
      qator={between}
      title={"Distant Galaxy"}
      logo={dfx}
      just={"MoonDancer"}
      flex={"Price"}
      flex1={"1.63 ETH"}
      main={"Highest Bid"}
      js={"0.33 wETH"}
      />

      <Props  
      qator={between1}
      title={"Life On Edena"}
      logo={dfx1}
      just={"NebulaKid"}
      flex={"Price"}
      flex1={"1.63 ETH"}
      main={"Highest Bid"}
      js={"0.33 wETH"}
      />

      <Props  
      qator={between2}
      title={"AstroFiction"}
      logo={dfx2}
      just={"Spaceone"}
      flex={"Price"}
      flex1={"1.63 ETH"}
      main={"Highest Bid"}
      js={"0.33 wETH"}
      /> 
    </div>
   
    </>
  )
}

export default Header