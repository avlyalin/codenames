import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Select = React.forwardRef(function Select(props, ref) {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => setIsOpened(!isOpened);
  const handleBlur = () => setIsOpened(false);

  return (
    <div
      ref={ref}
      className={classnames('relative text-gray-300 hover:text-gray-400')}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <select
        className={classnames(
          'bg-transparent',
          'appearance-none',
          'w-full h-10',
          'pl-3 pr-10',
          'text-black',
          'border border-solid border-gray-200 rounded-lg hover:border-gray-300',
          'focus:outline-none focus:shadow-outline-sm',
        )}
        {...props}
      />
      <div
        className={classnames(
          'absolute right-0',
          'inline-block',
          'h-full w-10',
          'border-l border-solid border-gray-200 hover:border-current',
          'text-center',
          'transition-colors duration-200 ease-in-out',
          'pointer-events-none',
        )}
      >
        <svg
          className={classnames('inline-block h-full w-5', {
            'transform rotate-180': isOpened,
          })}
          viewBox="0 0 18 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={'fill-current'}
            d="M8.1 10.4L0.5 2.8C0.3 2.6 0.2 2.4 0.2 2.1 0.2 1.9 0.3 1.7 0.5 1.5L1.4 0.6C1.5 0.4 1.8 0.3 2 0.3 2.3 0.3 2.5 0.4 2.7 0.6L8.8 6.6 14.8 0.6C15 0.4 15.2 0.3 15.5 0.3 15.7 0.3 16 0.4 16.1 0.6L17 1.5C17.2 1.7 17.3 1.9 17.3 2.1 17.3 2.4 17.2 2.6 17 2.8L9.4 10.4C9.2 10.6 9 10.7 8.8 10.7 8.5 10.7 8.3 10.6 8.1 10.4Z"
          />
        </svg>
      </div>
    </div>
  );
});

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export { Select };
