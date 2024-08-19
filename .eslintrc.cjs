module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js.cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // 일일이 Import React from 'react'; 선언하지 않아도 되게 함
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': 'off',
    'import/extensions': ['off'],
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function'] },
    ],
    'react/require-default-props': [
      2,
      {
        ignoreFunctionalComponents: true,
        // @deprecated Use `functions` option instead.
      },
    ],
    'react/jsx-props-no-spreading': ['on', { exceptions: ['Icon'] }],
  },
};
