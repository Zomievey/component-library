import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/mock tech 5/i);
  expect(linkElement).toBeInTheDocument();
});
