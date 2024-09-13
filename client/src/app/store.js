import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/user.js';
import {persistStore} from "redux-persist";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version:1,
}

const PersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: PersistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false,}),
})

export const persistor = persistStore(store);