import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';

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

const persistFilterConfig = {
  key: 'filter',
  storage,
};
const persistContactsConfig = {
  key: 'contacts-data',
  storage,
  // whitelist: ['contactsData'],
};

const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReducer,
);

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    contactDataReducer: persistedContactsReducer,
    contactFilterReducer: persistedFilterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
