import React from 'react';
import PropTypes from 'prop-types';
import { TEAMS } from 'src/data/constants';
import { Icon } from 'src/components/icon';
import { ScoresLine } from './scores-line';

const ScoresBar = React.forwardRef(function ScoresBar(props, ref) {
  const { cards, currentUser } = props;
  const iconColor = currentUser.team || 'default';

  return (
    <div ref={ref} className="flex flex-no-wrap items-center w-full relative">
      <ScoresLine cards={cards} position="left" team={TEAMS['blue']} />
      <Icon
        classes="absolute left-0 right-0 bottom-0 transform translate-y-1/4 mx-auto z-20"
        color={iconColor}
        text="vs"
      />
      <ScoresLine cards={cards} position="right" team={TEAMS['red']} />
    </div>
  );
});

ScoresBar.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
      color: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
    }),
  ).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
};

export { ScoresBar };
