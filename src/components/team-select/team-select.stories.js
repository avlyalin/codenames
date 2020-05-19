import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { TEAMS } from 'src/data/constants';
import { TeamSelect } from './team-select';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Team select',
  decorators: [containerDecorator(), withKnobs],
};

export const WithUsers = () => {
  const redCaptainId = text('Red captain id', '1');
  const blueCaptainId = text('Blue captain id', '1');
  const name = text('Name', 'Blue');
  const user = {
    id: '1',
    name: text('User name', 'Killer 3000'),
    team: select('User team', TEAMS, TEAMS['blue']),
  };
  const users = [
    user,
    { name: 'player_2', team: TEAMS['blue'], id: '2' },
    { name: 'player_3', team: TEAMS['blue'], id: '3' },
    { name: 'player_4', team: TEAMS['blue'], id: '4' },
    { name: 'player_5', team: TEAMS['blue'], id: '5' },
    { name: 'player_6', team: TEAMS['red'], id: '6' },
  ];
  const captains = {
    [TEAMS['blue']]: blueCaptainId,
    [TEAMS['red']]: redCaptainId,
  };
  return (
    <TeamSelect
      name={name}
      captains={captains}
      currentUser={user}
      users={users}
      onJoin={() => {}}
      onJoinAsCaptain={() => {}}
    />
  );
};
