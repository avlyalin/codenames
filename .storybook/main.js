const custom = require('../webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: { ...config.resolve, alias: custom.resolve.alias },
    };
  },
};
