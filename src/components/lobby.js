import React from 'react';
import PropTypes from 'prop-types';
import { CARDS_DICTIONARIES, FIELD_SIZES } from '../data/constants';

function Lobby({
  settings,
  username,
  onChangeSettings,
  onChangeUsername,
  onClickPlay,
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

  return (
    <>
      <p>Размер поля:</p>
      {fieldSizes}
      <p>Словарь:</p>
      {dictionaries}
      <p>
        <label>
          Ваш ник:
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => onChangeUsername(e.target.value)}
          />
        </label>
      </p>
      <br />
      <button onClick={onClickPlay}>Играть!</button>
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
  username: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onClickPlay: PropTypes.func.isRequired,
  onChangeSettings: PropTypes.func.isRequired,
};

export { Lobby };
