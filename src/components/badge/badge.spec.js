import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './badge';

describe('<Badge/>', () => {
  test('should render rounded gray badge', () => {
    const { container } = render(<Badge />);
    const badge = container.firstChild;
    expect(badge).toMatchSnapshot();
  });
  test('should render red badge with square borders', () => {
    const { container } = render(<Badge color="red" rounded={false} />);
    const badge = container.firstChild;
    expect(badge).toMatchSnapshot();
  });
});
