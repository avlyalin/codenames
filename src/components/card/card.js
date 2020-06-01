import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CARDS_TYPES, TEAMS } from 'src/data/constants';
import styles from './card.module.css';

const Card = React.forwardRef(function Card(
  { card, isCaptain, onOpen, ...other },
  ref,
) {
  const { text, type, color, opened } = card;
  const disclosed = opened || isCaptain;

  const handleClick = () => {
    if (!isCaptain && !opened) {
      onOpen();
    }
  };

  let colorClasses = 'bg-white';
  if (color === TEAMS['blue']) {
    colorClasses = 'bg-blue-100 text-white';
  } else if (color === TEAMS['red']) {
    colorClasses = 'bg-red-100 text-white';
  } else if (type === CARDS_TYPES['killer']) {
    colorClasses = 'bg-gray-400 text-white';
  } else if (type === CARDS_TYPES['citizen']) {
    colorClasses = 'bg-gray-100 text-black';
  }

  return (
    <div
      data-testid={'card'}
      ref={ref}
      className={classnames(
        styles.card,
        'inline-flex justify-center items-center',
        'border border-solid border-gray-200 rounded-lg',
        'min-h-10 max-h-30',
        'uppercase font-bold truncate',
        'shadow-md',
        'select-none',
        disclosed ? colorClasses : 'bg-white text-gray-500',
        {
          'hover:shadow-b-r': !isCaptain,
          'cursor-pointer': !isCaptain,
          'opacity-25': opened && isCaptain,
        },
      )}
      onClick={handleClick}
      {...other}
    >
      {text}
    </div>
  );
});

Card.propTypes = {
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
