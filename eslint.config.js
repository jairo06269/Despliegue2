// eslint.config.js (compatible con ESLint 9 y CommonJS)
module.exports = [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 2],
      },
    },
  ];
  