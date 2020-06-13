import {
  toHaveAttribute,
  toHaveClass,
} from '@testing-library/jest-dom/matchers';
import 'src/icons/icons';
import 'src/utils/i18n';

expect.extend({ toHaveClass, toHaveAttribute });
