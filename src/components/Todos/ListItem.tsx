import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Todo } from '../../store/todos/types';

function ListItem({ todo }: ListItemProps) {
  return (
    <Card className="TodoList-item bg-dark text-white">
      <Link to={`/todos/${todo._id}`} className="btn btn-dark text-left">
        <Card.Body className="p-2">
          <Card.Text>{todo.title}</Card.Text>
          {todo.description ? (
            <Card.Body className="p-0">
              <i className="far fa-align-left"></i>
            </Card.Body>
          ) : (
            null
          )}
        </Card.Body>
      </Link>
    </Card>
  );
}

export interface ListItemProps {
  todo: Todo;
}

export default ListItem;