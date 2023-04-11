import { createSlice } from "@reduxjs/toolkit";

// Part1: 定義 Slice(含 reducers、actions)
const loginMode = false;
const initialState = { loginMode };     // loginMode = false
const loginSlice = createSlice({
    name: 'login',
    initialState,       //loginMode = false
    reducers: {
        setLoginMode: (state, action) => {
            state.loginMode = action.payload;
        },
    },
});

// export state to global
export const selectLoginMode = (state) => state.login.loginMode;

// export actions to global
export const { setLoginMode } = loginSlice.actions;

// export reducer to global
export default loginSlice.reducer;