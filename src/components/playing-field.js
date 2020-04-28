import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './card';
import styles from './playing-field.module.css';

function PlayingField({ cards, onOpenCard, onClickBack }) {
  return (
    <>
      <button onClick={onClickBack}>Назад</button>
      <div className={styles.container}>
        {cards.map((card, index) => {
          return (
            <Card card={card} onOpen={onOpenCard} id={index} key={index} />
          );
        })}
      </div>
    </>
  );
}

PlayingField.propTypes = {
  cards: PropTypes.array.isRequired,
  onOpenCard: PropTypes.func.isRequired,
};

export { PlayingField };
