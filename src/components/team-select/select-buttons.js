import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'src/components/button';
import { TEAMS } from 'src/data/constants';

function SelectButtons({ userTeam, onClickJoin, ...other }) {
  const isBlueTeam = userTeam === TEAMS['blue'];
  const isRedTeam = userTeam === TEAMS['red'];
  const handleClick = (team) => {
    if (team !== userTeam) onClickJoin(team);
  };

  return (
    <div className="relative flex flex-no-wrap shadow-lg" {...other}>
      <Button
        color={isBlueTeam ? 'blue' : 'default'}
        fullWidth={true}
        rounded={false}
        shadow={false}
        onClick={() => handleClick(TEAMS['blue'])}
      >
        {!isBlueTeam && <FontAwesomeIcon icon={'user-plus'} size={'sm'} />}{' '}
        Синие
      </Button>
      <span
        className={classnames(
          'absolute left-0 right-0 mx-auto self-center',
          'rounded-full',
          'h-8 w-8',
          'bg-white',
          'text-lg text-center',
          {
            'text-blue-100': isBlueTeam,
            'text-red-100': isRedTeam,
          },
        )}
      >
        <FontAwesomeIcon icon="users" className="h-full" />
      </span>
      <Button
        color={isRedTeam ? 'red' : 'default'}
        fullWidth={true}
        rounded={false}
        shadow={false}
        onClick={() => handleClick(TEAMS['red'])}
      >
        {!isRedTeam && <FontAwesomeIcon icon={'user-plus'} size={'sm'} />}{' '}
        Красные
      </Button>
    </div>
  );
}

SelectButtons.propTypes = {
  userTeam: PropTypes.oneOf([TEAMS['blue'], TEAMS['red'], null]),
  onClickJoin: PropTypes.func.isRequired,
};

export { SelectButtons };