import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lobby extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickPlay}>Играть!</button>
      </div>
    );
  }
}

Lobby.propTypes = {
  onClickPlay: PropTypes.func.isRequired,
};

export { Lobby };
