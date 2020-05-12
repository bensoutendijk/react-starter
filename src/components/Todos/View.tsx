import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateTodo } from '../../store/todos/actions';

function TodoView() {
  const params: { todoid: string } = useParams();
  const todo = useSelector((state: RootState) => state.todos.byId[params.todoid]);

  const dispatch = useDispatch();

  const handleSaveChanges = function() {
    dispatch(updateTodo(todo));
  };

  if (typeof todo === 'undefined') {
    return (
      <Redirect to='/todos' />
    );
  }

  return (
    <Modal show animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{todo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{todo.description}</Modal.Body>
      <Modal.Footer>
        <Link to="/todos" className="btn btn-secondary">
            Close
        </Link>
        <Link to="/todos" className="btn btn-primary" onClick={handleSaveChanges}>
            Save Changes
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default TodoView;