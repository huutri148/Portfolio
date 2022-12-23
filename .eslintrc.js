module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }]
  }
}
