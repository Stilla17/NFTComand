import React, { useState, useRef, useEffect } from 'react'
import Game from './../assets/game.png';
import Game1 from './../assets/2202.png';
import { Rating } from "primereact/rating";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { tecrement } from '../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import Work from './Work';
import Work2 from './Work2';
import { Toast } from 'primereact/toast';
import { Link, useParams } from 'react-router';
import h1 from './../assets/h1.png';
import h2 from './../assets/h2.png';
const InfoPage = () => {

    const toast = useRef(null);
    const [value, setValue] = useState(null);
    const counter = useSelector((state) => state.counter.counter)
    const counterDark = useSelector((state) => state.counter.dark)
    const dispatch = useDispatch()
    const { id } = useParams()
    const [game, setGame] = useState([])
    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`https://67665085410f84999657549a.mockapi.io/games/${id}`)
                const data = await res.json()
                console.log(data);
                setGame(data)
            } catch (e) {
                console.log(error);
            }
        }

        fetchProduct()
    }, [id])
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: '', detail: 'DOWNLOAD TORRENT (65 GB) ', life: 3000 });
    }

    return (
        <div className="bg-background-light dark:bg-background-dark divvvv font-display text-slate-900 dark:text-white transition-colors duration-300  ">

            {/* Main */}
            <main className="max-w-[1440px] mx-auto px-6 py-8 ">

                <div className='flex justify-center pt-30 gap-50'>

                    <div className="flex gap-7 ">

                        <div>
                            <img className='rounded-lg' src={game?.gameImg} alt="" />
                        </div>

                        <div className=''>
                            <div className='flex gap-5'>
                                <button className='bg-blue-600 w-25 rounded-lg h-5.5'>ACTION_APG</button>
                                <button className='bg-green-600 w-25 rounded-lg h-5.5'>RAY TRAGING</button>
                            </div>
                            <h1 className='w-30 text-5xl pt-2'>{game?.gameName}</h1>
                            <p className='w-100 pt-2'>{game?.gameJanr}</p>
                            <Rating className='gap-3 text-yellow-500 pt-5' value={value} onChange={(e) => setValue(e.value)} cancel={false} />
                        </div>
                    </div>

                    <div>
                        <div className='bg-green-950 w-85 rounded-2xl h-80'>
                            <h1 className='text-gray-400 ps-5 pt-5'>CURRENT HEALTH</h1>

                            <div className='flex gap-5 justify-center pt-5'>
                                <div className='w-35 rounded-lg h-17 bg-gray-500'>
                                    <h1 className='text-gray-400 ps-3 pt-3'>Seeds</h1>
                                    <h1 className='ps-3 text-2xl'>1,240 <span className='text-green-500 text-lg'>240</span></h1>
                                </div>

                                <div className='w-35 rounded-lg h-17 bg-gray-500'>
                                    <h1 className='text-gray-400 ps-3 pt-3'>Seeds</h1>
                                    <h1 className='ps-3 text-2xl'>1,240 <span className='text-green-500 text-lg'>240</span></h1>
                                </div>
                            </div>

                            <div className='flex justify-center pt-5'>
                                <button onClick={showSuccess} className='w-75 h-11  rounded-lg bg-green-600 shadow-green-500 shadow-2xl ps-5 flex items-center gap-2'>
                                    <Toast className='bg-gray-800 h-11 rounded-2xl   ps-5 pe-5 pt-3 ' ref={toast} />
                                    <PiDownloadSimpleLight />
                                    <h1>DOWNLOAD TORRENT (65 GB)</h1>
                                </button>
                            </div>

                            <div className='flex justify-center pt-5'>
                                <button onClick={() => dispatch(tecrement())} className='border-2 border-gray-400 w-75 h-11 rounded-lg flex itmes-center gap-3 ps-5 pt-2'>
                                    <span  >{counterDark ? "❤️" : "♡"}</span>
                                    <h1 className='text-white'>ADD TO WISHLIST</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <Work />
                <Work2 />

            </main>

            {/* Footer */}
            <footer className="mt-20 border-t border-primary/15 py-11  text-sm text-slate-500 ">
                <div className='flex justify-between pe-20 ps-20 '>
                    <div className='flex items-center '>
                        <img className='w-10' src={Game} alt="" />
                        <h1 className='text-gray-500 text-2xl'>TorrentGameHub</h1>
                    </div>
                    <div className='flex gap-5 items-center text-gray-500'>
                        <p>Pirvacy Policy</p>
                        <p>DMCA</p>
                        <p>Terms of Service</p>
                        <p>Support</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-9.5 rounded-lg' src={h1} alt="" />
                        <img className='w-9 rounded-lg' src={h2} alt="" />
                    </div>
                </div>
            </footer>


        </div>

    )
}

export default InfoPage