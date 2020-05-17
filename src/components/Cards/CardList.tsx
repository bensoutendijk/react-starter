import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import CardView from './CardView';
import CardNew from './CardNew';

function CardList() {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <div className="CategoryList">
      {categories.allIds.map((id) => {
        return (
          <CardView key={id} cardid={id} />
        );
      })}
      <CardNew />
    </div>
  );
}

export default CardList;
