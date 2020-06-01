import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'src/components/button';
import { SelectButtons } from 'src/components/team-select/select-buttons';
import { PlayersList } from 'src/components/team-select/players-list';
import { TEAMS } from 'src/data/constants';

const TeamSelect = React.forwardRef(function TeamSelect(
  { currentUser, captains, users, onJoin, onJoinAsCaptain, ...other },
  ref,
) {
  let color = 'default';
  let captainId = '';
  if (currentUser.team === TEAMS['blue']) {
    color = 'blue';
    captainId = captains[TEAMS['blue']];
  } else if (currentUser.team === TEAMS['red']) {
    color = 'red';
    captainId = captains[TEAMS['red']];
  }

  const handleClickJoin = (team) => {
    if (team !== currentUser.team || currentUser.id === captainId) onJoin(team);
  };
  const handleClickJoinAsCaptain = () => {
    if (currentUser.id !== captainId) onJoinAsCaptain(currentUser.team);
  };

  return (
    <div
      ref={ref}
      className="w-full border-t border-b border-solid border-gray-200 rounded-lg overflow-hidden"
      {...other}
    >
      <SelectButtons
        userTeam={currentUser.team}
        onClickJoin={handleClickJoin}
      />
      <PlayersList
        captainId={captainId}
        currentUser={currentUser}
        users={users}
      />
      <Button
        color={color}
        rounded={false}
        size={'md'}
        fullWidth={true}
        shadow={false}
        onClick={handleClickJoinAsCaptain}
      >
        Стать капитаном
      </Button>
    </div>
  );
});

TeamSelect.propTypes = {
  captains: PropTypes.shape({
    blue: PropTypes.string.isRequired,
    red: PropTypes.string.isRequired,
  }).isRequired,
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
  onJoin: PropTypes.func.isRequired,
  onJoinAsCaptain: PropTypes.func.isRequired,
};

export { TeamSelect };
