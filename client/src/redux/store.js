// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import raiseNoteReducer from './raiseNoteSlice';

const store = configureStore({
    reducer: {
        raiseNote: raiseNoteReducer,
    },
});

export default store;
