import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input.module.css';

const Input = React.forwardRef(function Input(props, ref) {
  const { classes = '', ...other } = props;
  return (
    <input
      ref={ref}
      className={classnames({ [styles.input]: true, [classes]: classes })}
      type="text"
      {...other}
    />
  );
});

Input.propTypes = {
  classes: PropTypes.string,
};

export { Input };
