import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import CategoryView from './CategoryView';
import CategoryNew from './CategoryNew';

function CategoryList() {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <div className="CategoryList">
      {categories.allIds.map((id) => {
        return (
          <CategoryView key={id} categoryid={id} />
        );
      })}
      <CategoryNew />
    </div>
  );
}

export default CategoryList;
