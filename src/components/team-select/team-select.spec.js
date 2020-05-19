import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TeamSelect } from 'src/components/team-select/team-select';
import { TEAMS } from 'src/data/constants';

let currentUser;
let users;
let captains;

beforeEach(() => {
  currentUser = {
    id: '1',
    name: 'player_1',
    team: TEAMS['blue'],
  };
  users = [
    currentUser,
    { id: '2', name: 'player_2', team: TEAMS['red'] },
    { id: '3', name: 'player_3', team: TEAMS['blue'] },
    { id: '4', name: 'player_4', team: TEAMS['red'] },
  ];
  captains = {
    [TEAMS['blue']]: '1',
    [TEAMS['red']]: '4',
  };
});

function setup(props) {
  const finalProps = {
    currentUser,
    users,
    captains,
    onJoin: jest.fn(),
    onJoinAsCaptain: jest.fn(),
    ...props,
  };
  const { container, ...utils } = render(<TeamSelect {...finalProps} />);
  const element = container.firstChild;
  return { element, ...utils };
}

describe('<TeamSelect />', () => {
  test('renders correctly structured component', () => {
    const { element } = setup();
    expect(element).toMatchSnapshot();
  });

  test("should render user and user's team list", () => {
    const { rerender, queryByText } = setup();

    expect(queryByText(currentUser.name)).toBeTruthy();
    expect(queryByText('player_3')).toBeTruthy();
    expect(queryByText('player_2')).toBeFalsy();
    expect(queryByText('player_4')).toBeFalsy();

    currentUser.team = TEAMS['red'];
    rerender(
      <TeamSelect
        captains={captains}
        currentUser={currentUser}
        users={users}
        onJoin={() => {}}
        onJoinAsCaptain={() => {}}
      />,
    );

    expect(queryByText(currentUser.name)).toBeTruthy();
    expect(queryByText('player_3')).toBeFalsy();
    expect(queryByText('player_2')).toBeTruthy();
    expect(queryByText('player_4')).toBeTruthy();
  });
  describe('prop: onJoin', () => {
    test('should fire event on click join another team button', () => {
      const onJoin = jest.fn();
      const { getByText } = setup({ onJoin });

      const joinButton = getByText('Красные');
      fireEvent.click(joinButton);

      expect(onJoin).toHaveBeenCalledTimes(1);
      expect(onJoin).toHaveBeenCalledWith(TEAMS['red']);
    });
    test('should not fire event on click join current team', () => {
      const onJoin = jest.fn();
      const { getByText } = setup({ onJoin });

      const joinButton = getByText('Синие');
      fireEvent.click(joinButton);

      expect(onJoin).not.toHaveBeenCalled();
    });
  });

  describe('prop: onJoinAsCaptain', () => {
    test('should fire event if user is not the captain', () => {
      const onJoinAsCaptain = jest.fn();
      captains['blue'] = '';
      const { getByText } = setup({ onJoinAsCaptain });

      const joinButton = getByText('Стать капитаном');
      fireEvent.click(joinButton);

      expect(onJoinAsCaptain).toHaveBeenCalledTimes(1);
      expect(onJoinAsCaptain).toHaveBeenCalledWith(TEAMS['blue']);
    });
    test('should not fire event if user is the captain', () => {
      const onJoinAsCaptain = jest.fn();
      const { getByText } = setup({ onJoinAsCaptain });

      const joinButton = getByText('Стать капитаном');
      fireEvent.click(joinButton);

      expect(onJoinAsCaptain).not.toHaveBeenCalled();
    });
  });
  test("should render captain's badge for the captain", () => {
    const { rerender, getByText } = setup();

    const captain = getByText('player_1');
    const captainBadge = captain.childNodes[1];

    expect(captainBadge).toBeTruthy();
    expect(captainBadge.textContent).toEqual(expect.stringMatching(/капитан/i));

    captains['blue'] = '3';
    rerender(
      <TeamSelect
        captains={captains}
        currentUser={currentUser}
        users={users}
        onJoin={() => {}}
        onJoinAsCaptain={() => {}}
      />,
    );

    const oldCaptain = getByText('player_1');
    const newCaptain = getByText('player_3');
    const newCaptainBadge = newCaptain.childNodes[1];

    expect(oldCaptain.childNodes.length).toBe(1);
    expect(newCaptainBadge.textContent).toEqual(
      expect.stringMatching(/капитан/i),
    );
  });
});
