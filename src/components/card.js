import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './card.module.css';

function Card({ id, card, onOpen }) {
  const { text, opened } = card;
  const cardClass = classnames({
    [styles.card]: true,
    [styles['card--selected']]: opened,
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
};

export { Card };
