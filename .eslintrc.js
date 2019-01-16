module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  plugins: ["react", "prettier"],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  rules: {
    // don't force es6 functions to include space before parenthesis
    "space-before-function-paren": 0,

    // allow specifying true explicitly for boolean props
    "react/jsx-boolean-value": 0,

    // allow imports mixed with non-import statements at top of file
    "import/first": 0,

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "off",

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": "error",

    // Disable no-param-reassign only for param properties
    // https://stackoverflow.com/a/35637900
    "no-param-reassign": [2, { props: false }],
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: ["./", "./example/"] }
    ]
  },
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"]
      }
    }
  }
};
