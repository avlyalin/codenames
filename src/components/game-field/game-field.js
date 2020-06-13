import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { TEAMS } from 'src/data/constants';
import { ScoresBar } from 'src/components/scores-bar';
import { Button } from 'src/components/button';
import { Winners } from 'src/components/winners';
import { Cards } from './cards';

function GameField(props) {
  const { currentUser, cards, captains, winnerTeam, onOpenCard } = props;

  const { t } = useTranslation();

  let color = 'default';
  let bgColor = '';
  if (currentUser.team === TEAMS['blue']) {
    color = TEAMS['blue'];
    bgColor = 'bg-blue-linear-image';
  } else if (currentUser.team === TEAMS['red']) {
    color = TEAMS['red'];
    bgColor = 'bg-red-linear-image';
  }

  let topbarComponent =
    winnerTeam in TEAMS ? (
      <Winners team={winnerTeam} />
    ) : (
      <ScoresBar currentUser={props.currentUser} cards={props.cards} />
    );

  return (
    <div className={classnames(bgColor, 'p-2 md:px-6', 'h-screen w-screen')}>
      <div className={'h-1/10 md:h-15/100 flex justify-center items-center'}>
        {topbarComponent}
      </div>
      <div
        className={
          'h-8/10 md:h-7/10 pt-4 pb-2 flex justify-center items-center'
        }
      >
        <Cards
          cards={cards}
          captains={captains}
          currentUser={currentUser}
          onOpenCard={onOpenCard}
        />
      </div>
      <div
        className={classnames(
          'h-1/10 md:h-15/100',
          'max-w-1/4 md:max-w-1/2 lg:max-w-1/2 mx-auto',
          'flex items-center',
        )}
      >
        <Link className="w-full" to="/">
          <Button classes={'sm:btn-sm md:btn-md lg:btn-lg'} color={color}>
            <FontAwesomeIcon icon="sign-out-alt" /> {t('game.leave')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

GameField.propTypes = {
  captains: PropTypes.shape({
    blue: PropTypes.string.isRequired,
    red: PropTypes.string.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      opened: PropTypes.bool.isRequired,
      color: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]),
    }),
  ).isRequired,
  winnerTeam: PropTypes.string.isRequired,
  onOpenCard: PropTypes.func.isRequired,
};

export { GameField };
