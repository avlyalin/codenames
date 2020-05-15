import { useContext } from 'react';
import { RadioGroupContext } from './radio-group-context';

function useRadioGroup() {
  return useContext(RadioGroupContext);
}

export { useRadioGroup };
