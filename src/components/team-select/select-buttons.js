import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/components/button';
import { TEAMS } from 'src/data/constants';
import { Icon } from 'src/components/icon';

function SelectButtons({ userTeam, onClickJoin, ...other }) {
  const { t } = useTranslation();

  const isBlueTeam = userTeam === TEAMS['blue'];
  const isRedTeam = userTeam === TEAMS['red'];

  let iconColor = 'default';
  if (isBlueTeam) {
    iconColor = TEAMS['blue'];
  } else if (isRedTeam) {
    iconColor = TEAMS['red'];
  }

  return (
    <div className="relative flex flex-no-wrap shadow-lg" {...other}>
      <Button
        color={isBlueTeam ? TEAMS['blue'] : 'default'}
        fullWidth={true}
        rounded={false}
        shadow={false}
        outline={false}
        onClick={() => onClickJoin(TEAMS['blue'])}
      >
        {!isBlueTeam && <FontAwesomeIcon icon={'user-plus'} size={'sm'} />}{' '}
        {t('common.blues')}
      </Button>

      <Icon
        classes={'absolute left-0 right-0 mx-auto self-center'}
        color={iconColor}
        icon="users"
      />

      <Button
        color={isRedTeam ? TEAMS['red'] : 'default'}
        fullWidth={true}
        rounded={false}
        shadow={false}
        outline={false}
        onClick={() => onClickJoin(TEAMS['red'])}
      >
        {!isRedTeam && <FontAwesomeIcon icon={'user-plus'} size={'sm'} />}{' '}
        {t('common.reds')}
      </Button>
    </div>
  );
}

SelectButtons.propTypes = {
  userTeam: PropTypes.oneOf([TEAMS['blue'], TEAMS['red'], '']),
  onClickJoin: PropTypes.func.isRequired,
};

export { SelectButtons };
