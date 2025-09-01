/**
 * This file configures Vite, the build tool, and Vitest, the testing framework.
 * It uses an environment-specific setup to ensure that development-only plugins
 * do not interfere with the test environment.
 */

// This is a triple-slash directive, a command for the TypeScript compiler.
// It automatically loads Vitest's type definitions and merges them with Vite's,
// providing full type-safety and autocompletion for the `test` configuration block below.
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import flowbiteReact from 'flowbite-react/plugin/vite';

// We use the function form of defineConfig to create a configuration that changes
// based on the current environment ('development', 'production', or 'test').
// The `mode` parameter is automatically provided by Vite.
export default defineConfig(({ mode }) => ({
  /**
   * The list of plugins Vite will use.
   */
  plugins: [
    // Enables React support (e.g., JSX transformation).
    react(),

    // This is the critical fix for the hanging process issue.
    // The tailwindcss() and flowbiteReact() plugins watch the file system for changes,
    // which is unnecessary and problematic in a test environment.
    // This conditional logic ensures they are ONLY included when the mode is NOT 'test'.
    mode !== 'test' && tailwindcss(),
    mode !== 'test' && flowbiteReact(),

    // The .filter(Boolean) is a clean way to remove any `false` values from the array
    // that result from the conditional logic above, ensuring a valid plugin array.
  ].filter(Boolean),

  /**
   * The configuration for Vitest, the test runner.
   */
  test: {
    // Allows using Vitest APIs (describe, it, expect) in test files without importing them.
    globals: true,
    // Sets up a simulated browser environment (using JSDOM) so that React components
    // can be rendered and tested without a real browser.
    environment: 'jsdom',
    // Specifies a setup file that runs before any tests. This is used for global
    // mocks and to add custom test matchers like `.toBeInTheDocument()`.
    setupFiles: './src/test/setup.tsx',
    // Narrows the search for test files to the `src` directory, preventing Vitest
    // from accidentally running tests inside `node_modules`.
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    // Explicitly tells Vitest to ignore specific files and directories.
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/main.tsx',
      '**/.flowbite-react/**',
    ],

    /**
     * Configuration for test coverage reporting.
     */
    coverage: {
      // Specifies the engine used to collect coverage data ('v8' is fast).
      provider: 'v8',
      // Defines the formats for the coverage report output.
      reporter: ['text', 'json', 'html'],
      // Sets the minimum required code coverage. If any metric falls below 80%,
      // the `npm run coverage` command will fail, enforcing a quality gate.
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      // Lists files and patterns to ignore when calculating code coverage.
      // This prevents configuration files and other non-testable code from
      // skewing the coverage results.
      exclude: [
        '**/.flowbite-react/**',
        '**/main.tsx',
        '**/*.config.js',
        '**/*.config.ts',
        '**/vite-env.d.ts',
        '**/src/test/setup.tsx',
      ],
    },
  },
}));
