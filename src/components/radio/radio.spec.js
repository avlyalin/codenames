import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Radio } from './radio';

function renderRadio(props) {
  const { label = 'radio-input', value = '123', ...rest } = props;
  const utils = render(<Radio label={label} value={value} {...rest} />);
  const input = utils.getByLabelText(label);
  return {
    input,
    ...utils,
  };
}

describe('<Radio/>', () => {
  test('should render input with type radio and with label', () => {
    const { input } = renderRadio({ value: 'one' });
    expect(input).toBeTruthy();
    expect(input.type).toBe('radio');
    expect(input.checked).toBeFalsy();
    expect(input.value).toBe('one');
  });

  describe('prop: onChange', () => {
    test('should fire event', () => {
      const onChange = jest.fn();
      const { input } = renderRadio({ onChange });
      fireEvent.click(input);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('prop: unchecked', () => {
    test('should render unchecked input', () => {
      const { input } = renderRadio({ checked: false });
      expect(input.checked).toBeFalsy();
    });
  });

  describe('prop: checked', () => {
    test('should render checked button', () => {
      const { input } = renderRadio({ checked: true });
      expect(input.checked).toBeTruthy();
    });
  });

  test('can be used with ref', () => {
    const ref = React.createRef();
    const onFocus = jest.fn();
    renderRadio({ onFocus, ref });
    ref.current.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
