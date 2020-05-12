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

function TodoList() {
  const [addTodo, setAddTodo] = useState(false);
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = () => {
      dispatch(fetchTodos());
    };

    getTodos();
  }, [dispatch]);

  const handleAddTodo = function(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(createTodo(todos.form));

    const todoForm: TodoForm = {
      title: '',
      description: '',
      status: 0,
    };

    dispatch(updateTodoForm(todoForm));
  };

  const handleUpdateTodo = function(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    const todoForm: TodoForm = {
      ...todos.form,
      [event.target.name]: event.target.value,
    };

    dispatch(updateTodoForm(todoForm));
  };
  
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
                  <Link to={`/todos/${todo._id}`} className="btn btn-dark text-left">
                    <Card.Body className="p-2">
                      <Card.Text>{todo.title}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              );
            }

            return null;
          })}
          {addTodo ? (
            <Card border="dark" className="TodoList-item bg-dark text-white">
              <Card.Body className="p-0 d-flex justify-content-between">
                <Form onSubmit={handleAddTodo} className="TodoList-new-form">
                  <FormControl
                    autoFocus
                    as="textarea" 
                    rows={3} 
                    size="sm"
                    name="title"
                    value={todos.form.title}
                    placeholder="Enter a title for this todo..."
                    onChange={handleUpdateTodo}
                  />
                  <Button variant="primary" type="submit" className="mt-2">
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <Card border="dark" className="TodoList-item bg-dark text-white">
              <Card.Body className="p-0 d-flex justify-content-between">
                <Button 
                  variant="dark" 
                  className="TodoList-add-item"
                  onClick={(): void => setAddTodo(true)}
                >
                  <i className="far fa-plus"></i>
                  <span className="ml-2">Add new item</span>
                </Button>
              </Card.Body>
            </Card>
          )}
        </Card.Body>
      </Card>
      <Route path="/todos/:todoid" component={TodoView} />
    </div>
  );
}

export default TodoList;
