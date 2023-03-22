module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
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

  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-shadow': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
};
