import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Input = React.forwardRef(function Input(props, ref) {
  const { classes = '', ...other } = props;
  return (
    <input
      ref={ref}
      className={classnames(
        'w-full h-10',
        'p-3 py-1',
        'text-base text-black',
        'border border-solid border-gray-200 rounded-lg',
        'focus:outline-none focus:shadow-outline-sm',
        'disabled:bg-gray-100',
        classes,
      )}
      type="text"
      {...other}
    />
  );
});

Input.propTypes = {
  classes: PropTypes.string,
};

export { Input };
