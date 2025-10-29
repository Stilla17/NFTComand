import React from 'react'
import { Outlet } from 'react-router'
import SideBar from '../Component/SideBar/SideBar'


const Layout = () => {
    return (
        <div>
            <div className="flex">
                <SideBar />
                
                <Outlet />

            </div>

        </div>
    )
}

export default Layout