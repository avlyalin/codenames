import React from 'react';

const RadioGroupContext = React.createContext();

if (process.env.NODE_ENV !== 'production') {
  RadioGroupContext.displayName = 'RadioGroupContext';
}

export { RadioGroupContext };
