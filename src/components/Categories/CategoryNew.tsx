import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { createCategory } from '../../store/categories/actions';

function CategoryNew() {
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState('');

  const { boardid } = useParams();

  const dispatch = useDispatch();

  const handleSubmit = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const categoryForm = {
      _id: '*',
      title,
      boardid,
    };

    dispatch(createCategory(categoryForm));
    setFormOpen(false);
  };

  return (
    <div className="CategoryNew">
      <Card bg={formOpen ? 'light' : undefined }>
        {formOpen ? (
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control 
                  autoFocus
                  type="text" 
                  placeholder="Enter category name..."
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit" 
                variant="success"
                children="Save Category"
                size="sm"
              />
              <button 
                type="button"
                className="btn btn-sm"
                children={<i className="fa far fa-times" />}
                onClick={() => setFormOpen(false)}
              />
            </Form>
          </Card.Body>
        ) : (
          <button 
            className="CategoryNew-btn btn" 
            onClick={() => setFormOpen(true)}>
            <i className="fa far fa-plus" />{' Add new category'}
          </button>
        )}
      </Card>
    </div>
  );
}

export default CategoryNew;
