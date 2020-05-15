import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { containerDecorator } from '_storybook/container';
import { Input } from '../input';
import { Button } from '../button/button';
import { InputGroup } from './input-group';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Input group',
  decorators: [containerDecorator, withKnobs],
};

export const WithSingleAppend = () => {
  const disabled = boolean('Disabled', false, 'input');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
    'button',
  );
  return (
    <InputGroup
      append={
        <Button color={color} classes="w-10">
          <FontAwesomeIcon icon="share-alt" size="lg" />
        </Button>
      }
    >
      <Input disabled={disabled} defaultValue="Obi-Wan Kenobi" />
    </InputGroup>
  );
};

export const WithMultipleAppends = () => {
  const disabled = boolean('Disabled', false, 'input');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
    'button',
  );
  const btnContent = text('Text', 'Button', 'button');
  return (
    <InputGroup
      append={
        <>
          <Button color={color}>{btnContent}</Button>
          <Button color={color}>{btnContent}</Button>
        </>
      }
    >
      <Input disabled={disabled} defaultValue="Obi-Wan Kenobi" />
    </InputGroup>
  );
};
