import React, { useState, useEffect, useRef } from 'react';

import Card from 'react-bootstrap/Card';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import Form from 'react-bootstrap/Form';
import { updateCardForm, updateCard } from '../../store/cards/actions';

const CardView: React.FC<CategoryViewProps> = function({ cardid }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);
  const cards = useSelector((state: RootState) => state.cards);
  const card = cards.byId[cardid];
  const cardForm = cards.form[cardid];

  const dispatch = useDispatch();

  const handleSubmit = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cardForm = cards.form[cardid];
    if (typeof cardForm === 'undefined') {
      return;
    }

    dispatch(updateCard(cardForm));
    setOpen(false);
  };

  const handleChange = function(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const cardForm = cards.form[cardid];
    if (typeof cardForm === 'undefined') {
      return;
    }

    dispatch(updateCardForm({ ...cardForm, [e.target.name]: e.target.value }));
  };

  const handleOpen = function() {
    if (typeof card === 'undefined') {
      return;
    }

    dispatch(updateCardForm(card));
    setOpen(true);
  };

  useEffect(() => {
    const clickHandler = function(e: MouseEvent) {
      if (e.target === cardRef.current) {
        setOpen(false);
      }
    }

    const keypressHandler = function(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('click', clickHandler);
      document.addEventListener('keydown', keypressHandler);
      return () => {
        document.removeEventListener('click', clickHandler);
        document.removeEventListener('keydown', keypressHandler);
      }
    }
  });

  return (
    <div className="CardView">
      {open ? (
        <Card className="CardEdit-card" ref={cardRef}>
          <Form className="CardEdit-card-form" onSubmit={handleSubmit}>
            <Card.Body>
              <Form.Control 
                autoFocus
                as="textarea"
                rows={4}
                style={{ resize: 'none' }}
                name="title"
                value={cardForm?.title}
                onChange={handleChange}
              />
            </Card.Body>
            <div className="mt-2">
              <button 
                type="submit"
                className="btn btn-success" 
                children="Save"
              />
            </div>
          </Form>
          <div className="CardEdit-card-quicktools">
            <button 
              className="btn btn-dark" 
              children="Edit labels"
            />
            <button 
              className="btn btn-dark" 
              children="Copy"
            />
            <button 
              className="btn btn-dark" 
              children="Archive"
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
              onClick={handleOpen}
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