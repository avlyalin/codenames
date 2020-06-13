import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Badge } from 'src/components/badge';
import { ListGroupItem } from 'src/components/list-group';
import { TEAMS } from 'src/data/constants';

function PlayersListItem({ captainId, currentUserId, user, ...other }) {
  const { t } = useTranslation();

  const isCaptain = user.id === captainId;
  const isCurrentUser = user.id === currentUserId;
  let badgeColor = 'default';
  if (user.team === TEAMS['blue']) {
    badgeColor = 'blue';
  } else if (user.team === TEAMS['red']) {
    badgeColor = 'red';
  }

  return (
    <ListGroupItem
      classes={classnames('flex justify-between', {
        'font-bold': isCurrentUser,
      })}
      {...other}
    >
      {user.name}
      {isCaptain && (
        <Badge color={badgeColor}>
          <FontAwesomeIcon icon="crown" size={'sm'} /> {t('common.captain')}
        </Badge>
      )}
    </ListGroupItem>
  );
}

PlayersListItem.propTypes = {
  captainId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
};

export { PlayersListItem };
