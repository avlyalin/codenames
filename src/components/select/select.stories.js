import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Select } from './select';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Select',
  decorators: [containerDecorator(), withKnobs],
};

export const common = () => {
  return (
    <>
      <Select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    </>
  );
};
