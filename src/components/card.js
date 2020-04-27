import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './card.module.css';

class Card extends Component {
  handleClick() {
    this.props.onSelect(this.props.id);
  }

  render() {
    const { text, opened } = this.props.card;
    const cardClass = classnames({
      [styles.card]: true,
      [styles['card--selected']]: opened,
    });
    return (
      <div className={cardClass} onClick={this.handleClick.bind(this)}>
        <span>{text}</span>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  card: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    color: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export { Card };
