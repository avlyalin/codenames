import React, { useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Card } from './card';
import styles from './game-field.module.css';
import { TEAMS } from '../data/constants';

function GameField({ cards, captains, currentUser, onOpenCard }) {
  const isCaptain =
    Object.values(captains).find(
      (captainId) => captainId === currentUser.id
    ) !== undefined;
  const classNames = classnames({
    [styles.container]: true,
    [styles.containerRows4]: false,
    [styles.containerRows5]: true,
  });
  return (
    <div className={classNames}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            id={index}
            card={card}
            isCaptain={isCaptain}
            onOpen={onOpenCard}
          />
        );
      })}
    </div>
  );
}

GameField.propTypes = {
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

export { GameField };
