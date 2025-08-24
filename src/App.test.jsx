import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders h1 and h2 tags', () => {
  render(<App />);
  
  const h1Element = screen.getByRole('heading', { level: 1 });
  const h2Element = screen.getByRole('heading', { level: 2 });

  expect(h1Element).toBeInTheDocument();
  expect(h2Element).toBeInTheDocument();
});
