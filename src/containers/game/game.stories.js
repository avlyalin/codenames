import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { containerDecorator } from '_storybook/container';
import { TEAMS } from 'src/data/constants';
import { with_opened_cards_5x5 } from 'src/data/fixtures';
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

  return (
    <BrowserRouter>
      <Route>
        <Game
          cards={with_opened_cards_5x5}
          captains={captains}
          currentUser={user}
          onOpenCard={() => {}}
        />
      </Route>
    </BrowserRouter>
  );
};
