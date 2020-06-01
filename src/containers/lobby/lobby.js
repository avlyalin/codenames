import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CARDS_DICTIONARIES, FIELD_SIZES, TEAMS } from 'src/data/constants';
import { TeamSelect } from 'src/components/team-select';
import { WithRadioGroup as Radio } from 'src/components/radio';
import { RadioGroup } from 'src/components/radio-group';
import { InputGroup } from 'src/components/input-group';
import { Input } from 'src/components/input';
import { Button } from 'src/components/button';
import { FormGroup } from 'src/components/form-group';
import { Select } from 'src/components/select';
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
  const fieldSizes = Object.entries(FIELD_SIZES).map(([label, value]) => (
    <React.Fragment key={value}>
      <Radio label={label} value={value} />
    </React.Fragment>
  ));
  const dictionaries = Object.entries(CARDS_DICTIONARIES).map(
    ([label, value]) => (
      <option key={value} value={value}>
        {label}
      </option>
    ),
  );

  let color = 'default';
  let bgColor = '';
  if (currentUser.team === TEAMS['blue']) {
    color = TEAMS['blue'];
    bgColor = 'bg-blue-linear md:bg-blue-linear-image';
  } else if (currentUser.team === TEAMS['red']) {
    color = TEAMS['red'];
    bgColor = 'bg-red-linear md:bg-red-linear-image';
  }

  return (
    <div className={classnames('p-5 pt-4 md:pt-6 min-h-screen', bgColor)}>
      <div
        role="img"
        className={classnames(styles.header)}
        aria-label={'Codenames'}
      />
      <div
        className={classnames(
          'max-w-screen-xl mx-auto',
          'md:grid grid-flow-col grid-cols-1 grid-rows-5 md:grid-cols-2 col-gap-12 lg:col-gap-20',
        )}
      >
        <div className={'mt-6 row-start-1 col-start-1'}>
          <FormGroup label={'ID сессии'}>
            <InputGroup
              append={
                <Button classes="w-10" color={color} fullWidth={false}>
                  <FontAwesomeIcon icon="share-alt" size="lg" />
                </Button>
              }
            >
              <Input defaultValue={sessionId} disabled />
            </InputGroup>
          </FormGroup>
        </div>

        <div className={'mt-8 row-start-2 col-start-1'}>
          <RadioGroup
            color={color}
            label="Размер поля"
            value={settings.fieldSize}
            name="field-size"
            onChange={onChangeFieldSize}
          >
            {fieldSizes}
          </RadioGroup>
        </div>

        <div className={'mt-8 row-start-3 col-start-1'}>
          <FormGroup label={'Словарь'}>
            <Select onChange={onChangeDictionary}>{dictionaries}</Select>
          </FormGroup>
        </div>

        <div className={'mt-8 row-start-4 col-start-1'}>
          <FormGroup label={'Ваш ник'} labelFor={'username'}>
            <Input
              id={'username'}
              value={currentUser.name}
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </FormGroup>
        </div>

        <div className={'mt-8 md:mt-6 row-start-1 row-span-6 col-start-2'}>
          <FormGroup label="&nbsp;" labelFor={'username'}>
            <TeamSelect
              captains={captains}
              currentUser={currentUser}
              users={users}
              onJoin={onJoinTeam}
              onJoinAsCaptain={onJoinTeamAsCaptain}
            />
          </FormGroup>
        </div>

        <div className={'mt-8 row-start-5 col-start-1'}>
          <Link to="/game">
            <Button color={color}>
              <FontAwesomeIcon icon="running" size="lg" /> Погнали
            </Button>
          </Link>
        </div>
      </div>
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
    }).isRequired,
  ),
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
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
