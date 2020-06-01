import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Logo } from './logo';
import { Text } from './text';

const Loader = ({ isLoading = false, animation = true, text = '' }) => {
  return (
    isLoading && (
      <div
        className={classnames(
          'fixed z-50',
          'h-screen w-screen',
          'xs:px-1 sm:px-4',
          'space-y-3 xs:space-y-5 sm:space-y-8',
          'flex flex-col justify-center items-center',
          'bg-white',
          'overflow-hidden',
        )}
      >
        <Logo animation={animation} />
        <Text text={text} />
      </div>
    )
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string,
  animation: PropTypes.bool,
};

export { Loader };
