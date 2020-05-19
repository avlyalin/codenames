import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = React.forwardRef(function Icon(props, ref) {
  const { classes = '', color = 'default', icon, text = '' } = props;
  const content = icon ? (
    <FontAwesomeIcon icon={icon} />
  ) : (
    <span className="text-sm uppercase font-bold">{text}</span>
  );

  let colorClasses = 'text-black bg-gray-200';
  if (color === 'blue') {
    colorClasses = 'text-blue-100 bg-white';
  } else if (color === 'red') {
    colorClasses = 'text-red-100 bg-white';
  }

  return (
    <span
      ref={ref}
      className={classnames(
        'inline-flex justify-center items-center',
        'rounded-full',
        'h-8 w-8',
        colorClasses,
        classes,
      )}
    >
      {content}
    </span>
  );
});

Icon.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.oneOf(['default', 'blue', 'red']),
  icon: PropTypes.string,
  text: PropTypes.string,
};

export { Icon };
