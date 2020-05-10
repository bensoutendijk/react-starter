import React from 'react';
import './Todos.scss';

import Card from 'react-bootstrap/Card';

function TodoList() {
  return (
    <div className="TodoList">
      <Card className="bg-dark text-light">
        <Card.Body>
          <Card.Title>Foo Bar</Card.Title>
          <Card.Text>Baz</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoList;
