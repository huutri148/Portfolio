module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    // TypeScript
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true
      }
    ],
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/strict-boolean-expressions": "off",
    // React
    "react/prefer-stateless-function": "warn",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".ts", ".tsx"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": 0,
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true
      }
    ],
    "react-hooks/exhaustive-deps": "error",
    // File styles
    "linebreak-style": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
