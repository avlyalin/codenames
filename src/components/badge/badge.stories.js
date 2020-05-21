import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { containerDecorator } from '_storybook/container';
import { Badge } from './badge';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge',
  decorators: [containerDecorator(), withKnobs],
};

export const AllBadges = () => {
  return (
    <>
      <Badge>default</Badge>
      <Badge color={'blue'}>blue</Badge>
      <Badge color={'red'}>red</Badge>
    </>
  );
};

export const Default = () => {
  return (
    <Badge>
      <FontAwesomeIcon icon="crown" size={'sm'} /> Капитан
    </Badge>
  );
};

export const Blue = () => {
  return (
    <Badge color="blue">
      <FontAwesomeIcon icon="crown" size={'sm'} /> Капитан
    </Badge>
  );
};

export const Red = () => {
  return (
    <Badge color="red">
      <FontAwesomeIcon icon="crown" size={'sm'} /> Капитан
    </Badge>
  );
};
