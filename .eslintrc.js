module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true
  },
  extends: ["plugin:flowtype/recommended"],
  parser: "babel-eslint",
  rules: {
    // "indent": ["error", 2]
  },
  plugins: ["flowtype", "react"]
};
