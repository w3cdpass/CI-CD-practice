// eslint.config.js
export default [
    {
      ignores: ["dist/**", "node_modules/**"],
    },
    {
      files: ["**/*.js"],
      rules: {
        "no-unused-vars": "error",
        "no-console": "warn",
      },
    },
  ];