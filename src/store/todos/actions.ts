import axios from 'axios';

import { createAction } from '@reduxjs/toolkit';

import { 
  Todo,
  TodosError,
  TodoForm,
} from './types';
import { AppDispatch } from '../';

export const createTodoPending = createAction('CREATE_TODO_PENDING');
export const createTodoSuccess = createAction<Todo>('CREATE_TODO_SUCCESS');
export const createTodoFailed = createAction<TodosError>('CREATE_TODO_FAILED');

export const requestTodos = createAction('REQUEST_TODOS');
export const receiveTodos = createAction<Todo[]>('RECEIVE_TODOS');
export const rejectTodos = createAction<TodosError>('REJECT_TODOS');

export const getTodoPending = createAction('GET_TODO_PENDING');
export const getTodoSuccess = createAction<Todo>('GET_TODO_SUCCESS');
export const getTodoFailed = createAction<TodosError>('GET_TODO_FAILED');

export const postTodoPending = createAction('POST_TODO_PENDING');
export const postTodoSuccess = createAction<Todo>('POST_TODO_SUCCESS');
export const postTodoFailed = createAction<TodosError>('POST_TODO_FAILED');

export const removeTodoPending = createAction('REMOVE_TODO_PENDING');
export const removeTodoSuccess = createAction<string>('REMOVE_TODO_SUCCESS');
export const removeTodoFailed = createAction<TodosError>('REMOVE_TODO_FAILED');

export const updateTodoForm = createAction<TodoForm>('UPDATE_TODO_FORM');

export const createTodo = (
  formData: TodoForm,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(createTodoPending());
  try {
    if (!formData) throw new Error('No form data prodived');
    const { data } = await axios.post('/api/todos', formData);
    dispatch(createTodoSuccess(data));
  } catch (error) {
    dispatch(createTodoFailed(error.message));
  }
};

export const fetchTodos = () => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(requestTodos());
  try {
    const { data } = await axios.get('/api/todos');
    dispatch(receiveTodos(data));
  } catch (error) {
    const { data } = error.response;
    dispatch(rejectTodos(data));
  }
};

export const fetchTodo = (
  todoid: string,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(getTodoPending());
  try {
    if (!todoid) throw new Error('No todo ID provided');
    const { data } = await axios.get(`/api/todos/${todoid}`);
    dispatch(getTodoSuccess(data));
  } catch (error) {
    dispatch(getTodoFailed(error.message));
  }
};

export const updateTodo = (
  todo: Todo,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(postTodoPending());
  try {
    if (!todo) throw new Error('No form data provided');
    await axios.post(`/api/todos/${todo._id}`, todo);
    dispatch(postTodoSuccess(todo));
  } catch (error) {
    dispatch(postTodoFailed(error.message));
  }
};

export const deleteTodo = (
  todoid: string,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(removeTodoPending());
  try {
    const { data } = await axios.delete(`/api/todos/${todoid}`);
    dispatch(removeTodoSuccess(data));
  } catch (error) {
    const { data } = error.response;
    dispatch(removeTodoFailed(data));
  }
};
