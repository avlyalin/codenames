import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from './input';

describe('<Input />', () => {
  test('should render input with type text', () => {
    const { container } = render(<Input />);
    const input = container.firstChild;
    expect(input.tagName).toEqual(expect.stringMatching(/input/i));
    expect(input.type).toBe('text');
  });
  describe('prop: onChange', () => {
    test('should fire event', () => {
      const onChange = jest.fn();
      const { container } = render(<Input onChange={onChange} />);
      const input = container.firstChild;
      fireEvent.change(input, { target: { value: '123' } });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(input.value).toBe('123');
    });
  });
  describe('prop: classes', () => {
    test('should merge classes', () => {
      const { container, rerender } = render(<Input />);
      const defaultClasses = container.firstChild.className;
      const propClasses = 'input_size_lg form-control';
      rerender(<Input classes={propClasses} />);
      expect(container.firstChild).toHaveClass(defaultClasses, propClasses);
    });
  });
  test('can be used with ref', () => {
    const ref = React.createRef();
    const onFocus = jest.fn();
    render(<Input ref={ref} onFocus={onFocus} />);
    ref.current.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
