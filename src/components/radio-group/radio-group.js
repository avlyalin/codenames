import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '../form-group';
import { RadioGroupContext } from './radio-group-context';

const RadioGroup = React.forwardRef(function RadioGroup(props, ref) {
  const { name, label, value, color, onChange, children } = props;
  return (
    <FormGroup
      data-testid={'radio-group'}
      ref={ref}
      label={label}
      childrenContainerClass="flex justify-between pt-2 max-w-sm"
      role="radiogroup"
    >
      <RadioGroupContext.Provider value={{ name, value, color, onChange }}>
        {children}
      </RadioGroupContext.Provider>
    </FormGroup>
  );
});

RadioGroup.propTypes = {
  color: PropTypes.oneOf(['default', 'blue', 'red']),
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  children: PropTypes.node,
  onChange: PropTypes.func,
};

export { RadioGroup };
