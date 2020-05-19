module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
    '^src(.*)$': '<rootDir>/src$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup-tests.js'],
};
