test('Test test', () => {
  let k = ["55555"];
  expect(k.length).toBe(1);
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Load/i);
  expect(linkElement).toBeInTheDocument();
});