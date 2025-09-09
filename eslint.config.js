import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import pluginCompat from 'eslint-plugin-compat';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSortKeys from 'eslint-plugin-sort-keys';
import pluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['dist', 'node_modules', 'storybook-static'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      pluginCompat,
      pluginImport,
      pluginReact,
      pluginStorybook,
      prettier: pluginPrettier,
      'react-hooks': pluginReactHooks,
      'sort-keys': pluginSortKeys,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginCompat.configs['flat/recommended'],
  ...pluginStorybook.configs['flat/recommended'],
  prettierConfig,
  {
    rules: {
      'import/no-anonymous-default-export': 'error',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: ['external', 'builtin', 'index', 'parent', 'sibling'],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: 'reac+(t|t-dom)',
              position: 'before',
            },
            {
              group: 'builtin',
              pattern: 'src/**/*.{js,jsx,ts,tsx}',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['scss', 'css'],
        },
      ],
      'newline-before-return': 'error',
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'sort-keys/sort-keys-fix': 'error',
    },
  }
);
