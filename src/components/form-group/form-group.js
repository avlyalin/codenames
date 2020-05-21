import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = React.forwardRef(function FormGroup(props, ref) {
  const { label, labelFor, children, childrenContainerClass, ...other } = props;
  const childrenCount = React.Children.count(children);
  const labelClasses = 'text-sm text-gray-400 mb-2';
  let content;
  if (!labelFor || childrenCount > 1) {
    content = (
      <fieldset>
        <legend className={labelClasses}>{label}</legend>
        <div className={childrenContainerClass}>{children}</div>
      </fieldset>
    );
  } else {
    content = (
      <>
        <label className={labelClasses} htmlFor={labelFor}>
          {label}
        </label>
        {children}
      </>
    );
  }

  return (
    <div className="flex flex-col" ref={ref} {...other}>
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
