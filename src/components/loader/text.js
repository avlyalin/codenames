import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Text = ({ text = '' }) => {
  return (
    text && (
      <span
        className={classnames(
          'text-2xl font-semibold tracking-wide text-gray-400 text-center',
        )}
      >
        {text}
      </span>
    )
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Text };
