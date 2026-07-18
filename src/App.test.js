import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Techsprint arena coming soon title', () => {
  render(<App />);
  const linkElement = screen.getByText(/TECHSPRINT ARENA IS COMING SOON/i);
  expect(linkElement).toBeInTheDocument();
});
