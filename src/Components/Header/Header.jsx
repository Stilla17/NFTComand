import React from 'react'
import logo from '../../assets/icons/Storefront.svg'
import user from '../../assets/icons/User.svg'
import rocket from '../../assets/icons/Rocket.png'
import chel from '../../assets/img/Img.png'
import avatar from '../../assets/icons/Avatar.svg'

const Header = () => {
  return (
    <>
      <header>
        <div className='max-w-[1280px] m-auto'>
          <nav className='flex items-center justify-between py-[20px]'>
            <div className='flex items-center'>
              <img src={logo} alt="" />
              <h1 className='text-[#FFFFFF] text-[25px] font-semibold px-2'>NFT Marketplace</h1>
            </div>
            <div className='flex items-center'>
              <ul className='flex items-center gap-[30px]'>
                <li className='text-[#FFFFFF] font-semibold'><a href="">Marketplace</a></li>
                <li className='text-[#FFFFFF] font-semibold'><a href="">Rankings</a></li>
                <li className='text-[#FFFFFF] font-semibold'><a href="">Connect a wallet</a></li>
              </ul>
              <button className='flex justify-between text-[#FFFFFF] mx-[20px] gap-[12px] bg-[#A259FF] py-[15px] px-[30px] rounded-[20px]'>
                <img src={user} alt="" />
                <p className='font-semibold'>Sign Up</p>
              </button>
            </div>
          </nav>
        </div>

        <div className='flex items-center m-auto mb-[80px]'>

          <div className='max-w-[1280px] m-auto mx-[170px]'>
            <div>
              <h2 className='text-[64px] font-semibold text-white w-[510px] mt-[80px] mb-[20px]'>Discover Digital Art & Collect NFTs</h2>
              <p className='text-[22px] w-[510px] font-extralight text-white mb-[30px]'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
              <button className="flex justify-between text-[#FFFFFF] mx-[20px] gap-[12px] mb-[30px] bg-[#A259FF] py-[15px] px-[30px] rounded-[20px]">
                <img src={rocket} alt="" />
                <p className=''>Get Started</p>
              </button>
            </div>

            <div className='flex gap-[30px]'>

              <div className=''>
                <p className='text-[28px] font-bold text-white'>240k+</p>
                <p className='text-white font-normal text-2xl'>Total Sale</p>
              </div>

              <div className=''>
                <p className='text-[28px] font-bold text-white'>100k+</p>
                <p className='text-white font-normal text-2xl'>Auctions</p>
              </div>

              <div className=''>
                <p className='text-[28px] font-bold text-white'>240k+</p>
                <p className='text-white font-normal text-2xl'>Auctions</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={chel} alt="" />
              <div className='bg-[#3B3B3B] w-[510px] rounded-b-2xl'>
                <p className='text-white font-semibold mx-5 text-[22px]'>Space Walking</p>
                <div className='flex gap-[12px] mx-5'>
                  <img src={avatar} alt="" /> <p className='text-white'>Animakid</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )

}

export default Header