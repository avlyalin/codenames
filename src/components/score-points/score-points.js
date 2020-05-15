import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TEAMS } from '../../data/constants';
import styles from './score-points.module.css';

function ScorePoints({ team, cards }) {
  const teamName = team === TEAMS['blue'] ? 'синие' : 'красные';
  const points = cards.reduce((count, card) => {
    if (!card.opened && card.color === team) {
      return ++count;
    }
    return count;
  }, 0);
  const displayName = `${teamName} ${points}`;
  const containerClass = classnames({
    [styles.container]: true,
    [styles.containerBlue]: team === TEAMS['blue'],
    [styles.containerRed]: team === TEAMS['red'],
  });
  return (
    <div className={containerClass}>
      <span className={styles.teamName}>{displayName}</span>
    </div>
  );
}

ScorePoints.propTypes = {
  team: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
      color: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
    }),
  ).isRequired,
};

export { ScorePoints };
