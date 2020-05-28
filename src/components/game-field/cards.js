import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { TEAMS } from 'src/data/constants';
import { Card } from '../card';

function Cards({ cards, captains, currentUser, onOpenCard }) {
  const isCaptain =
    Object.values(captains).find(
      (captainId) => captainId === currentUser.id,
    ) !== undefined;

  return (
    <div
      className={classnames(
        'h-full w-full',
        'grid grid-cols-5 gap-2 md:gap-3 lg:gap-5 grid-rows-auto',
      )}
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            isCaptain={isCaptain}
            onOpen={() => onOpenCard({ id: index, card })}
          />
        );
      })}
    </div>
  );
}

Cards.propTypes = {
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
    }),
  ).isRequired,
  onOpenCard: PropTypes.func.isRequired,
};

export { Cards };
