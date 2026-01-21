import React from 'react'
import HeaderPanel from '../components/Header/HeaderPanel'
import SideBarPanel from '../components/SIdeBar/SideBarPanel'
import UsersGamesChart from '../components/Chartjs/UsersGamesChart'

const AdminPanel = () => {
  return (
    <div className="flex w-full font-display">
      <div>
        <UsersGamesChart />

        <div className="flex flex-wrap p-6">
          <div className="bg-white rounded-2xl ml-6 my-6 shadow-sm p-6 w-64">
            <p className="text-sm text-gray-400 mb-2">
              Total Users
            </p>
            <h3 className="text-3xl font-bold text-gray-900">
              4,209
            </h3>
          </div>
          <div className="bg-white rounded-2xl ml-6 my-6 shadow-sm p-6 w-64">
            <p className="text-sm text-gray-400 mb-2">
              Total Orders
            </p>
            <h3 className="text-3xl font-bold text-gray-900">
              1,582
            </h3>
          </div>
          <div className="bg-white rounded-2xl ml-6 my-6 shadow-sm p-6 w-64">
            <p className="text-sm text-gray-400 mb-2">
              Revenue
            </p>
            <h3 className="text-3xl font-bold text-gray-900">
              $32,840
            </h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminPanel