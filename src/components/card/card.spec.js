import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Card } from 'src/components/card/card';
import { getBlueAgentCard } from 'src/data/fixtures';

function setup(props) {
  const { container, ...utils } = render(<Card {...props} />);
  const element = container.firstChild;
  return { element, ...utils };
}

describe('<Card />', () => {
  describe('prop: is not a captain', () => {
    test('should emit onOpen event on closed card', () => {
      const onOpen = jest.fn();
      const card = getBlueAgentCard();
      const isCaptain = false;
      const { element, getByTestId } = setup({ isCaptain, card, onOpen });

      fireEvent.mouseDown(element);

      /* dirty hack to test "ontransitionend" callback */
      const transitionEndEvent = new Event('transitionend', {
        bubbles: true,
        cancelable: false,
      });
      transitionEndEvent.propertyName = 'background-size';
      fireEvent(getByTestId('card-cover'), transitionEndEvent);

      expect(onOpen).toHaveBeenCalledTimes(1);
    });
    test("shouldn't emit onOpen event on opened card", () => {
      const onOpen = jest.fn();
      const card = getBlueAgentCard(true);
      const isCaptain = false;
      const { element } = setup({ isCaptain, card, onOpen });

      fireEvent.click(element);

      expect(onOpen).not.toHaveBeenCalled();
    });
  });

  describe('prop: is captain', () => {
    test("shouldn't emit onOpen event on closed card", () => {
      const onOpen = jest.fn();
      const card = getBlueAgentCard();
      const isCaptain = true;
      const { element } = setup({ isCaptain, card, onOpen });

      fireEvent.click(element);

      expect(onOpen).not.toHaveBeenCalled();
    });
    test("shouldn't emit onOpen event on opened card", () => {
      const onOpen = jest.fn();
      const card = getBlueAgentCard(true);
      const isCaptain = true;
      const { element } = setup({ isCaptain, card, onOpen });

      fireEvent.click(element);

      expect(onOpen).not.toHaveBeenCalled();
    });
  });
});
