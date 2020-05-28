import React from 'react';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { TEAMS } from 'src/data/constants';
import { Winners } from './winners';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Winners',
  decorators: [containerDecorator(), withKnobs],
};

export const common = () => {
  const winnerTeam = radios(
    'Winner team',
    { blue: TEAMS['blue'], red: TEAMS['red'] },
    'blue',
  );
  return <Winners team={winnerTeam} />;
};
