import React from 'react';

export function cloneElement(element, props) {
  if (!React.isValidElement(element)) {
    return element;
  }
  // todo: use react-is
  if (
    element.type === React.Fragment &&
    Object.keys(element.props).length > 0
  ) {
    return (
      <>
        {React.Children.map(element.props.children, (child) => {
          return React.cloneElement(child, props);
        })}
      </>
    );
  }
  return React.cloneElement(element, props);
}
