import React from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { containerDecorator } from '_storybook/container';
import {
  CARDS_DICTIONARIES,
  FIELD_SIZES,
  LANGUAGES,
  TEAMS,
} from 'src/data/constants';
import { Lobby } from './lobby';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Containers/Lobby',
  decorators: [
    containerDecorator({
      styles: { padding: 0 },
    }),
    withKnobs,
  ],
};

export const Common = () => {
  const sessionId = text('Session id', '_35gVe01Dsc');
  const userTeam = radios(
    'User team',
    { default: '', blue: 'blue', red: 'red' },
    '',
  );
  const settings = {
    language: LANGUAGES['ru'],
    fieldSize: FIELD_SIZES['5x5'],
    dictionaryFileName: CARDS_DICTIONARIES[0],
  };
  const captains = {
    [TEAMS['blue']]: '2',
    [TEAMS['red']]: '6',
  };
  const user = {
    id: '1',
    name: 'Killer 3000',
    team: userTeam,
  };
  const users = [
    user,
    { name: 'player_2', team: TEAMS['blue'], id: '2' },
    { name: 'player_3', team: TEAMS['blue'], id: '3' },
    { name: 'player_4', team: TEAMS['blue'], id: '4' },
    { name: 'player_5', team: TEAMS['blue'], id: '5' },
    { name: 'player_6', team: TEAMS['red'], id: '6' },
  ];

  return (
    <BrowserRouter>
      <Route>
        <Lobby
          captains={captains}
          currentUser={user}
          sessionId={sessionId}
          settings={settings}
          users={users}
          onJoinTeam={() => {}}
          onChangeSettings={() => {}}
          onChangeUsername={() => {}}
          onJoinTeamAsCaptain={() => {}}
          onClickShare={() => {}}
          onClickGenerateCards={() => {}}
        />
      </Route>
    </BrowserRouter>
  );
};
