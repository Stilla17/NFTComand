import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Img = () => {
    const { id } = useParams();
    const [backdrop, setBackdrop] = useState(null);
    const APIKey = '1fd40a54bb7c8b5e91b107f78cdaac79';


    const fetchBackdrop = async () => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`
            );
            setBackdrop(res.data);
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    };

    useEffect(() => {
        if (id) {
            fetchBackdrop();
        }
    }, [id]);

    return (
        <>
            <div>
                <div className='ml-[15%] flex justify-center pt-5'>
                    {backdrop && (
                        <img
                            src={`https://image.tmdb.org/t/p/original${backdrop?.backdrop_path || backdrop?.poster_path}`}
                            alt={backdrop?.title || backdrop?.name}
                            style={{ width: '60%', height: '30%', }}


                            className='rounded-4xl'
                        />
                    )}
                </div>
                 <div className='ml-[15%] flex justify-center pt-5'>
                    <h1 className='text-white w-150 text-center'>{backdrop?.overview}</h1>
                 </div>
            </div>
        </>
    );
};

export default Img;
