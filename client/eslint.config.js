// client/eslint.config.js
export default [
    {
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['react', 'react-hooks'],
      rules: {
        indent: ['error', 'tab'],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      },
      ignores: ['**/build/**', '**/dist/**', '**/*.spec.js']
    },
  ]
  