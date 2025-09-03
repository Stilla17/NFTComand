import React from 'react'
import img from './../../assets/img/1.png'


const Login = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
                <img
                    src={img}
                    alt=""
                    className="w-full h-[630px]"
                />
            </div>

            <div className="flex flex-col justify-center">
                <h2 className="text-[51px] font-bold mb-4">Create Account</h2>
                <p className="mb-6 text-[22px] text-gray-300">
                    Welcome! Enter your details and start creating, collecting and  <br /> selling NFTs.
                </p>

                <form className="space-y-4 ">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-[480px] px-4 py-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-[480px] px-4 py-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-[480px] px-4 py-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-[480px] px-4 py-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />

                    <button type="submit" className="w-[480px] bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold" >
                        Create account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login