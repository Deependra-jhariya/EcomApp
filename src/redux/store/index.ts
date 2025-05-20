import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import productReducer from "../features/ProductList/ProductSlice"
const persistConfig = {
  key: "root", // Root key
  storage: AsyncStorage, // Persist to AsyncStorage
  whitelist: ["products"], // Only persist auth state
};

const rootReducer = combineReducers({
    products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Create persistor for rehydration

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
