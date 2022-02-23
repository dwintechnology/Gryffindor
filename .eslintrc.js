module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
  ],
  rules: {
    "indent": ["error", 2],
    "linebreak-style": 1,
    "quotes": ["error", 'single'],
    "curly": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
