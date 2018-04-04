module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb-base"],
  parser: "babel-eslint",
  plugins: ["react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    "arrow-body-style": "warn"
  }
};
