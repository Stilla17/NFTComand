import React from 'react'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className='bg-green-950 h-182.5'>
            <div className='flex justify-center pt-60'>
                <div className='bg-green-600 w-100 h-50 rounded-2xl shadow-green-100 shadow-2xl'>
                    <div className=''>
                        <div className='flex justify-center pt-6'>
                            <input className='w-80 rounded-3xl shadow-green-100 shadow-2xl' placeholder='Name' type="text" />
                        </div>
                        <div className='pt-3 flex justify-center'>
                            <input className='w-80 rounded-3xl shadow-green-100 shadow-2xl' placeholder='First Name' type="text" />
                        </div>
                        <div className='flex justify-center pt-3'>
                            <Link to="/">
                                <button className='w-80 rounded-3xl shadow-2xl shadow-amber-100 bg-green-400 h-10 text-white'>ADD</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login