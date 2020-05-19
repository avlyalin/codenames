import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'src/components/list-group';
import { PlayersListItem } from 'src/components/team-select/players-list-item';

function PlayersList({ captainId, currentUser, users }) {
  const playersList = users.reduce((accumulator, user) => {
    if (user.team === currentUser.team) {
      const player = (
        <PlayersListItem
          key={user.id}
          captainId={captainId}
          currentUserId={currentUser.id}
          user={user}
        />
      );
      accumulator.push(player);
    }
    return accumulator;
  }, []);
  return <ListGroup rounded={false}>{playersList}</ListGroup>;
}

PlayersList.propTypes = {
  captainId: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export { PlayersList };
