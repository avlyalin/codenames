import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ListGroupItem = React.forwardRef(function ListGroupItem(props, ref) {
  const { rounded = true, classes = '', children, ...other } = props;
  return (
    <div
      ref={ref}
      className={classnames(
        'py-2 px-6 border border-solid border-gray-200 border-t-0 first:border-t',
        {
          'first:rounded-t-lg': rounded,
          'last:rounded-b-lg': rounded,
          [classes]: classes,
        },
      )}
      {...other}
    >
      {children}
    </div>
  );
});

ListGroupItem.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  classes: PropTypes.string,
};

export { ListGroupItem };
