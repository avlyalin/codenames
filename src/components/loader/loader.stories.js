import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Loader } from './loader';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Loader',
  decorators: [containerDecorator({ style: { padding: 0 } }), withKnobs],
};

export const Common = () => {
  const isLoading = boolean('Is loading', true);
  const message = text('Message', 'Запуск приложения');
  const animation = boolean('Animation', true);
  return <Loader isLoading={isLoading} text={message} animation={animation} />;
};
