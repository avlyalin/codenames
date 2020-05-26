import React from 'react';
import { RotateDevice } from 'src/components/rotate-device';
import { GameField } from 'src/components/game-field';
import { useMedia } from 'src/hooks/use-media';

const Game = (props) => {
  const shouldRotate = useMedia(
    '(orientation: portrait) and (max-width: 767px)',
  );

  if (shouldRotate) return <RotateDevice />;
  return <GameField {...props} />;
};

export { Game };
