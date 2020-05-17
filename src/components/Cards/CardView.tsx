import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Form from 'react-bootstrap/Form';

const CardView: React.FC<CategoryViewProps> = function({ cardid }) {
  const [open, setOpen] = useState(false);
  const card = useSelector((state: RootState) => state.cards.byId[cardid]);
  return (
    <div className="CardView">
      {open ? (
        <Card className="CardEdit-card">
          <Form className="CardEdit-card-form">
            <Card.Body>
              <Form.Control 
                autoFocus
                as="textarea"
                rows={4}
                style={{ resize: 'none' }}
                value={card?.title}
              />
            </Card.Body>
            <div className="mt-2">
              <button 
                className="btn btn-success" 
                children="Save"
              />
            </div>
          </Form>
          <div className="CardEdit-card-quicktools">
            <button 
              className="btn btn-dark" 
              children="Delete"
            />
            <button 
              className="btn btn-dark" 
              children="Another action"
            />
            <button 
              className="btn btn-dark" 
              children="Disabled"
            />
          </div>
        </Card>
      ) : (
        null
      )}
      <Card className="CardView-card" bg="light">
        <Card.Body>
          <div>
            {card?.title}
          </div>
          <div>
            <button 
              type="button" 
              className="CardEdit-btn btn btn-sm" 
              onClick={() => setOpen(true)}
              children={<i className="fa fal fa-pencil fa-sm" />}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardView;

export interface CategoryViewProps {
  cardid: string;
}