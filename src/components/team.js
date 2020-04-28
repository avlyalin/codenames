import React from 'react';
import PropTypes from 'prop-types';
import { CARDS_COLORS, USERS_ROLES } from '../data/constants';

function Team({
  name,
  team,
  currentUser,
  users,
  onJoin,
  onJoinAsCaptain,
}) {
  const teamMembers = Object.values(users).reduce((accumulator, user) => {
    let name = user.name;
    if (user.role === USERS_ROLES['captain']) {
      name += ' (капитан)';
    }
    if (user.team === team) {
      accumulator.push({ ...user, name });
    }
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
  team: PropTypes.oneOf([CARDS_COLORS['blue'], CARDS_COLORS['red']]).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.object.isRequired,
  onJoin: PropTypes.func.isRequired,
  onJoinAsCaptain: PropTypes.func.isRequired,
};

export { Team };
