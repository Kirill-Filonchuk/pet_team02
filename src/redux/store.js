import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { noticesApi } from './notices/noticesApi';
import { petsReducer } from './pet/slise';
import { userPetsApi } from './pet/userPetsApi';

//Persisting token from auth slice to localStorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [noticesApi.reducerPath]: noticesApi.reducer,
    pets: petsReducer,
    [userPetsApi.reducerPath]: userPetsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(noticesApi.middleware)
      .concat(userPetsApi.middleware);
  },
});

export const persistor = persistStore(store);
