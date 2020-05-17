import React from 'react';

import Card from 'react-bootstrap/Card';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CardView: React.FC<CategoryViewProps> = function({ cardid }) {
  const card = useSelector((state: RootState) => state.cards.byId[cardid]);
  return (
    <div className="CardView">
      <Card className="CardView-card" bg="light">
        <Card.Body>
          {card?.title}
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default CardView;

export interface CategoryViewProps {
  cardid: string;
}