module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',

  ],
  rules: {
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'warn',
    'i18next/no-literal-string':
        ['error', {
          markupOnly: true,
          ignoreAttribute: ['data-testid'],
        }],
    'max-len':
        ['error', {
          ignoreComments: true,
          code: 90,
        }],
  },
  globals: {
    __IS_DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
};
