import js from '@eslint/js';
// eslint-disable-next-line import/no-unresolved
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginImportNewLines from 'eslint-plugin-import-newlines';
import pluginImport from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import pluginEs from 'eslint-plugin-es';


const jsRules = [
  js.configs.recommended,
  {
    rules: {
      'no-useless-catch': 'error',
      'no-case-declarations': 'warn',
      'no-debugger': 'warn',
      'no-empty': 'warn',
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-const-assign': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'callback-return': 'error',
      'no-useless-backreference': 'warn',
      'no-restricted-syntax': [
        'error',
        ...[
          ['OBJECT', 'ObjectExpression'],
          ['NEW OBJECT', 'NewExpression'],
          ['ARRAY', 'ArrayExpression'],
        ].map(([t, v]) => ({
          selector: `VariableDeclarator[id.type="ObjectPattern"][init.name="props"] Property[value.right.type="${v}"]`,
          message: `Destructuring assignment with ${t} default value is not allowed for React component props.`,
        })),
      ],
      eqeqeq: 'error',
      'no-use-before-define': 'error',
    },
  },
];

const stylisticRules = [
  pluginStylistic.configs.recommended,
  {
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/keyword-spacing': 'warn',
      '@stylistic/key-spacing': 'warn',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/max-len': ['error', 120, {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/arrow-parens': 'off',
      '@stylistic/space-in-parens': 'warn',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/no-mixed-operators': 'off',
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      // '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/comma-spacing': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/template-curly-spacing': 'error',
      '@stylistic/computed-property-spacing': 'error',
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
      '@stylistic/brace-style': 0,
    },
  },
];

const importRules = [
  pluginImport.flatConfigs.recommended,
  {
    plugins: {
      'import-newlines': pluginImportNewLines,
      // import: pluginImport,
    },
    rules: {
      'import-newlines/enforce': ['error', { items: 1 }],

      'import/newline-after-import': ['error', { count: 2 }],
      'import/order': 'off',
      'import/no-named-as-default': 'off',
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/first': 'error',
    },
  },
];


export default [
  ...jsRules,
  ...stylisticRules,
  ...importRules,

  {
    plugins: {
      es: fixupPluginRules(pluginEs),
    },
    rules: {
      'es/no-regexp-lookbehind-assertions': 'warn',
    },
  },
];
