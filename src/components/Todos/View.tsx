import React, { useEffect } from 'react';
import { useParams, Redirect, Link, useHistory } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateTodo, updateTodoForm } from '../../store/todos/actions';
import Form from 'react-bootstrap/Form';
import { TodoForm } from '../../store/todos/types';

function TodoView() {
  const params: { todoid: string } = useParams();
  const todos = useSelector((state: RootState) => state.todos);
  const todo = todos.byId[params.todoid];

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const selectTodo = async function() {
      await dispatch(updateTodoForm(todo));
    };

    selectTodo();
  }, [dispatch]);

  const handleChange = function(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    const todoForm: TodoForm = {
      ...todos.form,
      [event.target.name]: event.target.value,
    };

    dispatch(updateTodoForm(todoForm));
  };

  const handleSaveChanges = function(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const finalTodo = {
      ...todo,
      ...todos.form,
    };
    
    dispatch(updateTodo(finalTodo));
    history.push('/todos');
  };

  const handleClose = function() {
    history.push('/todos');
  };

  if (typeof todo === 'undefined') {
    return (
      <Redirect to='/todos' />
    );
  }

  return (
    <Modal 
      show 
      animation={false} 
      centered
      onHide={handleClose}
      onClose={handleClose}
    >
      <Form onSubmit={handleSaveChanges}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form.Control 
              name="title"
              value={todos.form.title}
              onChange={handleChange} 
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            rows={5} 
            name="description"
            value={todos.form.description} 
            onChange={handleChange} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Link to="/todos" className="btn btn-secondary">
              Close
          </Link>
          <Button type="submit" className="btn btn-primary">
              Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default TodoView;