// eslint.config.js
import tseslint from '@ts-eslint/config';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  // Ignorar dist y node_modules
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Reglas recomendadas de TypeScript con chequeo de tipos
      ...tseslint.configs.recommendedTypeChecked,
      // Reglas estrictas de TypeScript
      ...tseslint.configs.strictTypeChecked,
      // Reglas estilísticas
      ...tseslint.configs.stylisticTypeChecked,

      // Reglas específicas de React
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        // tsconfig para lint con chequeo de tipos
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Aquí podés agregar reglas personalizadas
      // Ejemplo:
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]);
