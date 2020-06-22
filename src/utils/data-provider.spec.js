import dictionary from 'src/data/dictionaries/default-ru.json';
import { CARDS_TYPES, FIELD_SIZES } from 'src/data/constants';
import { i18n } from 'src/utils/i18n';
import { getGamingCards } from './data-provider';

const setup = async ({ dictionaryName, fieldSize }) => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => dictionary,
  });

  return await getGamingCards(dictionaryName, fieldSize);
};

const getCardsOfType = (cards, type) =>
  cards.filter((card) => card.type === type);

describe('generateDictionaryWords', () => {
  test('should return correct cards distribution for 5x4 field', async () => {
    const cards = await setup({
      dictionaryName: 'dictionary_name',
      fieldSize: FIELD_SIZES['5x4'],
    });

    expect(getCardsOfType(cards, CARDS_TYPES['killer'])).toHaveLength(1);
    expect(getCardsOfType(cards, CARDS_TYPES['agent'])).toHaveLength(15);
    expect(getCardsOfType(cards, CARDS_TYPES['citizen'])).toHaveLength(4);
  });

  test('should return correct cards distribution for 5x5 field', async () => {
    const cards = await setup({
      dictionaryName: 'dictionary_name',
      fieldSize: FIELD_SIZES['5x5'],
    });

    expect(getCardsOfType(cards, CARDS_TYPES['killer'])).toHaveLength(1);
    expect(getCardsOfType(cards, CARDS_TYPES['agent'])).toHaveLength(17);
    expect(getCardsOfType(cards, CARDS_TYPES['citizen'])).toHaveLength(7);
  });

  test('should return correct cards distribution for 5x6 field', async () => {
    const cards = await setup({
      dictionaryName: 'dictionary_name',
      fieldSize: FIELD_SIZES['5x6'],
    });

    expect(getCardsOfType(cards, CARDS_TYPES['killer'])).toHaveLength(1);
    expect(getCardsOfType(cards, CARDS_TYPES['agent'])).toHaveLength(19);
    expect(getCardsOfType(cards, CARDS_TYPES['citizen'])).toHaveLength(10);
  });

  test('should throw error on bad response', async () => {
    window.fetch.mockRejectedValueOnce({
      ok: false,
    });

    let error;
    try {
      await getGamingCards('bad_dictionary_name', FIELD_SIZES['5x6']);
    } catch (e) {
      error = e.message;
    }

    expect(error).toEqual(i18n.t('error.getDictionary'));
  });

  test('should throw error on bad dictionary', async () => {
    window.fetch.mockRejectedValueOnce({
      ok: true,
      json: async () => null,
    });

    let error;
    try {
      await getGamingCards('dictionary_name', FIELD_SIZES['5x6']);
    } catch (e) {
      error = e.message;
    }

    expect(error).toEqual(i18n.t('error.getDictionary'));
  });
});
