import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message in header', () => {
  render(<App />);
  const headerElement = screen.getByText(/welcome to aj's/i);
  expect(headerElement).toBeInTheDocument();
});
