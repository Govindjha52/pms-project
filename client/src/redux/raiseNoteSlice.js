// src/redux/raiseNoteSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load notes from local storage (for persistence)
const loadNotesFromLocalStorage = () => {
    try {
        const serializedNotes = localStorage.getItem('raisedNotes');
        return serializedNotes ? JSON.parse(serializedNotes) : [];
    } catch (error) {
        console.error('Could not load notes:', error);
        return [];
    }
};

// Save notes to local storage
const saveNotesToLocalStorage = (notes) => {
    try {
        const serializedNotes = JSON.stringify(notes);
        localStorage.setItem('raisedNotes', serializedNotes);
    } catch (error) {
        console.error('Could not save notes:', error);
    }
};

const raiseNoteSlice = createSlice({
    name: 'raiseNote',
    initialState: {
        notes: loadNotesFromLocalStorage(), // Load notes from localStorage initially
    },
    reducers: {
        raiseNewNote: (state, action) => {
            state.notes.push(action.payload);
            saveNotesToLocalStorage(state.notes); // Save to localStorage on every note raise
        },
    },
});

export const { raiseNewNote } = raiseNoteSlice.actions;

export default raiseNoteSlice.reducer;
