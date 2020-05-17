import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import CardView from '../Cards/CardView';
import CardNew from '../Cards/CardNew';

const CategoryView: React.FC<CategoryViewProps> = function({ categoryid }) {
  const [open, setOpen] = useState(false);
  const category = useSelector((state: RootState) => state.categories.byId[categoryid]);
  const cards = useSelector((state: RootState) => state.cards);

  const categoryCards = cards.allIds.filter((id) => cards.byId[id]?.categoryid === category?._id);

  return (
    <div className="CategoryView">
      <Card className="CategoryView-card" bg="light">
        <Card.Body>
          <h6>
            {category?.title}
          </h6>
          <div className="CardList">
            {categoryCards.map((id) => <CardView key={id} cardid={id} />)}
          </div>
          <CardNew categoryid={categoryid} />
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default CategoryView;

export interface CategoryViewProps {
  categoryid: string;
}