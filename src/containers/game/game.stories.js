import React from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { containerDecorator } from '_storybook/container';
import { CARDS_TYPES, TEAMS } from 'src/data/constants';
import { Game } from './game';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Containers/Game',
  decorators: [
    containerDecorator({
      styles: { padding: 0 },
    }),
    withKnobs,
  ],
};

export const Common = () => {
  const color = radios(
    'Color',
    { default: 'default', blue: 'blue', red: 'red' },
    'blue',
  );
  const captains = {
    [TEAMS['blue']]: '1',
    [TEAMS['red']]: '2',
  };
  const user = {
    id: '0',
    name: 'Killer 3000',
    team: color,
  };

  const word = text('Word', 'БИБЛИОТЕКА');
  const count = radios('Size', { '5x4': '20', '5x5': '25', '5x6': '30' }, '25');
  const cards = [...new Array(parseInt(count))].map(() => ({
    type: CARDS_TYPES['agent'],
    text: word,
    opened: false,
    color: TEAMS['blue'],
  }));

  return (
    <BrowserRouter>
      <Route>
        <Game
          cards={cards}
          captains={captains}
          currentUser={user}
          onOpenCard={() => {}}
        />
      </Route>
    </BrowserRouter>
  );
};
