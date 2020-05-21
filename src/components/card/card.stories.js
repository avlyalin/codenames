import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { CARDS_TYPES } from 'src/data/constants';
import { Card } from './card';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Card',
  decorators: [containerDecorator(), withKnobs],
};

export const TeamCard = () => {
  const isCaptain = boolean('Is captain', false);
  const opened = boolean('Opened', false);
  const color = radios('Color', { blue: 'blue', red: 'red' }, 'blue');
  const word = text('Word', 'Библиотека');
  return (
    <Card
      id={1}
      card={{
        type: CARDS_TYPES['agent'],
        text: word,
        color: color,
        opened: opened,
      }}
      isCaptain={isCaptain}
      onOpen={() => {}}
    />
  );
};

export const KillerCard = () => {
  const isCaptain = boolean('Is captain', false);
  const opened = boolean('Opened', false);
  const word = text('Word', 'Библиотека');
  return (
    <Card
      id={1}
      card={{
        type: CARDS_TYPES['killer'],
        text: word,
        opened: opened,
      }}
      isCaptain={isCaptain}
      onOpen={() => {}}
    />
  );
};

export const CitizenCard = () => {
  const isCaptain = boolean('Is captain', false);
  const opened = boolean('Opened', false);
  const word = text('Word', 'Библиотека');
  return (
    <Card
      id={1}
      card={{
        type: CARDS_TYPES['citizen'],
        text: word,
        opened: opened,
      }}
      isCaptain={isCaptain}
      onOpen={() => {}}
    />
  );
};
