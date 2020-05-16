import React from 'react';
import { Route } from 'react-router-dom';

import './Categories.scss';
import CategoryList from './CategoryList';

function Categories() {
  return (
    <Route path="/boards/:boardid" component={CategoryList}/>
  );
}

export default Categories;
