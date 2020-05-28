import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Circle() {
  return (
    <div
      className={classnames(
        'h-11 w-11 md:h-15 md:w-15 lg:h-20 lg:w-20 xl:h-24 xl:w-24',
        'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
        'flex justify-center items-center',
        'border border-solid border-gray-200 rounded-full',
        'bg-white',
      )}
    >
      <FontAwesomeIcon icon={'trophy'} />
    </div>
  );
}

export { Circle };
