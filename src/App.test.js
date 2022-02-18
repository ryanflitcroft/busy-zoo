import { render, screen } from '@testing-library/react';
import App from './App';

test('renders microscopy in App', () => {
  render(<App />);
  const linkElement = screen.getByText(/busy zoo microscopy/i);
  expect(linkElement).toBeInTheDocument();
});
