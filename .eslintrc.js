module.exports = {
    "extends": "eslint-config-airbnb",
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "curly": ["error", "multi-or-nest", "consistent"],
      "semi": ["error", "never"],
      "arrow-body-style": ["off"],
      "no-underscore-dangle": ["off"],
      "no-console": "off",
      "camelcase": "off",
      "generator-star-spacing": "off",
      "import/prefer-default-export": "off",
      "import/no-named-as-default": "off",
      "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
      "react/jsx-no-bind": [2, { "allowArrowFunctions": true }],
    },
    "parser": "babel-eslint",
    "env": {
      "browser": true
    }
};
