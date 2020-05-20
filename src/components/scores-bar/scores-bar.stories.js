import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { CARDS_TYPES, TEAMS } from 'src/data/constants';
import { ScoresBar } from './scores-bar';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Scores bar',
  decorators: [
    containerDecorator({
      styles: { backgroundColor: 'whitesmoke', height: '100vh' },
    }),
    withKnobs,
  ],
  parameters: {
    viewport: { defaultViewport: 'ipad10p' },
  },
};

export const NoOpenedCards = () => {
  const cards = [
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: false,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: false,
      color: TEAMS['blue'],
    },
  ];
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={cards} currentUser={user} />;
};

export const WithOpenedCards = () => {
  const cards = [
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: false,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: false,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
  ];
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={cards} currentUser={user} />;
};

export const WithAllOpenedTeamCards = () => {
  const cards = [
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: false,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
  ];
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={cards} currentUser={user} />;
};

export const WithAllOpenedCards = () => {
  const cards = [
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['blue'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
    {
      type: CARDS_TYPES['agent'],
      text: '',
      opened: true,
      color: TEAMS['red'],
    },
  ];
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={cards} currentUser={user} />;
};
