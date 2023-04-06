import { createSlice } from "@reduxjs/toolkit";

// Part1: 定義 Slice(含 reducers、actions)
const nextPageMode = false;
const ownerID = "";
const goodsID = "";
const initialState = { nextPageMode, ownerID, goodsID };     // nextPageMode = false
const modalSlice = createSlice({
    name: 'modal',
    initialState,       //nextPageMode = false
    reducers: {
        setNextPageMode: (state, action) => {
            state.nextPageMode = action.payload;
        },
        setOwnerID: (state, action) => {
            state.ownerID = action.payload;
        },
        setGoodsID: (state, action) => {
            state.goodsID = action.payload;
        },
    },
});

// export state to global
export const selectNextPageMode = (state) => state.modal.nextPageMode;
export const selectOwnerID = (state) => state.modal.ownerID;
export const selectGoodsID = (state) => state.modal.goodsID;

// export actions to global
export const { setNextPageMode, setOwnerID, setGoodsID } = modalSlice.actions;

// export reducer to global
export default modalSlice.reducer;