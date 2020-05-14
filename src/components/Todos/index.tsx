import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

import { RootState } from '../../store';
import { fetchTodos, createTodo, updateTodoForm } from '../../store/todos/actions';
import { TodoStatus, TodoForm } from '../../store/todos/types';

import './Todos.scss';
import TodoView from './View';
import ListItem from './ListItem';
import { getUniqueValues } from '../../utils';

function Todos() {
  const [ready, setReady] = useState(false);
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      await dispatch(fetchTodos());
    };

    getTodos().then(() => setReady(true));
  }, [dispatch]);
  
  if (!ready) {
    return null;
  }

  return (
    <div className="Todos">
      {getUniqueValues(todos.allIds.map((id) => todos.byId[id]), 'status')
        .map((status: TodoStatus) => (
          <div>
            {status}
          </div>
        ))
      }
      <Route path="/todos/:todoid" component={TodoView} />
    </div>
  );
}

export default Todos;
