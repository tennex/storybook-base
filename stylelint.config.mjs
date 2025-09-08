/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested', 'blockless-after-blockless'],
        ignoreAtRules: ['else', 'include'],
      },
    ],
    'color-function-alias-notation': 'with-alpha',
    'color-hex-length': 'long',
    'color-named': 'never',
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'media-feature-range-notation': 'prefix',
    'no-descending-specificity': null,
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    'selector-max-id': 0,
    'declaration-empty-line-before': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'error',
      },
    ],
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/load-partial-extension': 'always',
    'scss/operator-no-newline-after': null,
  },
};
