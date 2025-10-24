import React from 'react'
import Menu from '../Component/Menu'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <div className="flex">
                <Menu />

                <Outlet />

            </div>

        </div>
    )
}

export default Layout