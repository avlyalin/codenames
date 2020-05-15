import React from 'react';

const styles = { padding: '1em' };

const Container = (props) => <div style={styles} {...props} />;
const containerDecorator = (storyFn) => <Container>{storyFn()}</Container>;

export { Container, containerDecorator };
