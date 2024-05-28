import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
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

import { authenticationReducer } from './authentication/slice';
import { allBoardsReducer } from './allBoards/slice';
import { singleBoardReducer } from './board/slice';
import { backgroundsDataReducer } from './background/slice';
import { priorityFilterReducer } from './filter/slice';
import employeeReducer from './employees/employeeReducer';

const authenticationPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'users', 'theme'],
};

const boardsPersistConfig = {
  key: 'boards',
  storage,
};

const singleBoardPersistConfig = {
  key: 'board',
  storage,
};

const allBackgroundsConfig = {
  key: 'backgrounds',
  storage,
};

const priortyFilterPersistConfig = {
  key: 'priorityFilter',
  storage,
};

const employeesPersistConfig = {
  key: 'employees',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authenticationPersistConfig, authenticationReducer),
    boards: persistReducer(boardsPersistConfig, allBoardsReducer),
    board: persistReducer(singleBoardPersistConfig, singleBoardReducer),
    backgrounds: persistReducer(allBackgroundsConfig, backgroundsDataReducer),
    filter: persistReducer(priortyFilterPersistConfig, priorityFilterReducer),
    employees: persistReducer(employeesPersistConfig, employeeReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
