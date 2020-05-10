import React from 'react';
import './Todos.scss';

import Card from 'react-bootstrap/Card';

function TodoList() {
  return (
    <div className="TodoList">
      <Card className="bg-dark text-light">
        <Card.Body className="btn btn-dark card-new">
          <i className="far fa-plus"></i>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoList;
