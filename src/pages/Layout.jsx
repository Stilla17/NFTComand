import React from 'react'
import SideBarPanel from '../components/SIdeBar/SideBarPanel'
import HeaderPanel from '../components/Header/HeaderPanel'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className='flex'>
            <SideBarPanel />
            <div>
                <HeaderPanel />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout