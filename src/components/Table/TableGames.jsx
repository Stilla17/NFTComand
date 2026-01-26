import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../../features/games/gamesSlice'

const TableGames = () => {

    const { games } = useSelector(state => state.games)
    const dispatch = useDispatch()

    return (
        <table className='border w-full mt-4 border-collapse'>
            <thead>
                <tr>
                    <th className='border p-2'>№</th>
                    <th className='border p-2'>Game Name</th>
                    <th className='border p-2'>Img Url</th>
                    <th className='border p-2'>Game Description</th>
                    <th className='border p-2'>Year</th>
                    <th className='border p-2'>Game Janr</th>
                    <th className='border p-2'>Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {games?.map((game, index) => (
                    <tr
                        key={game.id}
                        className="hover:bg-gray-50 transition duration-200"
                    >
                        <td className="p-3 text-center font-medium text-gray-600">
                            {index + 1}
                        </td>

                        <td className="p-3 font-semibold text-gray-800">
                            {game.gameName}
                        </td>

                        <td className="p-3">
                            <div className="w-24 h-14 rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src={game.gameImg}
                                    alt={game.gameName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </td>

                        <td className="p-3 text-gray-600 text-sm max-w-[260px]">
                            <p className="line-clamp-3">
                                {game.gameDesc}
                            </p>
                        </td>

                        <td className="p-3 text-center">
                            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                                {game.gameYear}
                            </span>
                        </td>

                        <td className="p-3 text-center">
                            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                                {game.gameJanr}
                            </span>
                        </td>
                        <td className='flex items-center'>
                            <button className='bg-red-400 text-white p-2 rounded-md'
                                onClick={() => dispatch(deleteData(game.id))}>Delete</button>
                            <button className='bg-orange-400 text-white p-2 rounded-md'>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableGames