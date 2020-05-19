import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from 'src/components/icon/icon';

describe('<Icon />', () => {
  test('should render icon', () => {
    const { container } = render(<Icon icon="user-plus" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('should render text', () => {
    const { container } = render(<Icon text="VS" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('icon prop has higher priority than text', () => {
    const { container } = render(<Icon icon="crown" text="VS" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('should set blue text color class', () => {
    const { container } = render(<Icon color="blue" icon="crown" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
