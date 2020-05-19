import React from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { WithRadioGroup as Radio } from '../radio';
import { RadioGroup } from './radio-group';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Radio group',
  decorators: [containerDecorator(), withKnobs],
};

export const Common = () => {
  const label = text('Label', 'Field size');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  let value = '5x4';
  return (
    <RadioGroup
      name="field-size"
      label={label}
      value={value}
      color={color}
      onChange={() => {}}
    >
      <Radio label="5x4" value="5x4" />
      <Radio label="5x5" value="5x5" />
      <Radio label="5x6" value="5x6" />
    </RadioGroup>
  );
};
