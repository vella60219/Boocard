import { createSlice } from "@reduxjs/toolkit";

// Part1: 定義 Slice(含 reducers、actions)
const nextPageMode = false;
const initialState = { nextPageMode };     // nextPageMode = false
const modalSlice = createSlice({
    name: 'modal',
    initialState,       //nextPageMode = false
    reducers: {
        setNextPageMode: (state, action) => {
            state.nextPageMode = action.payload;
        },
    },
});

// export state to global
export const selectNextPageMode = (state) => state.modal.nextPageMode;

// export actions to global
export const { setNextPageMode } = modalSlice.actions;

// export reducer to global
export default modalSlice.reducer;