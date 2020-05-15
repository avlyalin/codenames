import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './button.module.css';

const Button = React.forwardRef(function Button(props, ref) {
  const { block, classes = '', color, ...other } = props;
  return (
    <button
      ref={ref}
      className={classnames({
        [styles.button]: true,
        [styles.buttonColorBlue]: color === 'blue',
        [styles.buttonColorRed]: color === 'red',
        [styles.buttonBlock]: block,
        [classes]: classes,
      })}
      {...other}
    />
  );
});

Button.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.oneOf(['default', 'blue', 'red']),
  block: PropTypes.bool,
};

export { Button };
