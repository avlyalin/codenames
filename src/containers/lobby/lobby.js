import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
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
  onClickShare,
  onClickGenerateCards,
}) {
  const history = useHistory();

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

  const shareIcon = navigator.share ? 'share-alt' : 'clone';
  const shareDescription = navigator.share ? 'Поделиться' : 'Копировать ссылку';

  const redirectToGame = () => {
    history.push('game');
  };

  return (
    <div
      className={classnames(
        'p-5 md:pt-6 lg:pt-7 xl:pt-8 min-h-screen',
        bgColor,
      )}
    >
      <div
        role="img"
        className={classnames(styles.header)}
        aria-label={'Codenames'}
      />
      <div
        className={classnames(
          'max-w-screen-xl mx-auto',
          'md:grid grid-flow-col grid-cols-1 grid-rows-6 md:grid-cols-2 col-gap-12 lg:col-gap-20',
          'mt-4 md:mt-2 lg:mt-5 xl:mt-8',
        )}
      >
        <div className={'row-start-1 col-start-1'}>
          <FormGroup
            description={shareDescription}
            descriptionPosition={'end'}
            label={'ID сессии'}
          >
            <InputGroup
              append={
                <Button
                  classes="w-10"
                  color={color}
                  fullWidth={false}
                  onClick={onClickShare}
                >
                  <FontAwesomeIcon icon={shareIcon} size="lg" />
                </Button>
              }
            >
              <Input defaultValue={sessionId} disabled />
            </InputGroup>
          </FormGroup>
        </div>

        <div className={'mt-5 md:mt-2 row-start-2 col-start-1'}>
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

        <div className={'mt-5 md:mt-2 row-start-3 col-start-1'}>
          <FormGroup label={'Словарь'}>
            <Select value={settings.dictionary} onChange={onChangeDictionary}>
              {dictionaries}
            </Select>
          </FormGroup>
        </div>

        <div className={'mt-5 md:mt-2 row-start-4 col-start-1'}>
          <FormGroup label={'Ваш ник'} labelFor={'username'}>
            <Input
              id={'username'}
              value={currentUser.name}
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </FormGroup>
        </div>

        <div className={'mt-5 md:mt-0 row-start-1 row-span-5 col-start-2'}>
          <FormGroup label="Выберите команду" labelFor={'username'}>
            <TeamSelect
              captains={captains}
              currentUser={currentUser}
              users={users}
              onJoin={onJoinTeam}
              onJoinAsCaptain={onJoinTeamAsCaptain}
            />
          </FormGroup>
        </div>

        <div className={'mt-5 md:mt-2 row-start-5 col-start-1'}>
          <Button color={color} onClick={onClickGenerateCards}>
            <FontAwesomeIcon icon="retweet" size="lg" /> Сгенерировать карточки
          </Button>
        </div>

        <div className={'mt-5 md:mt-2 row-start-6 col-start-1'}>
          <Button color={color} onClick={redirectToGame}>
            <FontAwesomeIcon icon="running" size="lg" /> Погнали
          </Button>
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
  onClickShare: PropTypes.func.isRequired,
  onClickGenerateCards: PropTypes.func.isRequired,
};

export { Lobby };
