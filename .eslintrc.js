/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      // https://github.com/typescript-eslint/typescript-eslint/issues/251#issuecomment-567365174
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ["src/generated/**/*"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["import", "import-access", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-default-export": "off",
    "react/prop-types": "off",
    "import/order": [2],
    "@next/next/no-img-element": "off",
    "import-access/jsdoc": ["error"],
  },
};
