import { CARDS_TYPES, TEAMS } from 'src/data/constants';
import { getRemainingCardsCount, getTeamProgress } from './team-progress';

describe('getTeamProgress', () => {
  test('should return 0 when gets empty cards array', () => {
    expect(getTeamProgress([], TEAMS['blue'])).toBe(0);
  });
  test('should return 0 when all cards are closed', () => {
    const cards = [
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['red'],
      },
    ];
    expect(getTeamProgress(cards, TEAMS['blue'])).toBe(0);
  });
  test('should return opened cards rounded percentage', () => {
    const cards = [
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['red'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['red'],
      },
    ];
    expect(getTeamProgress(cards, TEAMS['blue'])).toBe(33);
    expect(getTeamProgress(cards, TEAMS['red'])).toBe(100);
  });
});

describe('getRemainingCardsCount', () => {
  test('should return 0 when gets empty cards array', () => {
    expect(getRemainingCardsCount([], TEAMS['blue'])).toBe(0);
  });
  test('should return 0 when all cards are open', () => {
    const cards = [
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['red'],
      },
    ];
    expect(getRemainingCardsCount(cards, TEAMS['red'])).toBe(0);
  });
  test('should return correct number', () => {
    const cards = [
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: false,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['blue'],
      },
      {
        type: CARDS_TYPES['agent'],
        text: '',
        opened: true,
        color: TEAMS['red'],
      },
      {
        type: CARDS_TYPES['killer'],
        text: '',
        opened: true,
      },
    ];
    expect(getRemainingCardsCount(cards, TEAMS['blue'])).toBe(3);
  });
});
