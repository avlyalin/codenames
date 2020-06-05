import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormGroup = React.forwardRef(function FormGroup(props, ref) {
  const {
    description = '',
    descriptionPosition = 'start',
    label,
    labelFor,
    children,
    childrenContainerClass,
    ...other
  } = props;
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
    <div
      data-testid={'form-group'}
      className="flex flex-col"
      ref={ref}
      {...other}
    >
      {content}
      {description && (
        <span
          className={classnames('text-sm text-gray-300 mt-2', {
            'self-start': descriptionPosition === 'start',
            'self-center': descriptionPosition === 'center',
            'self-end': descriptionPosition === 'end',
          })}
        >
          {description}
        </span>
      )}
    </div>
  );
});

FormGroup.propTypes = {
  description: PropTypes.string,
  descriptionPosition: PropTypes.oneOf(['start', 'center', 'end']),
  label: PropTypes.node,
  labelFor: PropTypes.string,
  childrenContainerClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { FormGroup };
