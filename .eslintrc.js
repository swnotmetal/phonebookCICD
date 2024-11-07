module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }]
  },
  overrides: [
    {
      files: ['client/**/*.js', 'client/**/*.jsx'],
      env: {
        browser: true,
        es2021: true,
        'cypress/globals': true
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:cypress/recommended'
      ],
      plugins: ['react', 'react-hooks', 'cypress'],
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      excludedFiles: ['client/**/*'],
      env: {
        node: true,
        commonjs: true
      }
    }
  ]
}