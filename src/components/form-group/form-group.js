import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './form-group.module.css';

const FormGroup = React.forwardRef(function FormGroup(props, ref) {
  const { label, labelFor, children, childrenContainerClass, ...other } = props;
  const childrenCount = React.Children.count(children);
  let content;
  if (!labelFor || childrenCount > 1) {
    content = (
      <fieldset>
        <legend
          className={classnames({
            [styles.formGroupLabel]: true,
          })}
        >
          {label}
        </legend>
        <div className={childrenContainerClass}>{children}</div>
      </fieldset>
    );
  } else {
    content = (
      <>
        <label
          className={classnames({
            [styles.formGroupLabel]: true,
          })}
          htmlFor={labelFor}
        >
          {label}
        </label>
        {children}
      </>
    );
  }
  return (
    <div
      className={classnames({
        [styles.formGroup]: true,
      })}
      ref={ref}
      {...other}
    >
      {content}
    </div>
  );
});

FormGroup.propTypes = {
  label: PropTypes.node,
  labelFor: PropTypes.string,
  childrenContainerClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { FormGroup };
