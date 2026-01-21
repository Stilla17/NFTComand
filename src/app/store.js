import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import gamesReducer from '../features/games/gamesSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        games: gamesReducer
    }
})