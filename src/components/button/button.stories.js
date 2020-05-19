import React from 'react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Button } from './button';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button',
  decorators: [containerDecorator(), withKnobs],
};

export const Common = () => {
  const rounded = boolean('Rounded', true);
  const disabled = boolean('Disabled', false);
  const fullWidth = boolean('Full width', true);
  const content = text('Content', 'Click me');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  const shadow = boolean('Shadow', true);
  const size = radios('Size', { sm: 'sm', md: 'md', lg: 'lg' }, 'md');
  return (
    <Button
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      rounded={rounded}
      shadow={shadow}
      size={size}
    >
      {content}
    </Button>
  );
};
