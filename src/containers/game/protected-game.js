import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getGameSessionId } from 'src/utils/location';
import * as Errors from '../../data/errors';
import { Game } from './game';

function ProtectedGame({ sessionId, connected, ...other }) {
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
  return <Game {...other} />;
}

ProtectedGame.propTypes = {
  connected: PropTypes.bool.isRequired,
  sessionId: PropTypes.string.isRequired,
};

export { ProtectedGame };
