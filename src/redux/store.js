import { configureStore } from "@reduxjs/toolkit";

import themeReducer from './themeSlice';
import loginRedecer from './loginSlice'

// Part2: Combine Reducers and Create a Store
const store = configureStore({
    reducer: {
        theme: themeReducer,
        login: loginRedecer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;