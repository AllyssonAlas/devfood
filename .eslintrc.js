module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: 'off',
    'react/jsx-filename-extension': ['off', {extensions: ['.js', '.jsx']}],
    'react/jsx-curly-brace-presence': 0,
    'no-param-reassign': 'off',
    'import/prefer-default-export': 0,
    'consistent-return': 'off',
    'react/jsx-one-expression-per-line': 1,
    'react/jsx-props-no-spreading': 0,
  },
}
