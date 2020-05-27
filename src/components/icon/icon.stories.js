import React from 'react';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Icon } from './icon';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Icon',
  decorators: [containerDecorator(), withKnobs],
};

export const WithIcon = () => {
  const filled = boolean('Filled', false);
  const icon = text('Icon name', 'user-plus');
  const textContent = text('Text content', '');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  return <Icon color={color} icon={icon} text={textContent} filled={filled} />;
};

export const WithText = () => {
  const filled = boolean('Filled', false);
  const icon = text('Icon name', '');
  const textContent = text('Text content', 'vs');
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  return <Icon color={color} icon={icon} text={textContent} filled={filled} />;
};
