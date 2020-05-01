import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './card';
import styles from './playing-field.module.css';
import { TEAMS } from '../data/constants';

function PlayingField({ cards, onOpenCard }) {
  return (
    <div>
      <div className={styles.container}>
        {cards.map((card, index) => {
          return (
            <Card card={card} onOpen={onOpenCard} id={index} key={index} />
          );
        })}
      </div>
    </div>
  );
}

PlayingField.propTypes = {
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

export { PlayingField };
