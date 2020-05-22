import { generateDictionaryWord } from './data-provider';

jest.mock('../data/dictionaries.json', () => ({
  test_dictionary: ['alphabet', 'car', 'tiger'],
}));

describe('generateDictionaryWord', () => {
  test('should return unique dictionary words', () => {
    let words = [];
    const wordsGenerator = generateDictionaryWord('test_dictionary');
    for (let i = 0; i < 3; i++) {
      words.push(wordsGenerator.next().value);
    }
    const uniqueWords = [...new Set([...words])];
    expect(words).toEqual(uniqueWords);
  });

  test('should throw exception for non-existing dictionary', () => {
    expect(() => {
      const generator = generateDictionaryWord('unknown');
      generator.next();
    }).toThrowError(TypeError);
  });
});
