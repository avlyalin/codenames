import React from 'react';
import { render } from '@testing-library/react';
import { cloneElement } from './clone-element';

describe('cloneElement', () => {
  const Component = (props) => {
    return <span {...props}>component</span>;
  };

  test('should return copy of html element', () => {
    const input = <input type="text" />;
    const { container } = render(cloneElement(input, { type: 'radio' }));
    const newInput = container.firstChild;
    expect(newInput.type).toBe('radio');
  });
  test('should return copy of fragment nodes', () => {
    const inputs = (
      <>
        <input type="text" />
        <input type="text" />
      </>
    );

    const { container } = render(cloneElement(inputs, { type: 'radio' }));
    const newInputs = container.childNodes;
    for (let i = 0; i < newInputs.length; i++) {
      expect(newInputs[i].type).toBe('radio');
    }
  });
  test('should return copy of react element', () => {
    const { container } = render(
      cloneElement(<Component />, { className: 'custom-span' }),
    );
    const component = container.firstChild;
    expect(component).toHaveClass('custom-span');
  });
  test('should return boolean unmodified', () => {
    expect(cloneElement(true, { newProp: 'newProp' })).toBe(true);
  });
  test('should return number unmodified', () => {
    expect(cloneElement(123, { newProp: 'newProp' })).toBe(123);
  });
  test('should return string unmodified', () => {
    expect(cloneElement('hello', { newProp: 'newProp' })).toBe('hello');
  });
  test('should return null unmodified', () => {
    expect(cloneElement(null, { newProp: 'newProp' })).toBe(null);
  });
  test('should return undefined unmodified', () => {
    expect(cloneElement(undefined, { newProp: 'newProp' })).toBe(undefined);
  });
});
