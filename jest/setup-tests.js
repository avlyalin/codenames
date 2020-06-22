import {
  toHaveAttribute,
  toHaveClass,
} from '@testing-library/jest-dom/matchers';
import 'src/icons/icons';
import 'src/utils/i18n';
import 'whatwg-fetch';

expect.extend({ toHaveClass, toHaveAttribute });

// mock fetch
beforeAll(() => {
  jest.spyOn(window, 'fetch');
});
afterEach(() => jest.clearAllMocks());
afterAll(() => window.fetch.mockRestore());
