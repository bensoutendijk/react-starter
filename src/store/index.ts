import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import todosReducer from './boards/reducers';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  boards: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [reduxThunk, reduxLogger as any],
});


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export default store;
