import React from 'react';
import PropTypes from 'prop-types';
import { cloneElement } from 'src/utils/clone-element';
import styles from './input-group.module.css';

const InputGroup = React.forwardRef(function InputGroup(props, ref) {
  const { append: appendProp, children: childrenProp } = props;
  const childrenClasses = childrenProp?.props?.classes || '';
  const children = cloneElement(childrenProp, {
    classes: `${childrenClasses} ${styles.inputGroupItem} ${styles.inputGroupItemInput}`,
  });
  const appendClasses = appendProp?.props?.classes || '';
  const append = cloneElement(appendProp, {
    classes: `${appendClasses} ${styles.inputGroupControl}`,
  });
  return (
    <div ref={ref} className={styles.inputGroup} role="group">
      {children}
      {append && (
        <div
          className={`${styles.inputGroupItem} ${styles.inputGroupItemAppend}`}
        >
          {append}
        </div>
      )}
    </div>
  );
});

InputGroup.propTypes = {
  append: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { InputGroup };
