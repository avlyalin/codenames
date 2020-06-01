import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './line.module.css';

const Line = ({ content, position }) => {
  return (
    <div
      className={classnames(
        'h-7 md:h-11 lg:h-13 xl:h-15',
        'py-4 md:py-5 lg:py-6',
        'flex items-center flex-grow w-20',
        'relative',
        'border border-solid border-gray-200 rounded-lg',
        'bg-white',
        {
          'pr-4': position === 'left',
          'pl-4': position === 'right',
          'justify-end': position === 'left',
          'justify-start': position === 'right',
          'border-r-0 rounded-r-none': position === 'left',
          'border-l-0 rounded-l-none': position === 'right',
          [styles.lineLeft]: position === 'left',
          [styles.lineRight]: position === 'right',
        },
      )}
    >
      {content}
    </div>
  );
};

Line.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  content: PropTypes.string.isRequired,
};

export { Line };
