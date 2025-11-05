import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Likes = () => {

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
        <div className='ml-[10%]'>

        </div>
    )
}

export default Likes