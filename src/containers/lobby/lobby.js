import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CARDS_DICTIONARIES, FIELD_SIZES, TEAMS } from 'src/data/constants';
import { Team } from 'src/components/team';
import { WithRadioGroup as Radio } from 'src/components/radio';
import { RadioGroup } from 'src/components/radio-group';
import styles from './lobby.module.css';

function Lobby({
  sessionId,
  settings,
  users,
  currentUser,
  captains,
  onChangeSettings,
  onChangeUsername,
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
    },
  );
  const usersList = users.map(({ id, name }) => {
    if (currentUser.id === id) {
      name += ' (вы)';
    }
    return <li key={id}>{name}</li>;
  });
  return (
    <div>
      <section>
        <h3>ID сессии:</h3>
        {sessionId}
      </section>
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
            team={TEAMS['red']}
            currentUser={currentUser}
            users={users}
            captainId={captains[TEAMS['red']]}
            onJoin={onJoinTeam}
            onJoinAsCaptain={onJoinTeamAsCaptain}
          />
          <Team
            name="Синие"
            team={TEAMS['blue']}
            currentUser={currentUser}
            users={users}
            captainId={captains[TEAMS['blue']]}
            onJoin={onJoinTeam}
            onJoinAsCaptain={onJoinTeamAsCaptain}
          />
        </div>
      </section>
      <Link to="/game">
        <button type="button">Играть!</button>
      </Link>
    </div>
  );
}

Lobby.propTypes = {
  sessionId: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    language: PropTypes.string.isRequired,
    fieldSize: PropTypes.string.isRequired,
    dictionary: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ),
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  captains: PropTypes.shape({
    blue: PropTypes.string.isRequired,
    red: PropTypes.string.isRequired,
  }).isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangeSettings: PropTypes.func.isRequired,
  onJoinTeam: PropTypes.func.isRequired,
  onJoinTeamAsCaptain: PropTypes.func.isRequired,
};

export { Lobby };
