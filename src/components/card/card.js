import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CARDS_TYPES, TEAMS } from 'src/data/constants';
import styles from './card.module.css';

function Card({ id, card, isCaptain, onOpen }) {
  const { text, type, color, opened } = card;
  const disclosed = opened || isCaptain;
  const cardClass = classnames({
    [styles.card]: true,
    [styles.cardOpened]: opened,
    [styles.cardBlue]: disclosed && color === TEAMS['blue'],
    [styles.cardRed]: disclosed && color === TEAMS['red'],
    [styles.cardKiller]: disclosed && type === CARDS_TYPES['killer'],
  });
  return (
    <div className={cardClass} onClick={() => onOpen(id)}>
      <span>{text}</span>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  card: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    color: PropTypes.string,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
  isCaptain: PropTypes.bool.isRequired,
};

export { Card };
