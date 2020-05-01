import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as Errors from '../data/errors';
import { PlayingField } from './playing-field';
import { getGameSessionId } from '../utils/query-params';
import { TEAMS } from '../data/constants';

function ProtectedPlayingField({ sessionId, connected, ...rest }) {
  const querySessionId = getGameSessionId(window.location.href);

  if (!connected && !querySessionId) {
    return <Redirect push to="/" />;
  }

  if (!sessionId) {
    return (
      <div>
        <h1>{Errors['SESSION_NOT_FOUND']}</h1>
        <button type="button" onClick={() => (window.location.href = '/')}>
          На главную
        </button>
      </div>
    );
  }
  return <PlayingField {...rest} />;
}

ProtectedPlayingField.propTypes = {
  connected: PropTypes.bool.isRequired,
  sessionId: PropTypes.string.isRequired,
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
    })
  ).isRequired,
  onOpenCard: PropTypes.func.isRequired,
};

export { ProtectedPlayingField };
