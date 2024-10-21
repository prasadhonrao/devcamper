import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        ...globals.es2023,
        ...globals.esnext,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
