module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'eslint import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'react/prop-types': 1,
    'react/prefer-stateless-function': 0,
    'react/no-children-prop': 0,
    'react/no-array-index-key': 0,
    'key-spacing': 1,
    'react/jsx-one-expression-per-line': 0,
    'arrow-body-style': 0,
    'no-undef': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    camelcase: 0,
  },
};
