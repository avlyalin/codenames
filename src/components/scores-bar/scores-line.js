import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TEAMS } from 'src/data/constants';
import { getTeamProgress } from './get-team-progress';
import styles from './scores-line.module.css';

function ScoresLine({ cards, team, position }) {
  const progress = getTeamProgress(cards, team);
  const progressWidth = `${progress}%`;
  const teamName = team === TEAMS['blue'] ? 'Синяя команда' : 'Красная команда';

  return (
    <div
      className={classnames('z-10 w-full', {
        'text-right': position === 'right',
      })}
    >
      <span className="text-sm md:text-base text-gray-400">{teamName}</span>
      <div
        className={classnames(
          styles.container,
          'relative mt-1 h-4 rounded-lg bg-white',
        )}
      >
        <div
          className={classnames('h-full rounded-lg z-20 absolute', {
            'right-0': position === 'right',
            'bg-blue-100': team === TEAMS['blue'],
            'bg-red-100': team === TEAMS['red'],
          })}
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
}

ScoresLine.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
      color: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
    }),
  ).isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  team: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
};

export { ScoresLine };
