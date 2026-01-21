import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_URL_API

export const fetchData = createAsyncThunk(
  'games/fetchData',
  async () => {
    const res = await axios.get(apiUrl)
    return res.data
  }
)

const initialState = {
  games: [],
  filteredGames: [],
  searchTerm: '',
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.searchTerm = action.payload
      state.filteredGames = state.games.filter(game =>
        game.gameName.toLowerCase().includes(action.payload.toLowerCase())
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.games = action.payload
      state.filteredGames = action.payload
    })
  },
})

export const { filterData } = gamesSlice.actions
export default gamesSlice.reducer
