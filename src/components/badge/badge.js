import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Badge = React.forwardRef(function Badge(props, ref) {
  const { rounded = true, color = 'default', children } = props;
  return (
    <span
      ref={ref}
      className={classnames(
        'inline-block px-2 py-1 leading-none text-center text-sm align-middle',
        {
          'rounded-xl': rounded,
          'bg-gray-300': color === 'default',
          'bg-red-100 text-white': color === 'red',
          'bg-blue-100 text-white': color === 'blue',
        },
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
