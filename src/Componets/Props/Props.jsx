import React from 'react'

const Props = ({children, ptext, qator, logo, just, flex, flex1, main, js, title}) => {
  return (
    <>
    <div className=''>
       {
        children
       }
       {
        children
       }
    </div>

       <div className='flex'>

        <div className='bg-[#3B3B3B] w-80 rounded-3xl h-120'>
        <img src={qator} alt="" />
        <h1 className='ps-6 pt-3 text-3xl text-white'>{title}</h1>
        <div className='flex gap-5 ps-6.5 pt-2'>
          <img src={logo} alt="" />
          <p className='text-white'>{just}</p>
        </div>
        <div className='flex gap-30 justify-center pt-10'>
          <div>
            <p className='text-[#858584]'>{flex}</p>
            <p className='text-white'>{flex1}</p>
          </div>
          <div>
            <p className='text-[#858584]'>{main}</p>
            <p className='text-white'>{js}</p>
          </div>
        </div>
       </div>

       </div>
        
        <div>
          {
            children
          }
        </div>
    
  
    </>
  )
}

export default Props