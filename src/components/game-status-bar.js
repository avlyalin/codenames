import React from 'react';
import PropTypes from 'prop-types';
import { TEAMS } from '../data/constants';
import styles from './game-status-bar.module.css';
import { ScorePoints } from './score-points';

const GameStatusBar = ({ cards }) => {
  return (
    <div className={styles.container}>
      <ScorePoints team={TEAMS['red']} cards={cards} />
      <ScorePoints team={TEAMS['blue']} cards={cards} />
    </div>
  );
};

GameStatusBar.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
      color: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
    })
  ).isRequired,
};

export { GameStatusBar };
