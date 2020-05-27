import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TEAMS } from 'src/data/constants';
import { Icon } from 'src/components/icon';
import {
  getRemainingCardsCount,
  getTeamProgress,
} from 'src/utils/team-progress';
import styles from './scores-line.module.css';

function ScoresLine({ cards, team, position }) {
  const remainingCards = getRemainingCardsCount(cards, team);
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
          'relative mt-1 md:mt-2 lg:mt-3 rounded-lg h-4 bg-white flex',
        )}
      >
        <div
          className={classnames('h-full rounded-lg z-20 absolute', {
            'left-0': position === 'left',
            'right-0': position === 'right',
            'bg-blue-100': team === TEAMS['blue'],
            'bg-red-100': team === TEAMS['red'],
          })}
          style={{ width: progressWidth }}
        />
        <Icon
          classes={classnames(
            'absolute bottom-0 transform translate-y-1/4 mx-auto z-20',
            {
              'left-0': position === 'left',
              'right-0': position === 'right',
            },
          )}
          color={team}
          text={`${remainingCards}`}
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
