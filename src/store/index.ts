import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import todosReducer from './todos/reducers';

const rootReducer = combineReducers({
    todos: todosReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [reduxThunk, <any>reduxLogger],
});


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export default store;
