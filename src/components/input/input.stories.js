import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Input } from './input';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Input',
  decorators: [containerDecorator(), withKnobs],
};

export const common = () => {
  const disabled = boolean('Disabled', false);
  const value = text('Value', 'Chuck Norris');
  return <Input disabled={disabled} value={value} onChange={() => {}} />;
};
