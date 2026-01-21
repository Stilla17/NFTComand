import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'

import yes from './../assets/Moto.png'
import nam from './../assets/text.png'
import da1 from './../assets/da1.png';
import da2 from './../assets/da2.png';
import da3 from './../assets/da3.png';
const Work = () => {
  return (
    <div className="flex gap-10 pt-10 ">


      <div className="w-[65%]">


        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-3xl">Gallery</h1>

          <div className="flex gap-4">
            <button className="swiper-button-prev-custom border-2 border-gray-400 w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowLeft className="text-white" />
            </button>

            <button className="swiper-button-next-custom border-2 border-gray-400 w-10 h-10 rounded-full flex items-center justify-center">
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>


        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src={yes}
              alt="slide"
              className="w-full   rounded-xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={yes}
              alt="slide"
              className="w-full   rounded-xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={yes}
              alt="slide"
              className="w-full  rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="">
        <div className='flex gap-5 ps-10'>
          <img src={nam} alt="text" className=" rounded-lg w-10 h-10" />
          <h1 className='text-white text-3xl'>System Specs</h1>
        </div>
        <div className='ps-10 pt-7 '>
          <div className='bg-green-950 rounded-2xl w-90 h-110'>
            <div className='flex justify-center gap-5 pt-4'>
              <div>
                <h1 className='text-white text-2xl'>Minimum</h1>
              </div>
              <div>
                <h1 className='text-white text-2xl'>Recommended</h1>
              </div>
            </div>
            <div className='pt-2'>
              <div className='border-2 bg-gray-400 h-1 w-90'></div>
            </div>
            <div className='ps-5'>
              <div className='flex gap-3 pt-8'>
                <div className='pt-3'>
                  <img className='w-10 rounded-lg' src={da1} alt="" />
                </div>
                <div>
                  <h1 className='text-white'>CPU</h1>
                  <p className='w-70'>Inter Core i5-12400 / ADM Ryzen 5 5600</p>
                </div>
              </div>

              <div className='flex gap-3 pt-4'>
                <div className='pt-3'>
                  <img className='w-10 rounded-lg' src={da2} alt="" />
                </div>
                <div>
                  <h1 className='text-white'>GPU</h1>
                  <p className='w-70'>NVIDIA RTX 3060 / ADM RX 6700 XT</p>
                </div>
              </div>


              <div className='flex gap-3 pt-4'>
                <div className='pt-3'>
                  <img className='w-10 rounded-lg' src={da1} alt="" />
                </div>
                <div>
                  <h1 className='text-white'>RAM</h1>
                  <p>DDR4-3200</p>
                </div>
              </div>

              <div className='flex gap-3 pt-4'>
                <div className='pt-3'>
                  <img className='w-10 rounded-lg' src={da3} alt="" />
                </div>
                <div>
                  <h1 className='text-white'>STORAGE</h1>
                  <p className='w-70'>70 GB Available Space SSD Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
