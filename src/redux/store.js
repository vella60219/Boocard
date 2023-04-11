import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import themeReducer from './themeSlice';
import loginReducer from './loginSlice'
import modalReducer from './modalSlice'

// Data Persist Config
const persistConfig = {
    key: 'root',
    storage,
}

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

// Part2: Combine Reducers and Create a Store
const store = configureStore({
    reducer: {
        theme: persistedThemeReducer,
        login: persistedLoginReducer,
        modal: modalReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };