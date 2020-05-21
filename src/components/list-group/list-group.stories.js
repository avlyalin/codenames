import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { ListGroup, ListGroupItem } from '../list-group';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/List group',
  decorators: [containerDecorator(), withKnobs],
};

export const common = () => {
  const rounded = boolean('Rounded', true);
  return (
    <ListGroup rounded={rounded}>
      <ListGroupItem>One</ListGroupItem>
      <ListGroupItem>Two</ListGroupItem>
      <ListGroupItem>Three</ListGroupItem>
    </ListGroup>
  );
};
