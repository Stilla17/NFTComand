import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },

        decrement: (state) => {
            if (state.counter > 0) {
                state.counter -= 1
            } else {
                state.counter = 0
            }
        }
    }
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer