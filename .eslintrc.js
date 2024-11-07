module.exports = {
  env: {
    es2021: true,
    'cypress/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['cypress'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'react/react-in-jsx-scope': 'off', // If using React 17+
    'react/prop-types': 'off'
  },
  overrides: [
    {
      files: ['client/**/*.js', 'client/**/*.jsx'],
      env: {
        browser: true,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: ['server/**/*.js'],
      env: {
        node: true,
        commonjs: true,
      },
    }
  ]
}