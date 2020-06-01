import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './logo.module.css';

const Logo = ({ animation = true }) => {
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLetterIndex = (letterIndex + 1) % 'codenames'.length;
      setLetterIndex(newLetterIndex);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [letterIndex]);

  return (
    <div className={classnames('w-full text-center')}>
      <Letter
        letter={'c'}
        color={'blue'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 0,
        })}
      />
      <Letter
        letter={'o'}
        color={'red'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 1,
        })}
      />
      <Letter
        letter={'d'}
        color={'blue'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 2,
        })}
      />
      <Letter
        letter={'e'}
        color={'blue'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 3,
        })}
      />
      <Letter
        letter={'n'}
        color={'red'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 4,
        })}
      />
      <Letter
        letter={'a'}
        color={'red'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 5,
        })}
      />
      <Letter
        letter={'m'}
        color={'blue'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 6,
        })}
      />
      <Letter
        letter={'e'}
        color={'red'}
        classes={classnames({
          [styles.letterAnimationFlip]: animation && letterIndex === 7,
        })}
      />
      <Letter
        letter={'s'}
        color={'black'}
        classes={classnames({
          [styles.letterAnimationHinge]: animation && letterIndex === 8,
        })}
      />
    </div>
  );
};

Logo.propTypes = {
  animation: PropTypes.bool.isRequired,
};

const Letter = ({ letter, color, classes }) => {
  return (
    <span
      className={classnames(
        classes,
        styles.letter,
        'h-9 xs:h-10 w-7 xs:w-9 inline-flex justify-center items-center',
        'text-white font-medium uppercase text-2xl xs:text-3xl',
        'rounded-md xs:rounded-lg',
        {
          'bg-blue-100': color === 'blue',
          'bg-red-100': color === 'red',
          'bg-black': color === 'black',
        },
      )}
    >
      {letter}
    </span>
  );
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'red', 'black']).isRequired,
  classes: PropTypes.string,
};

export { Logo };
