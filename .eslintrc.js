module.exports = {
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'react-native/no-inline-styles': ['off'],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: true },
    ],
    'sort-vars': ['error', { ignoreCase: true }],
  },
};
