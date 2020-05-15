import React from 'react';
import { render } from '@testing-library/react';
import { FormGroup } from './form-group';

describe('<FormGroup />', () => {
  test('renders <fieldset/> with <legend/> as label if gets multiple childs', () => {
    const { getByText, getByLabelText } = render(
      <FormGroup label="Values">
        <label htmlFor="input-1">Input 1</label>
        <input id="input-1" type="checkbox" />
        <label htmlFor="input-2">Input 2</label>
        <input id="input-2" type="checkbox" />
      </FormGroup>,
    );
    const legend = getByText('Values');
    const input1 = getByLabelText('Input 1');
    const input2 = getByLabelText('Input 2');
    expect(legend.tagName).toEqual(expect.stringMatching(/legend/i));
    expect(input1).toBeTruthy();
    expect(input2).toBeTruthy();
  });
  describe('prop: labelFor is falsy', () => {
    test('renders <fieldset/> with <legend/>', () => {
      const { getByText, getByTestId } = render(
        <FormGroup label="My input">
          <input data-testid="input-1" type="checkbox" />
        </FormGroup>,
      );
      const legend = getByText('My input');
      const input = getByTestId('input-1');
      expect(legend.tagName).toEqual(expect.stringMatching(/legend/i));
      expect(input).toBeTruthy();
    });
  });
  describe('prop: labelFor is truthy', () => {
    test('renders <label/> with "for" attribute', () => {
      const { getByLabelText } = render(
        <FormGroup label="My input" labelFor="input-1">
          <input id="input-1" type="checkbox" />
        </FormGroup>,
      );
      const input = getByLabelText('My input');
      expect(input).toBeTruthy();
    });
  });
});
