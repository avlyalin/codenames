import React from 'react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { containerDecorator } from '_storybook/container';
import { Badge } from './badge';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Badge',
  decorators: [containerDecorator, withKnobs],
};

export const common = () => {
  const rounded = boolean('Rounded', true);
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'default',
  );
  return (
    <Badge color={color} rounded={rounded}>
      <FontAwesomeIcon icon="crown" size={'sm'} /> Капитан
    </Badge>
  );
};
