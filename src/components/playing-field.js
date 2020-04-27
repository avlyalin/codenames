import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from './card';
import styles from './playing-field.module.css';

class PlayingField extends Component {
  render() {
    const { cards, onSelectCard } = this.props;
    return (
      <div className={styles.container}>
        {cards.map((card, index) => {
          return (
            <Card card={card} onSelect={onSelectCard} id={index} key={index} />
          );
        })}
      </div>
    );
  }
}

PlayingField.propTypes = {
  cards: PropTypes.array.isRequired,
  onSelectCard: PropTypes.func.isRequired,
};

export { PlayingField };
