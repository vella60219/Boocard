import { createSlice } from "@reduxjs/toolkit";

// Part1: 定義 Slice(含 reducers、actions)
const lightMode = true;
const initialState = { lightMode };     // lightMode = true
const themeSlice = createSlice({
    name: 'theme',
    initialState,       //lightMode = true
    reducers: {
        setLightMode: (state, action) => {
            state.lightMode = action.payload;
        },
    },
});

// export state to global
export const selectLightMode = (state) => state.theme.lightMode;

// export actions to global
export const { setLightMode } = themeSlice.actions;

// export reducer to global
export default themeSlice.reducer;