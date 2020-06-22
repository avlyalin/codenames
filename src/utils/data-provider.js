import { getRandomInt } from 'src/utils/math';
import {
  TEAMS,
  CARDS_DICTIONARIES,
  CARDS_TYPES,
  FIELD_SIZES,
} from 'src/data/constants';
import { getDictionary } from 'src/dictionaries-client';

export function getDefaultDictionary(language) {
  return CARDS_DICTIONARIES.find((dict) => dict.language === language);
}

export async function getGamingCards(dictionaryFileName, fieldSize) {
  const dictionary = await getDictionary(dictionaryFileName);
  const cardsDivision = getCardsDivision(fieldSize);
  const wordsGenerator = generateDictionaryWord(dictionary);

  const cards = [];
  // killer cards
  for (let i = 0; i < cardsDivision['killerCards']; i++) {
    const killerCard = {
      type: CARDS_TYPES['killer'],
      text: wordsGenerator.next().value,
      opened: false,
    };
    cards.push(killerCard);
  }
  // blue cards
  for (let i = 0; i < cardsDivision['blueCards']; i++) {
    const blueCard = {
      type: CARDS_TYPES['agent'],
      text: wordsGenerator.next().value,
      opened: false,
      color: TEAMS['blue'],
    };
    cards.push(blueCard);
  }
  // red cards
  for (let i = 0; i < cardsDivision['redCards']; i++) {
    const redCard = {
      type: CARDS_TYPES['agent'],
      text: wordsGenerator.next().value,
      opened: false,
      color: TEAMS['red'],
    };
    cards.push(redCard);
  }
  // citizens cards
  for (let i = 0; i < cardsDivision['citizenCards']; i++) {
    const citizenCard = {
      type: CARDS_TYPES['citizen'],
      text: wordsGenerator.next().value,
      opened: false,
    };
    cards.push(citizenCard);
  }
  return shuffle(cards);
}

export function* generateDictionaryWord(dictionary) {
  let wordsIndexes = {};
  for (let i = 0; i < dictionary.length; i++) {
    let wordIndex = getRandomInt(dictionary.length);
    while (wordIndex in wordsIndexes) {
      wordIndex = getRandomInt(dictionary.length);
    }
    wordsIndexes[wordIndex] = null;
    yield dictionary[wordIndex];
  }
}

function getCardsDivision(fieldSize = FIELD_SIZES['5x5']) {
  const blueDoubleAgent = Math.round(Math.random());
  if (fieldSize === FIELD_SIZES['5x4']) {
    return {
      killerCards: 1,
      blueCards: blueDoubleAgent ? 7 : 8,
      redCards: blueDoubleAgent ? 8 : 7,
      citizenCards: 4,
    };
  } else if (fieldSize === FIELD_SIZES['5x6']) {
    return {
      killerCards: 1,
      blueCards: blueDoubleAgent ? 9 : 10,
      redCards: blueDoubleAgent ? 10 : 9,
      citizenCards: 10,
    };
  } else {
    return {
      killerCards: 1,
      blueCards: blueDoubleAgent ? 8 : 9,
      redCards: blueDoubleAgent ? 9 : 8,
      citizenCards: 7,
    };
  }
}

function shuffle(array) {
  let indexes = {};
  let shuffled = [];
  array.forEach((item) => {
    let newIndex = getRandomInt(array.length);
    while (newIndex in indexes) {
      newIndex = getRandomInt(array.length);
    }
    shuffled[newIndex] = item;
    indexes[newIndex] = null;
  });
  return shuffled;
}
