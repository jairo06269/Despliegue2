// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.config({
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
    },
  }),
];
