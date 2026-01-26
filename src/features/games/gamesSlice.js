import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_URL_API_GAMES

export const fetchData = createAsyncThunk(
  'games/fetchData',
  async () => {
    const res = await axios.get(apiUrl)
    return res.data
  }
)

export const postData = createAsyncThunk(
  'game/fetchData',
  async () => {
    await axios.post(apiUrl)
  }
)

export const deleteData = createAsyncThunk(
  'games/deleteGame',
  async (id) => {
    await axios.delete(`${apiUrl}/${id}`)
    return id
  }
)

export const editData = createAsyncThunk(
  'games/editGame',
  async (id) => {
    await axios.put(`${apiUrl}/${id}`)
    return id
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
      .addCase(deleteData.fulfilled, (state, action) => {
        state.games = state.games.filter((game) => game.id !== action.payload)
      })
      .addCase(editData.fulfilled, (state, action) => {

      })
      .addCase(postData.fulfilled, (state, action) => {
        state.games = action.payload
      })
  },
})

export const { filterData } = gamesSlice.actions
export default gamesSlice.reducer
