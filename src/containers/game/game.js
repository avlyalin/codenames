import React from 'react';
import PropTypes from 'prop-types';
import { TEAMS } from 'src/data/constants';
import { GameField } from 'src/components/game-field';
import { GameStatusBar } from 'src/components/game-status-bar';
import styles from './game.module.css';

function Game(props) {
  return (
    <div className={styles.container}>
      <GameStatusBar cards={props.cards} />
      <GameField {...props} />
    </div>
  );
}

Game.propTypes = {
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
    }),
  ).isRequired,
  onOpenCard: PropTypes.func.isRequired,
};

export { Game };
