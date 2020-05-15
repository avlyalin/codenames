import React from 'react';
import PropTypes from 'prop-types';
import { TEAMS } from '../../data/constants';

function Team({
  name,
  team,
  currentUser,
  captainId,
  users,
  onJoin,
  onJoinAsCaptain,
}) {
  const teamMembers = users.reduce((accumulator, user) => {
    if (user.team !== team) return accumulator;
    let username = user.name;
    if (user.id === captainId) {
      username += ' (капитан)';
    }
    if (user.id === currentUser.id) {
      username += ' (вы)';
    }
    accumulator.push({ ...user, name: username });
    return accumulator;
  }, []);

  return (
    <div>
      <h4>{name}</h4>
      <ul>
        {teamMembers.map(({ name }, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <div>
        <button onClick={() => onJoin(team)}>Присоединиться</button>
      </div>
      <div>
        <button onClick={() => onJoinAsCaptain(team)}>
          Присоединиться как капитан
        </button>
      </div>
    </div>
  );
}

Team.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]).isRequired,
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
      role: PropTypes.string.isRequired,
    }),
  ),
  captainId: PropTypes.string.isRequired,
  onJoin: PropTypes.func.isRequired,
  onJoinAsCaptain: PropTypes.func.isRequired,
};

export { Team };
