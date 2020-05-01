import React from 'react';
import PropTypes from 'prop-types';
import { TEAMS } from '../data/constants';
import styles from './game-container.module.css';
import { GameField } from './game-field';
import { GameStatusBar } from './game-status-bar';

function GameContainer(props) {
  return (
    <div className={styles.container}>
      <GameStatusBar cards={props.cards} />
      <GameField {...props} />
    </div>
  );
}

GameContainer.propTypes = {
  captains: PropTypes.shape({
    blue: PropTypes.string.isRequired,
    red: PropTypes.string.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
      color: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
    })
  ).isRequired,
  onOpenCard: PropTypes.func.isRequired,
};

export { GameContainer };
