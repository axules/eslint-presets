import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import { fixupConfigRules } from '@eslint/compat';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';


export default [
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': ['error', {
        groups: [
          ['^react$', '^prop-types$', '^classnames$'],
          ['^\\u0000'],
          ['^@?\\w'],
          ['^[^.]'],
          ['^\\.\\./'],
          ['^\\./'],
          ['^.*\\.locales?(\\.js)?$', '^\\u0000?\\./.*\\.(css|sass|scss)$'],
        ],
      }],
    },
  },


  fixupConfigRules(pluginReact.configs.flat.recommended),
  fixupConfigRules(pluginReact.configs.flat['jsx-runtime']),
  pluginReactHooks.configs.flat.recommended,
  {
    rules: {
      'react/button-has-type': 'error',
      'react/prop-types': 'error',
      'react/jsx-pascal-case': 'off',
      'react/jsx-curly-spacing': 'error',
      'react/jsx-tag-spacing': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'parens-new-line',
        prop: 'ignore',
      }],
      'react/no-unused-prop-types': 'warn',
      'react/no-unknown-property': 'error',
      'react/default-props-match-prop-types': 'error',
      'react/no-array-index-key': 'error',
      'react/no-danger-with-children': 'error',
      'react/sort-comp': ['warn', {
        order: [
          'initialData',
          'setters',
          'static-methods',
          'lifecycle',
          '/^public_.+$/',
          'everything-else',
          '/^on.+$/',
          '/^render.+$/',
          'render',
        ],
        groups: {
          initialData: ['selfId', 'state', 'DOM'],
        },
      }],
    },
  },


  pluginJsxA11y.flatConfigs.recommended,
  {
    rules: {
      'jsx-a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],
      'jsx-a11y/href-no-hash': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'error',
        {
          ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          li: ['menuitem', 'option', 'row', 'tab', 'treeitem', 'listitem', 'button'],
          table: ['grid'],
          td: ['gridcell'],
          p: ['textbox'],
        },
      ],
    },
  },
];
