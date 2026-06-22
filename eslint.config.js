// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';
import { jsConfig } from './src/index.js';


const customConfig = {
  name: 'common-config',
  ignores: ['node_modules/**', 'coverage/**'],
  files: ['**/*.js'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // parser: babelParser,
    parserOptions: {},
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};

export default defineConfig([
  jsConfig,
  customConfig,
]);
