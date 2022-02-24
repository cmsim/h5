module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        semi: false,
        arrowParens: 'avoid',
        printWidth: 140,
        trailingComma: 'none'
      }
    ]
  }
}
