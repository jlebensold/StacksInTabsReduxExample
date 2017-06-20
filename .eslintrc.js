module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "max-len": [2, 120, 4],
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "no-unused-vars": ["error", {"argsIgnorePattern": "^_", "varsIgnorePattern": "[iI]gnored"}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};
