import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TEAMS } from 'src/data/constants';
import { getTeamProgress } from './get-team-progress';
import styles from './scores-line.module.css';

function ScoresLine({ cards, team, position }) {
  const progress = getTeamProgress(cards, team);
  const progressWidth = `${progress}%`;
  return (
    <div
      className={classnames(
        styles.container,
        'z-10',
        'relative',
        'w-full h-4',
        'rounded-lg',
        'bg-white overflow-hidden',
      )}
    >
      <div
        className={classnames('h-full rounded-lg z-20 absolute ', {
          'right-0': position === 'right',
          'bg-blue-100': team === TEAMS['blue'],
          'bg-red-100': team === TEAMS['red'],
        })}
        style={{ width: progressWidth }}
      />
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
