import React from 'react';

import Card from 'react-bootstrap/Card';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CategoryView: React.FC<CategoryViewProps> = function({ categoryid }) {
  const category = useSelector((state: RootState) => state.categories.byId[categoryid]);
  return (
    <div className="CategoryView">
      <Card className="CategoryView-card" bg="light">
        <Card.Body>
          <h6>
            {category?.title}
          </h6>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default CategoryView;

export interface CategoryViewProps {
  categoryid: string;
}