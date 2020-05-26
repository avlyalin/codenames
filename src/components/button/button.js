import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = React.forwardRef(function Button(props, ref) {
  const {
    classes = '',
    color = 'default',
    fullWidth = true,
    rounded = true,
    shadow = true,
    size = 'md',
    disabled = false,
    ...other
  } = props;
  let colorClasses = classnames('bg-gray-300', {
    'hover:bg-gray-400': !disabled,
    'focus:shadow-outline-sm-gray focus:outline-none': shadow,
  });

  let sizeClasses = '';
  if (size === 'sm') {
    sizeClasses = 'btn-sm';
  } else if (size === 'md') {
    sizeClasses = 'btn-md';
  } else {
    sizeClasses = 'btn-lg';
  }

  if (color === 'blue') {
    colorClasses = classnames('bg-blue-100', {
      'hover:bg-blue-200': !disabled,
      'focus:shadow-outline-sm-blue focus:outline-none': shadow,
    });
  } else if (color === 'red') {
    colorClasses = classnames('bg-red-100', {
      'hover:bg-red-200': !disabled,
      'focus:shadow-outline-sm-red focus:outline-none': shadow,
    });
  }

  return (
    <button
      ref={ref}
      className={classnames(
        classes,
        'align-middle',
        'text-white text-center',
        'outline-none',
        'transition-colors duration-100 ease-in-out',
        colorClasses,
        sizeClasses,
        {
          'w-full': fullWidth,
          'rounded-lg': rounded,
          'bg-opacity-60': disabled,
        },
      )}
      disabled={disabled}
      {...other}
    />
  );
});

Button.propTypes = {
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['default', 'blue', 'red']),
  fullWidth: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  rounded: PropTypes.bool,
};

export { Button };
