import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Select } from './select';

describe('<Select/>', () => {
  test('should render element containing select element', () => {
    const { container } = render(<Select />);
    const select = container.firstChild.firstChild;
    expect(select.tagName).toBe('SELECT');
  });
  test('should render select with options', () => {
    const { container } = render(
      <Select>
        <option>1</option>
        <option>2</option>
      </Select>,
    );
    const select = container.firstChild.firstChild;
    expect(select.tagName).toBe('SELECT');
    expect(select.childNodes[0].tagName).toBe('OPTION');
    expect(select.childNodes[0].value).toBe('1');
    expect(select.childNodes[1].tagName).toBe('OPTION');
    expect(select.childNodes[1].value).toBe('2');
  });
  describe('prop: onChange', () => {
    test('should fire event and select option', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Select onChange={onChange}>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </Select>,
      );
      const select = container.firstChild.firstChild;
      const options = select.childNodes;
      fireEvent.change(select, { target: { value: 'Two' } });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(options[0].selected).toBeFalsy();
      expect(options[1].selected).toBeTruthy();
      expect(options[2].selected).toBeFalsy();
    });
  });
  test('can be used with ref', () => {
    const ref = React.createRef();
    const onFocus = jest.fn();
    render(<Select ref={ref} onFocus={onFocus} />);
    ref.current.firstChild.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
