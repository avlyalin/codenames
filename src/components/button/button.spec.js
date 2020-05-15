import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from './button';

describe('<Button />', () => {
  test('should render button', () => {
    const { container } = render(<Button />);
    const button = container.firstChild;
    expect(button.tagName).toEqual(expect.stringMatching(/button/i));
  });
  describe('prop: onClick', () => {
    test('should fire event', () => {
      const onClick = jest.fn();
      const { container } = render(<Button onClick={onClick} />);
      const button = container.firstChild;
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
  describe('prop: classes', () => {
    test('should merge classes', () => {
      const { container, rerender } = render(<Button />);
      const defaultClasses = container.firstChild.className;
      const propClasses = 'button_size_sm button_color_red';
      rerender(<Button classes={propClasses} />);
      expect(container.firstChild).toHaveClass(defaultClasses, propClasses);
    });
  });
  test('can be used with ref', () => {
    const ref = React.createRef();
    const onFocus = jest.fn();
    render(<Button ref={ref} onFocus={onFocus} />);
    ref.current.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
