import React from 'react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Button } from './button';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button',
  decorators: [containerDecorator, withKnobs],
};

export const Common = () => {
  const disabled = boolean('Disabled', false);
  const block = boolean('Block', true);
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  return (
    <Button block={block} color={color} disabled={disabled}>
      Click me
    </Button>
  );
};
