import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './select.module.css';

const Select = React.forwardRef(function Select(props, ref) {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => setIsOpened(!isOpened);
  const handleBlur = () => setIsOpened(false);
  return (
    <div
      ref={ref}
      className={classnames({
        [styles.select]: true,
        [styles.selectOpened]: isOpened,
      })}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <select className={styles.selectDefault} {...props} />
      <div className={styles.selectButton}>
        <svg
          className={styles.selectButtonShape}
          viewBox="0 0 18 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.selectButtonIcon}
            d="M8.1 10.4L0.5 2.8C0.3 2.6 0.2 2.4 0.2 2.1 0.2 1.9 0.3 1.7 0.5 1.5L1.4 0.6C1.5 0.4 1.8 0.3 2 0.3 2.3 0.3 2.5 0.4 2.7 0.6L8.8 6.6 14.8 0.6C15 0.4 15.2 0.3 15.5 0.3 15.7 0.3 16 0.4 16.1 0.6L17 1.5C17.2 1.7 17.3 1.9 17.3 2.1 17.3 2.4 17.2 2.6 17 2.8L9.4 10.4C9.2 10.6 9 10.7 8.8 10.7 8.5 10.7 8.3 10.6 8.1 10.4Z"
          />
        </svg>
      </div>
    </div>
  );
});

export { Select };
