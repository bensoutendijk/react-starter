import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '.';

test('app', () => {
  const element = render(<TodoList />);
  expect(element)
});
