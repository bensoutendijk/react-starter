import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';

import { RootState } from '../../store';
import { fetchTodos } from '../../store/todos/actions';

import './Todos.scss';

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = () => {
      dispatch(fetchTodos());
    };

    getTodos();
  }, [dispatch]);
  
  return (
    <div className="TodoList">
      {todos.allIds.map((id) => {
        const todo = todos.byId[id];
        return (
          <Card className="bg-dark text-light m-2">
            <Card.Body className="btn btn-dark">
              {todo.title}
            </Card.Body>
          </Card>
        )
      })}
      <Card className="bg-dark text-light m-2">
        <Card.Body className="btn btn-dark card-new">
          <i className="far fa-plus"></i>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoList;
