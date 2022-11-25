module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "react-app",
      "plugin:react/recommended",
      "eslint:recommended",
      "airbnb",
      "eslint-config-prettier",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "no-param-reassign": [
        "error",
        { props: true, ignorePropertyModificationsFor: ["state"] },
      ],
      "import/no-unresolved": 0,
      "react/prop-types": 0,
      "arrow-body-style":0,
      "no-unused-vars":0,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            // ["@components", "./src/components"],
            // ["@screens", "./src/screens"],
            ["@styles", "./src/assets/styles"],
            ["@images", "./src/assets/images"],
            // ["@utils", "./src/utils"]
          ],
          extensions: [".ts", ".js", ".jsx", ".json", ".svg"],
        },
      },
    },
  };
  