import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { TEAMS } from 'src/data/constants';
import {
  all_opened_cards_5x5,
  all_opened_red_cards_5x5,
  no_opened_cards_5x5,
  with_opened_cards_5x5,
} from 'src/data/fixtures';
import { ScoresBar } from './scores-bar';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Scores bar',
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
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={no_opened_cards_5x5} currentUser={user} />;
};

export const WithOpenedCards = () => {
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={with_opened_cards_5x5} currentUser={user} />;
};

export const WithAllOpenedTeamCards = () => {
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={all_opened_red_cards_5x5} currentUser={user} />;
};

export const WithAllOpenedCards = () => {
  const user = {
    id: '1',
    name: '',
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  return <ScoresBar cards={all_opened_cards_5x5} currentUser={user} />;
};
