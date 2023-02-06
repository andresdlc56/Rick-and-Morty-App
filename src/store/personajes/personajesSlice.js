import { createSlice } from '@reduxjs/toolkit';

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState: {
        info: null,
        results: null
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    },
});


// Action creators are generated for each case reducer function
export const { increment } = personajesSlice.actions;