import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { WithRadioGroup as Radio } from '../radio';
import { RadioGroup } from './radio-group';

describe('<RadioGroup/>', () => {
  test('should render component with radiogroup role', () => {
    const { container } = render(<RadioGroup />);
    const role = container.firstChild.getAttribute('role');
    expect(role).toBe('radiogroup');
  });

  test('should emit onChange event', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup onChange={onChange}>
        <Radio label="one" value="1" />
      </RadioGroup>,
    );
    const radio = getByLabelText('one');
    // react uses "click" event to detect changes in checkboxes and radio inputs
    fireEvent.click(radio);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should pass checked prop for radios', () => {
    const { rerender, getByLabelText } = render(
      <RadioGroup value="2">
        <Radio label="one" value="1" />
        <Radio label="two" value="2" />
        <Radio label="three" value="3" />
      </RadioGroup>,
    );
    expect(getByLabelText('two').checked).toBeTruthy();
    rerender(
      <RadioGroup value="3">
        <Radio label="one" value="1" />
        <Radio label="two" value="2" />
        <Radio label="three" value="3" />
      </RadioGroup>,
    );
    expect(getByLabelText('two').checked).toBeFalsy();
    expect(getByLabelText('three').checked).toBeTruthy();
  });

  test('should pass name prop for radios', () => {
    const { getByLabelText } = render(
      <RadioGroup name="numeric">
        <Radio label="one" value="1" />
        <Radio label="two" value="2" />
        <Radio label="three" value="3" name="other-name" />
      </RadioGroup>,
    );
    expect(getByLabelText('one')).toHaveAttribute('name', 'numeric');
    expect(getByLabelText('two')).toHaveAttribute('name', 'numeric');
    expect(getByLabelText('three')).toHaveAttribute('name', 'numeric');
  });
});
