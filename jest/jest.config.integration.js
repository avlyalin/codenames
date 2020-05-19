const baseConfig = require('./jest.config.js');

module.exports = {
  ...baseConfig,
  preset: 'jest-puppeteer',
  testRegex: '\\.ispec\\.js$',
  setupFilesAfterEnv: ['<rootDir>/jest/setup-integration-tests.js'],
};
