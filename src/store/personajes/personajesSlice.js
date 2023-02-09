import { createSlice } from '@reduxjs/toolkit';

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState: {
        info: {},
        results: []
    },
    reducers: {
        setPersonajes: (state, action) => {
            state.info = action.payload.info;
            state.results = action.payload.results;
        },
    },
});


// Action creators are generated for each case reducer function
export const { setPersonajes } = personajesSlice.actions;