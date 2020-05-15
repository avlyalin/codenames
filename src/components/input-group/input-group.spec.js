import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../button/button';
import { Input } from '../input';
import { InputGroup } from './input-group';

describe('<InputGroup />', () => {
  test('should render one child', () => {
    const { container } = render(
      <InputGroup>
        <Input />
      </InputGroup>,
    );
    const inputGroup = container.firstChild;
    expect(inputGroup).toHaveAttribute('role', 'group');
    expect(inputGroup.childNodes).toHaveLength(1);
    expect(inputGroup.firstChild.tagName).toBe('INPUT');
  });
  test('should render children and appended addon', () => {
    const { container } = render(
      <InputGroup append={<Button>click</Button>}>
        <Input />
      </InputGroup>,
    );

    const inputGroup = container.firstChild;
    const children = inputGroup.childNodes[0];
    const append = inputGroup.childNodes[1];

    expect(inputGroup.childNodes).toHaveLength(2);
    expect(children.tagName).toBe('INPUT');
    expect(append.tagName).toBe('DIV');
    expect(append.firstChild.tagName).toBe('BUTTON');
  });
  test('should render children and appended addon with fragment', () => {
    const { container } = render(
      <InputGroup
        append={
          <>
            <Button id="button-1">click</Button>
            <Button id="button-2">click 2</Button>
          </>
        }
      >
        <Input />
      </InputGroup>,
    );
    const inputGroup = container.firstChild;
    const children = inputGroup.childNodes[0];
    const append = inputGroup.childNodes[1];

    expect(inputGroup.childNodes).toHaveLength(2);
    expect(children.tagName).toBe('INPUT');
    expect(append.tagName).toBe('DIV');
    expect(append.childNodes).toHaveLength(2);
    expect(append.childNodes[0].tagName).toBe('BUTTON');
    expect(append.childNodes[0].id).toBe('button-1');
    expect(append.childNodes[1].tagName).toBe('BUTTON');
    expect(append.childNodes[1].id).toBe('button-2');
  });
});
