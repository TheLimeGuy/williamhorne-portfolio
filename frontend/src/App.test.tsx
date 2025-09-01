import { describe, it, expect } from 'vitest'; // Note: vi is no longer needed here
import { render, screen } from '@testing-library/react';
import App from './App.tsx';

describe('App Component', () => {
  it('should render the main headline', () => {
    render(<App />);
    const headline = screen.getByText(/Build fast with us/i);
    expect(headline).toBeInTheDocument();
  });

  it('should render all 6 cards with their titles', () => {
    render(<App />);
    expect(screen.getByText('Flowbite React Docs')).toBeInTheDocument();
    expect(screen.getByText('Flowbite Blocks')).toBeInTheDocument();
    expect(screen.getByText('Flowbite Icons')).toBeInTheDocument();
    expect(screen.getByText('Flowbite Illustrations')).toBeInTheDocument();
    expect(screen.getByText('Flowbite Pro')).toBeInTheDocument();
    expect(screen.getByText('Flowbite Figma')).toBeInTheDocument();
  });

  it('should render the cards as links with correct href attributes', () => {
    render(<App />);
    const docsLink = screen.getByRole('link', { name: /flowbite react docs/i });
    expect(docsLink).toHaveAttribute('href', 'https://flowbite-react.com/');
  });

  it('should render the dark theme toggle button', () => {
    render(<App />);
    // This will find the fake button from our global mock in setup.ts
    const toggleButton = screen.getByRole('button', { name: /mocked theme toggle/i });
    expect(toggleButton).toBeInTheDocument();
  });
});