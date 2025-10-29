import React from 'react'
import { Outlet } from 'react-router'
import SideBar from '../Component/SideBar/SideBar'
import Nav from '../Component/Nav/Nav'


const Layout = () => {
    return (
        <>

            <div className="flex">
                <SideBar />
                <div className='w-full'>
                    <Nav />

                    <Outlet />
                </div>

            </div>

        </>
    )
}

export default Layout