import React from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { containerDecorator } from '_storybook/container';
import { Input } from '../input';
import { FormGroup } from './form-group';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Form group',
  decorators: [containerDecorator(), withKnobs],
};

export const WithSingleChildren = () => {
  const description = text('Description', 'helper text');
  const label = text('Label', 'Your name');
  return (
    <FormGroup label={label} labelFor="input-1" description={description}>
      <Input id="input-1" />
    </FormGroup>
  );
};

export const WithMultipleChildren = () => {
  const description = text('Description', 'helper text');
  const label = text('Label', 'Options');
  let value = 'option-1';
  const onChange = () => {};
  return (
    <FormGroup label={label} labelFor="input-1" description={description}>
      <input
        id="option-1"
        type="checkbox"
        value="option-1"
        checked={value === 'option-1'}
        onChange={onChange}
      />
      <label htmlFor="option-1"> Option 1</label>
      <input
        id="option-2"
        type="checkbox"
        value="option-2"
        checked={value === 'option-2'}
        onChange={onChange}
      />
      <label htmlFor="option-2"> Option 2</label>
    </FormGroup>
  );
};

export const WithDescription = () => {
  const description = text('Description', 'helper text');
  const descriptionPosition = radios(
    'Description position',
    {
      start: 'start',
      center: 'center',
      end: 'end',
    },
    'end',
  );
  const label = text('Label', 'Your name');
  return (
    <FormGroup
      label={label}
      labelFor="input-1"
      description={description}
      descriptionPosition={descriptionPosition}
    >
      <Input id="input-1" />
    </FormGroup>
  );
};
export const WithoutDescription = () => {
  const description = text('Description', '');
  const descriptionPosition = radios(
    'Description position',
    {
      start: 'start',
      center: 'center',
      end: 'end',
    },
    'end',
  );
  const label = text('Label', 'Your name');
  return (
    <FormGroup
      label={label}
      labelFor="input-1"
      description={description}
      descriptionPosition={descriptionPosition}
    >
      <Input id="input-1" />
    </FormGroup>
  );
};
