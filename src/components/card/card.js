import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CARDS_TYPES, TEAMS } from 'src/data/constants';

const Card = React.forwardRef(function Card(
  { card, isCaptain, onOpen, ...other },
  ref,
) {
  const { text, type, color, opened } = card;
  const disclosed = opened || isCaptain;

  let colorClasses = '';
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
      ref={ref}
      className={classnames(
        'flex justify-center items-center',
        'border-2 border-solid border-gray-200 rounded-lg',
        'min-h-20',
        'py-2 px-1',
        'text-xl uppercase font-bold',
        'shadow-b-r',
        disclosed ? colorClasses : 'text-gray-500',
      )}
      onClick={onOpen}
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
