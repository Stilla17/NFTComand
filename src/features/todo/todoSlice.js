import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const urlApi = import.meta.env.VITE_URL_API;

export const getData = createAsyncThunk(
    'todo/getData',
    async () => {
        const res = await axios.get(urlApi);
        return res.data;
    }

)

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                console.log("Failed to fetch data");
            })

    }
});

export const { } = todoSlice.actions

export default todoSlice.reducer