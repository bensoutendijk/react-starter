/* eslint-disable no-unused-vars */
import { createReducer, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { mapToKey, getUniqueValues } from '../../utils';
import { TodosState } from './types';
import { 
    createTodoPending, 
    createTodoSuccess, 
    createTodoFailed, 
    receiveTodos, 
    rejectTodos, 
    getTodoPending, 
    getTodoSuccess, 
    getTodoFailed, 
    putTodoPending, 
    putTodoSuccess, 
    putTodoFailed, 
    removeTodoPending, 
    removeTodoSuccess, 
    removeTodoFailed,
    updateTodoForm,
} from './actions';

const initialState: TodosState = {
    fetched: false,
    fetching: false,
    error: '',
    allIds: [],
    byId: {},
    selected: null,
    form: {},
};

export default createReducer(initialState, (builder: ActionReducerMapBuilder<TodosState>) => {
    builder
        .addCase(createTodoPending, (state) => {
            state.fetching = true;
        });
    builder
        .addCase(createTodoSuccess, (state, action) => {
            state.fetching = false;
            state.fetched = true;
            state.byId[action.payload._id] = action.payload;
            state.allIds.push(action.payload._id);
        });
    builder
        .addCase(createTodoFailed, (state, action) => {
            state.fetching = false;
            state.fetched = false;
            state.error = action.payload;
        });
    builder
        .addCase(receiveTodos, (state, action) => {
            state.fetching = false;
            state.fetched = true;
            state.byId = mapToKey(action.payload, '_id');
            state.allIds = getUniqueValues(action.payload, '_id');
        });
    builder
        .addCase(rejectTodos, (state, action) => {
            state.fetching = false;
            state.fetched = false;
            state.error = action.payload;
        });
    builder
        .addCase(getTodoPending, (state) => {
            state.fetching = true;
        });
    builder
        .addCase(getTodoSuccess, (state, action) => {
            state.fetching = false;
            state.fetched = true;
            state.byId[action.payload._id] = action.payload;
            state.selected = action.payload._id;
            state.form[action.payload._id] = action.payload;
        });
    builder
        .addCase(getTodoFailed, (state, action) => {
            state.fetching = false;
            state.fetched = false;
            state.error = action.payload;
        });
    builder
        .addCase(putTodoPending, (state) => {
            state.fetching = true;
        });
    builder
        .addCase(putTodoSuccess, (state, action) => {
            state.fetching = false;
            state.fetched = true;
            state.byId[action.payload._id] = action.payload;
            state.selected = action.payload._id;
            state.form[action.payload._id] = action.payload;
        });
    builder
        .addCase(putTodoFailed, (state, action) => {
            state.fetched = false;
            state.error = action.payload;
        });
    builder
        .addCase(removeTodoPending, (state, action) => {
            state.fetching = true;
        });
    builder
        .addCase(removeTodoSuccess, (state, action) => {
            state.fetching = false;
            state.allIds = state.allIds.filter((id) => id !== action.payload);
        });
    builder
        .addCase(removeTodoFailed, (state, action) => {
            state.fetching = false;
            state.error = action.payload;
        });
    builder
        .addCase(updateTodoForm, (state, action) => {
            state.form[action.payload._id] = action.payload;
        });
});
