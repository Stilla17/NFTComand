import React from 'react'
import dog from '../../assets/img/Dog.png'
import Cat from '../../assets/img/Cat.svg'
import Kvadrat from '../../assets/img/Kvadrat.svg'
import Bear from '../../assets/img/Bear.svg'
import Fox from '../../assets/icons/Fox.svg'
import grib from '../../assets/img/Grip.svg'
import grip from '../../assets/img/Grib.svg'
import gribb from '../../assets/img/Gribb.svg'
import avtar from '../../assets/icons/Avatar2.svg'
import robot from '../../assets/img/Robot.svg'
import robbot from '../../assets/img/Robbot.svg'
import robobot from '../../assets/img/Robobot.svg'
import avvtar from '../../assets/img/Avtar.svg'

const Section = () => {
  return (
    <>

    <section className='mx-[200px] mt-[80px]'>
      <div className='max-w-[1046px] mb-[60px]'>
      <h3 className='text-white font-semibold text-[37px]'>Trending Collection</h3>
      <p className='text-white font-normal text-[22px]'>Checkout our weekly updated trending collection.</p>
      </div>

      <div className='flex gap-[30px]'>
        <div>
          <img src={dog} alt="" />
          <div className='flex gap-[15px] mt-[15px]'>
            <img src={Cat} alt="" />
            <img src={Bear} alt="" />
            <img src={Kvadrat} alt="" />
          </div>
          <div>
            <p className='font-semibold text-white text-[22px]'>DSGN Animals</p>
            <div className='flex gap-[12px]'>
            <img src={Fox} alt="" /> <p className='text-white'>MrFox</p>
            </div>
          </div>
        </div>

        <div>
          <img src={grib} alt="" />
          <div className='flex gap-[15px] mt-[15px]'>
            <img src={grip} alt="" />
            <img src={gribb} alt="" />
            <img src={Kvadrat} alt="" />
          </div>
          <div>
            <p className='font-semibold text-white text-[22px]'>Magic Mushrooms</p>
            <div className='flex gap-[12px]'>
            <img src={avtar} alt="" /> <p className='text-white'>Shroomie</p>
            </div>
          </div>
        </div>

        <div>
          <img src={robot} alt="" />
          <div className='flex gap-[15px] mt-[15px]'>
            <img src={robbot} alt="" />
            <img src={robobot} alt="" />
            <img src={Kvadrat} alt="" />
          </div>
          <div>
            <p className='font-semibold text-white text-[22px]'>Disco Machines</p>
            <div className='flex gap-[12px]'>
            <img src={avvtar} alt="" /> <p className='text-white'>BeKind2Robots</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}

export default Section