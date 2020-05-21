import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Radio } from './radio';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio',
  decorators: [containerDecorator(), withKnobs],
};

export const Common = () => {
  const checked = boolean('Checked', false);
  const disabled = boolean('Disabled', false);
  const label = text('Label', '');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  return (
    <Radio
      checked={checked}
      disabled={disabled}
      label={label}
      value="5x4"
      color={color}
      onChange={() => {}}
    />
  );
};

export const WithLabel = () => {
  const checked = boolean('Checked', false);
  const disabled = boolean('Disabled', false);
  const label = text('Label', '5x5');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  return (
    <Radio
      checked={checked}
      disabled={disabled}
      label={label}
      value="5x4"
      color={color}
      onChange={() => {}}
    />
  );
};
