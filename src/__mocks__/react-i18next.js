const React = require('react');
const reactI18next = require('react-i18next');

const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = {};

module.exports = {
  withTranslation: () => (Component) => (props) => (
    <Component t={(k) => k} {...props} />
  ),
  Translation: ({ children }) => children((k) => k, { i18n: {} }),
  useTranslation: () => useMock,

  initReactI18next: reactI18next.initReactI18next,
};
