import React from 'react'
import Props from '../Props/Props'
import just from './../../assets/img/Photo & Icon (7).png'
import just1 from './../../assets/img/Photo & Icon (8).png'
import just2 from './../../assets/img/Category Icon (1).png'
import just3 from './../../assets/img/Photo & Icon.png'
import just4 from './../../assets/img/Photo & Icon (1).png'
import just5 from './../../assets/img/Photo & Icon (2).png'
import just6 from './../../assets/img/Photo & Icon (3).png'
import just7 from './../../assets/img/Photo & Icon (5).png'

const Browse = () => {
   return (
      <>

         <div className=''>
            <h1 className='text-white text-5xl ps-56 pt-10 '>Browse Categories</h1>

            <div className='flex justify-center gap-10 pt-10 '>

               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just} />
                  <Props ptext={"Art"} />
               </div>
               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just1} />
                  <Props ptext={"Collectibles"} />
               </div>
               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just2} />
                  <Props ptext={"Music"} />
               </div>
               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just3} />
                  <Props ptext={"Photography"} />
               </div>

            </div>

            <div className='flex justify-center gap-10 pt-10'>

               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just4} />
                  <Props ptext={"Video"} />
               </div>
               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just5} />
                  <Props ptext={"Utility"} />
               </div>
               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just6} />
                  <Props ptext={"Sport"} />
               </div>
               <div className='h-75 w-60 rounded-3xl bg-[#3B3B3B]'>
                  <Props flex={just7} />
                  <Props ptext={"Virtual Worlds"} />
               </div>

            </div>
         </div>


      </>
   )
}

export default Browse