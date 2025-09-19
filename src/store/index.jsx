// store/index.jsx
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { wishlistReducer, adminReducer, cartReducer } from "../store/slices/SliceWish.jsx";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    wish: wishlistReducer,
    admin: adminReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.MODE !== "production",
});

export const persistor = persistStore(store);
