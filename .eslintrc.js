module.exports = {
  parser: "babel-eslint",
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["prettier", "react", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "arrow-body-style": [1, "as-needed"],
    "class-methods-use-this": 0,
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": [2, { ignore: ["^."] }],
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "prefer-destructuring": 1,
    "prefer-template": 2,
    quotes: [1, "single", { avoidEscape: true }],
    "react/jsx-closing-tag-location": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/prop-types": 1,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/sort-comp": 0,
    "require-yield": 0
  },
  overrides: [
    {
      files: ["*.test.js", "*.spec.js"],
      rules: {
        "no-unused-expressions": 0,
        "no-console": 0
      }
    }
  ]
};
