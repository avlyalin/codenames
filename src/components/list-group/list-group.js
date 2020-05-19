import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = React.forwardRef(function ListGroup(props, ref) {
  const { children, ...other } = props;
  const items = React.Children.map(children, (child) => {
    return React.cloneElement(child, { ...other });
  });
  return <div ref={ref}>{items}</div>;
});

ListGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export { ListGroup };
