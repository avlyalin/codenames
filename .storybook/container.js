import React from 'react';

const styles = { padding: '1em' };

const Container = ({ styles: stylesProp = {}, ...other }) => {
  const containerStyles = { ...styles, ...stylesProp };
  return <div style={containerStyles} {...other} />;
};
const containerDecorator = (props) => (storyFn) => (
  <Container {...props}>{storyFn()}</Container>
);

export { Container, containerDecorator };
