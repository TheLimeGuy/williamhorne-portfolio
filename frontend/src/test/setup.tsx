import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// This runs a cleanup function after each test case.
afterEach(() => {
  cleanup();
});

// Mock the entire 'flowbite-react' library
vi.mock('flowbite-react', () => ({
  // This JSX is now in a .tsx file, so it will be parsed correctly.
  DarkThemeToggle: () => <button>Mocked Theme Toggle</button>,
  
  initThemeMode: () => {},
}));