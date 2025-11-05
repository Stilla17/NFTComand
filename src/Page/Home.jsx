import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Home = () => {
  const img_300 = "https://image.tmdb.org/t/p/w400";
  const APIKey = '1fd40a54bb7c8b5e91b107f78cdaac79'

  const [data, setData] = useState([])

  const trendingData = async () => {
    try {
      const res = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}&page=1`)
      console.log(res.data.results);
      setData(res.data.results)

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    trendingData()
  }, [])
  return (
    <>

      <div className='ml-[15%] mt-12'>
        <Swiper pagination={{
          dynamicBullets: true,
        }}
          modules={[Pagination]}
          className="mySwiper">


          {
            data?.map((item, index) => (
              <div key={index} className='flex pt-3 '>

                <SwiperSlide key={index} className='pt-5'><img className='w-250 h-90 rounded-2xl m-auto object-cover' src={`${img_300}/${item.backdrop_path}`} alt="" /></SwiperSlide>

              </div>

            ))
          }
        </Swiper>


        <h2 className='text-white font-bold text-3xl transition-all duration-300 hover:text-[#45fc54]'>Trending</h2>
        <div className='flex flex-wrap pt-3 gap-5'>
          {
            data?.map((item, index) => (
              <div key={index} className='flex pt-3 '>
                <div className='bg-[#1D1932] w-85 h-110 rounded-3xl '>
                  <div className=''>
                    <Link to={`/img/${item.id}`} >
                      <img className='rounded-3xl ' src={`${img_300}/${item.backdrop_path}`} alt="" />
                    </Link>
                  </div>
                  <div className='pt-5'>
                    <p className='text-white ps-5 transition-all duration-300 hover:text-[#45fc54]'>  {item.title || item.name || item.original_name}</p>
                    <p className='text-white ps-5 pt-2 transition-all duration-300 hover:text-[#45fc54]'>{item.vote_average}</p>
                    <p className='text-white ps-5 pt-3 transition-all duration-300 hover:text-[#45fc54]'>{item.origin_country || item.original_language}</p>
                    <p className='text-white ps-5 pt-3 transition-all duration-300 hover:text-[#45fc54]'>{item.first_air_date || item.genre_ids}</p>
                    <p className='text-white ps-5 pt-3 transition-all duration-300 hover:text-[#45fc54]' >{item.popularity}</p>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home