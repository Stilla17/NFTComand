import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Corousel = () => {
    const APIKEY = "1fd40a54bb7c8b5e91b107f78cdaac79"
    const APIUrl = `https://api.themoviedb.org/3/movie/3/credits?api_key=${APIKEY}&language=en-US`
    const [corousel, setCorousel] = useState([])

    const apiData = async () => {
        try {
            const res = await axios.get(APIUrl)
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        apiData()
    }, [])

    return (
        <div className='ml-[15%]'>

        </div>
    )
}

export default Corousel