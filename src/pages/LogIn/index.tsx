import React from 'react';
import './LogIn.scss';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LogIn() {
  return (
    <div className="LogIn">
      <Jumbotron className="bg-dark text-light">
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default LogIn;
