import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules/', 'build/'], // Add the ignores property here
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
];
