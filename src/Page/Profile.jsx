import React from 'react'
import search4 from './../assets/pick file.png'

const Profile = () => {
  return (
    <div className='ml-[16%] max-w-[1220px]'>
      <div className='flex itmes-center pt-10'>
        <div>
          <p className='text-white text-3xl'>Setting</p>
          <p className='text-white'>Welcome Setting Page</p>
        </div>
        <div>
          <p className='text-white ps-250 pt-5 '>Home  Setting</p>
        </div>
      </div>
      <div className='flex gap-10 pt-6'>
        <p className='text-[#6F4FF2]'>Profile</p>
        <p className='text-white'>Application</p>
        <p className='text-white'>Security</p>
        <p className='text-white'>Activity</p>
        <p className='text-white'>Payment Method</p>
        <p className='text-white'>API</p>
      </div>
      <div>
        <div className='flex itmes-center pt-20'>
          <div>
            <p className='text-white pt-3'>User profile</p>
          </div>
          <div>
            <p className='text-white pt-3 ps-160'>Update Profile</p>
          </div>
        </div>
        <div className='pt-5 flex gap-50'>
          <div className='bg-[#1D1932] w-130 rounded-2xl   h-60'>
            <p className='text-white pt-3 ps-5'>Full Name</p>
            <div className='pt-1 ps-5'>
              <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
            </div>
            <div className='flex'>
              <img className='ps-5 pt-5' src={search4} alt="" />
              <div className='pt-6 ps-5'>
                <p className='text-white'>John Smith</p>
                <p className='text-white'>Welcome Setting Page</p>
              </div>
            </div>
            <div className='ps-5 pt-5'>
              <button className='w-20 h-10 rounded-lg bg-[#6F4FF2] text-white'>Save</button>
            </div>
          </div>

          <div className='bg-[#1D1932] w-130 rounded-2xl   h-60'>
            <p className='text-white pt-3 ps-5'>Email</p>
            <div className='pt-1 ps-5'>
              <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
            </div>

            <p className='text-white pt-3 ps-5'>Password</p>

            <div className='pt-1 ps-5'>
              <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
            </div>

            <div className='ps-5 pt-5'>
              <button className='w-20 h-10 rounded-lg bg-[#6F4FF2] text-white'>Save</button>
            </div>
          </div>
        </div>
      </div>
      <p className='text-white text-3xl pt-5'>Personal Information</p>
      <div className='flex '>
        <div className='pt-5 '>
          <div className='bg-[#1D1932] w-310 rounded-2xl h-130'>
            <div className='flex flex-wrap  ps-16 gap-20'>
              <div>
                <p className='text-white ps-5.5 text-2xl pt-10'>Info</p>
                <div className='pt-1 ps-5'>
                  <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
                </div>

                <p className='text-white ps-5.5 text-2xl pt-15'>Info</p>
                <div className='pt-1 ps-5'>
                  <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
                </div>

                <p className='text-white ps-5.5 text-2xl pt-15'>Info</p>
                <div className='pt-1 ps-5'>
                  <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
                </div>
              </div>

              <div>
                <p className='text-white ps-5.5 text-2xl pt-10'>Info</p>
                <div className='pt-1 ps-5'>
                  <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
                </div>

                <p className='text-white ps-5.5 text-2xl pt-15'>Info</p>
                <div className='pt-1 ps-5'>
                  <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
                </div>

                <p className='text-white ps-5.5 text-2xl pt-15'>Info</p>
                <div className='pt-1 ps-5'>
                  <input type="text" className='bg-[#131129] w-120 h-9.5 rounded-lg text-white ps-12' />
                </div>

              </div>
              <div className='ps-5'>
                <button className='w-20 h-10 rounded-lg bg-[#6F4FF2] text-white'>Save</button>
              </div>
            </div>
          </div>

        </div>






      </div>
    </div>
  )
}

export default Profile