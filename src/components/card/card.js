import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CARDS_TYPES, TEAMS } from 'src/data/constants';
import styles from './card.module.css';

const Card = React.forwardRef(function Card(
  { card, isCaptain, onOpen, ...other },
  ref,
) {
  const { text, type, color, opened } = card;

  const [opening, setOpening] = useState(false);
  const [openingFinished, setOpeningFinished] = useState(false);

  const handleTouchStart = () => {
    setOpening(true);
  };

  const handleMouseDown = (e) => {
    if (Number(e.button) === 0) setOpening(true);
  };

  const stopOpening = () => {
    setOpening(false);
  };

  const handleCoverTransitionEnd = (e) => {
    if (e.propertyName === 'background-size' && opening === true) {
      setOpeningFinished(true);
      onOpen();
    }
  };

  return (
    <div
      data-testid={'card'}
      ref={ref}
      className={classnames(styles.card, 'relative')}
      onMouseDown={handleMouseDown}
      onMouseUp={stopOpening}
      onMouseLeave={stopOpening}
      onTouchStart={handleTouchStart}
      onTouchEnd={stopOpening}
      onTouchCancel={stopOpening}
      {...other}
    >
      <div
        className={classnames(styles.cardInner, 'min-h-8', {
          [styles.cardInnerOpened]: opened || isCaptain,
        })}
      >
        <div
          data-testid={'card-cover'}
          className={classnames(
            styles.cardFront,
            'bg-white text-gray-500 border-gray-200',
            'bg-no-repeat bg-left-center',
            'hover:shadow-b-r',
            'cursor-pointer',
            {
              [styles.cardFrontCover]: opening || openingFinished,
            },
          )}
          onTransitionEnd={handleCoverTransitionEnd}
        >
          {text}
        </div>

        <div
          className={classnames(styles.cardBack, {
            'bg-blue-100 border-blue-200 text-white': color === TEAMS['blue'],
            'bg-red-100 border-red-200 text-white': color === TEAMS['red'],
            'bg-gray-400 border-gray-500 text-white':
              type === CARDS_TYPES['killer'],
            'bg-yellow-100 border-yellow-200 text-gray-500':
              type === CARDS_TYPES['citizen'],
            'opacity-25': opened && isCaptain,
          })}
        >
          {text}
        </div>
      </div>
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
