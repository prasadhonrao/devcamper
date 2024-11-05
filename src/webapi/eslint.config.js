import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules/', 'build/'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // Add Jest globals
      },
    },
    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: 'colors', argsIgnorePattern: '^next$' }],
    },
  },
  pluginJs.configs.recommended,
];
