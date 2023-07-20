/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx',
    'eslint-config-prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn',
    'no-console': 'error',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    semi: 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'react/prop-types': 'off',
  },
};
