import React from 'react';
import PropTypes from 'prop-types';
import { createChainedFunction } from 'src/utils/create-chained-function';
import { useRadioGroup } from '../radio-group';
import { Radio } from './radio';

const WithRadioGroup = React.forwardRef(function WithRadioGroup(props, ref) {
  const {
    name: nameProp,
    value: valueProp,
    onChange: onChangeProp,
    ...other
  } = props;
  let checked = false;
  let name = nameProp;
  let color = undefined;
  const radioGroup = useRadioGroup();
  const onChange = createChainedFunction(
    onChangeProp,
    radioGroup && radioGroup.onChange,
  );
  if (radioGroup) {
    checked = radioGroup.value === valueProp;
    name = radioGroup.name;
    color = radioGroup.color;
  }
  return (
    <Radio
      ref={ref}
      name={name}
      color={color}
      value={valueProp}
      checked={checked}
      onChange={onChange}
      {...other}
    />
  );
});

WithRadioGroup.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export { WithRadioGroup };
