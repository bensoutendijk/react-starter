import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { RootState } from '../../store';
import { fetchTodos } from '../../store/todos/actions';

import './Todos.scss';
import { TodoStatus } from '../../store/todos/types';
import Col from 'react-bootstrap/Col';

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
      <Card className="bg-dark text-white TodoList-category">
        <Card.Header><h4>To Do</h4></Card.Header>
        <Card.Body className="p-2">
          {todos.allIds.map((id) => {
            const todo = todos.byId[id];

            if (todo.status === TodoStatus.Todo) {
              return (
                <Card className="TodoList-item bg-dark text-white">
                  <Card.Body className="p-2 row">
                    <Col xs="9">
                      <p>{todo.title}</p>
                    </Col>
                    <Col xs="3">
                      <Button variant="dark">
                        <i className="far fa-pencil"></i>
                      </Button>
                    </Col>
                  </Card.Body>
                </Card>
              )
            }

            return null;
          })}
          <Card border="dark" className="TodoList-item bg-dark text-white">
            <Card.Body className="p-0 d-flex justify-content-between">
              <Button variant="dark" className="TodoList-add-item">
                <i className="far fa-plus"></i>
                <span className="ml-2">Add new item</span>
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoList;
