import React from 'react';
import PropTypes from 'prop-types';
import {
  CARDS_COLORS,
  CARDS_DICTIONARIES,
  FIELD_SIZES,
} from '../data/constants';
import styles from './lobby.module.css';
import { Team } from './team';

function Lobby({
  settings,
  users,
  currentUser,
  onChangeSettings,
  onChangeUsername,
  onClickPlay,
  onJoinTeam,
  onJoinTeamAsCaptain,
}) {
  const onChangeFieldSize = (e) => {
    onChangeSettings({ ...settings, fieldSize: e.target.value });
  };
  const onChangeDictionary = (e) => {
    onChangeSettings({ ...settings, dictionary: e.target.value });
  };
  const fieldSizes = Object.entries(FIELD_SIZES).map(([label, value]) => {
    return (
      <React.Fragment key={value}>
        <label>
          {label}
          <input
            type="radio"
            name="field-size"
            value={value}
            checked={settings.fieldSize === value}
            onChange={onChangeFieldSize}
          />
        </label>
        <br />
      </React.Fragment>
    );
  });
  const dictionaries = Object.entries(CARDS_DICTIONARIES).map(
    ([label, value]) => {
      return (
        <React.Fragment key={value}>
          <label>
            {label}
            <input
              type="radio"
              name="dictionary"
              value={value}
              checked={settings.dictionary === value}
              onChange={onChangeDictionary}
            />
          </label>
          <br />
        </React.Fragment>
      );
    }
  );
  const usersList = Object.entries(users).map(([userId, user]) => {
    let username = user.name;
    if (currentUser.id === userId) {
      username += ' (вы)';
    }
    return <li key={userId}>{username}</li>;
  });
  return (
    <>
      <section>
        <h3>Размер поля:</h3>
        {fieldSizes}
      </section>
      <section>
        <h3>Словарь:</h3>
        {dictionaries}
      </section>
      <section>
        <h3>Игрок</h3>
        <label>
          Ваш ник:
          <br />
          <input
            type="text"
            value={currentUser.name}
            onChange={(e) => onChangeUsername(e.target.value)}
          />
        </label>
      </section>
      <section>
        <h3>Список игроков:</h3>
        <ul>{usersList}</ul>
      </section>
      <section>
        <h3>Команды</h3>
        <div className={styles.teams}>
          <Team
            name="Красные"
            team={CARDS_COLORS['red']}
            currentUser={currentUser}
            users={users}
            onJoin={onJoinTeam}
            onJoinAsCaptain={onJoinTeamAsCaptain}
            onLeave={onLeaveTeam}
          />
          <Team
            name="Синие"
            team={CARDS_COLORS['blue']}
            currentUser={currentUser}
            users={users}
            onJoin={onJoinTeam}
            onJoinAsCaptain={onJoinTeamAsCaptain}
          />
        </div>
      </section>
      <div className={styles.buttonPlay}>
        <button onClick={onClickPlay}>Играть!</button>
      </div>
    </>
  );
}

Lobby.propTypes = {
  settings: PropTypes.shape({
    language: PropTypes.string.isRequired,
    fieldSize: PropTypes.string.isRequired,
    dictionary: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.object.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onClickPlay: PropTypes.func.isRequired,
  onChangeSettings: PropTypes.func.isRequired,
  onJoinTeam: PropTypes.func.isRequired,
  onJoinTeamAsCaptain: PropTypes.func.isRequired,
};

export { Lobby };
