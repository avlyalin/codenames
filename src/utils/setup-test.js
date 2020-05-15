import {
  toHaveAttribute,
  toHaveClass,
} from '@testing-library/jest-dom/matchers';

expect.extend({ toHaveClass, toHaveAttribute });
