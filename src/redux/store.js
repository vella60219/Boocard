import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import themeReducer from './themeSlice';
import loginRedecer from './loginSlice'

// Data Persist Config
const persistConfig = {
    key: 'root',
    storage,
}

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedLoginReducer = persistReducer(persistConfig, loginRedecer);

// Part2: Combine Reducers and Create a Store
const store = configureStore({
    reducer: {
        theme: persistedThemeReducer,
        login: persistedLoginReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };