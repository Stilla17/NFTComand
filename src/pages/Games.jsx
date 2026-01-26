import React, { useEffect, useState } from 'react'
import TableGames from '../components/Table/TableGames'
import { useDispatch } from 'react-redux'
import { fetchData } from '../features/games/gamesSlice'

const Games = () => {

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="w-full bg-white rounded-2xl p-6">
      <form onSubmit={handleSubmit} className="space-y-6">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter game name"
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Enter img url"
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />

          <input
            type="text"
            name="genre"
            placeholder="Enter game genre"
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>


        <textarea
          name="description"
          placeholder="Enter game description"
          rows="5"
          className="w-full resize-none border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />


        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Game
        </button>

      </form>

      <TableGames />
    </div>
  )
}

export default Games