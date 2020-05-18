import React from 'react';
import { render } from '@testing-library/react';
import { ListGroup, ListGroupItem } from '../list-group';

describe('<ListGroup />', () => {
  test('should render list items', () => {
    const { container } = render(
      <ListGroup>
        <ListGroupItem>One</ListGroupItem>
        <ListGroupItem>Two</ListGroupItem>
        <ListGroupItem>Three</ListGroupItem>
      </ListGroup>,
    );
    const listGroup = container.firstChild;

    expect(listGroup).toMatchSnapshot();
  });
  test('should render list items with square borders', () => {
    const { container } = render(
      <ListGroup rounded={false}>
        <ListGroupItem>One</ListGroupItem>
        <ListGroupItem>Two</ListGroupItem>
        <ListGroupItem>Three</ListGroupItem>
      </ListGroup>,
    );
    const listGroup = container.firstChild;

    expect(listGroup).toMatchSnapshot();
  });
});
