import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { TEAMS } from 'src/data/constants';
import { Line } from 'src/components/winners/line';
import { Circle } from 'src/components/winners/circle';

const Winners = React.forwardRef(function Winners({ team }, ref) {
  const { t } = useTranslation();

  const message = team === TEAMS['blue'] ? t('game.blueWin') : t('game.redWin');
  const words = message.split(' ');
  const [leftMessage = '', rightMessage = ''] = words;

  return (
    <div
      ref={ref}
      className={classnames(
        'w-full flex items-center',
        'font-black text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase tracking-wide',
        {
          'text-blue-100': team === TEAMS['blue'],
          'text-red-100': team === TEAMS['red'],
        },
      )}
    >
      <Line position={'left'} content={leftMessage} />
      <Circle team={team} />
      <Line position={'right'} content={rightMessage} />
    </div>
  );
});

Winners.propTypes = {
  team: PropTypes.oneOf([TEAMS['blue'], TEAMS['red']]).isRequired,
};

export { Winners };
