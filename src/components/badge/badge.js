import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = React.forwardRef(function Badge(props, ref) {
  const { color = 'default', children } = props;
  const colorClasses = classnames('text-white', {
    'bg-gray-300': color === 'default',
    'bg-red-100': color === 'red',
    'bg-blue-100': color === 'blue',
  });

  return (
    <span
      data-testid={'badge'}
      ref={ref}
      className={classnames(
        'inline-block px-4 py-1 leading-none text-center text-sm align-middle rounded-xl',
        colorClasses,
      )}
    >
      {children}
    </span>
  );
});

Badge.propTypes = {
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'blue', 'red']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export { Badge };
