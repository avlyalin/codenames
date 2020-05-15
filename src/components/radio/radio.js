import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './radio.module.css';

const Radio = React.forwardRef(function Radio(props, ref) {
  const {
    checked,
    color = 'default',
    disabled,
    label,
    readOnly: readOnlyProp,
    onChange,
    ...other
  } = props;
  let readOnly = readOnlyProp || !onChange || !disabled;
  return (
    <label className={styles.radio}>
      <input
        className={styles.radioInput}
        checked={checked}
        ref={ref}
        type="radio"
        readOnly={readOnly}
        onChange={onChange}
        disabled={disabled}
        {...other}
      />
      <span
        className={classnames({
          [styles.radioButton]: true,
          [styles.radioButtonColorBlue]: color === 'blue',
          [styles.radioButtonColorRed]: color === 'red',
        })}
      >
        <svg
          className={styles.radioButtonShape}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            className={styles.radioButtonIcon}
            d="M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"
          />
        </svg>
      </span>
      {label}
    </label>
  );
});

Radio.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'blue', 'red']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.any,
};

export { Radio };
