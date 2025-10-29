import React from 'react'
import chelik from './../assets/icons/avatar.png';
import x from './../assets/icons/auction.png';
import NFT from './../assets/img/NFT.png';

const WriteBoard = () => {
    return (
        <div className='ml-[16%] max-w-[1219px] mt-16'>
            <p className='text-white mb-[50px]'>Active Bids</p>

            <div className='flex'>
                <div className='flex gap-[70px]'>
                    <input type="checkbox" className='ml-[11px]' />
                    <p className='text-white pr-[230px]'>Item List</p>
                </div>
                <div className='flex gap-[100px]'>
                    <p className='text-white'>Open Price</p>
                    <p className='text-white'>Your Offer</p>
                    <p className='text-white'>Recent Offer</p>
                    <p className='text-white'>Time Left</p>
                    <p className='text-white'>Action</p>
                </div>
            </div>
            <hr className='border-[#6C7AA0] h-[0.3px] w-[1150px] mt-[9px] mb-[30px]' />
            <div>
                <div className='flex text-white items-center bg-[#1D1932] rounded-[18px] w-[1150px]'>
                    <input type="checkbox" className='ml-[11px]' />
                    <img src={NFT} alt="" className='pl-[70px]' />
                    <div className='pl-[10px] py-[8px]'>
                        <p>Cute Cube Cool</p>
                        <p>John Abraham</p>
                    </div>
                    <p className='pl-[103px]'>0.0025 ETH</p>
                    <p className='pl-[99px]'>0.0025 ETH</p>
                    <img src={chelik} alt="" className='pl-[95px]' />
                    <p className='pl-[10px]'>0.0025 ETH</p>
                    <p className='pl-[57px]'>2 Hours 1 min 30s  </p>
                    <button>
                        <img src={x} alt="" className='ml-[50px]' /></button>
                </div>
            </div>
        </div>
    )
}

export default WriteBoard