import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = React.forwardRef(function ListGroup(props, ref) {
  const { rounded = true, children } = props;
  const items = React.Children.map(children, (child) =>
    React.cloneElement(child, { rounded: rounded }),
  );
  return <div ref={ref}>{items}</div>;
});

ListGroup.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export { ListGroup };
