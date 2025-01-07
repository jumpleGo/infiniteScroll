import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    files: ['*.ts', '*.tsx', '*.js', '*.vue'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      vue,
      prettier,
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules, // Правила от @typescript-eslint
      ...vue.configs['vue3-recommended'].rules, // Правила от eslint-plugin-vue
      ...prettier.configs.recommended.rules, // Интеграция с Prettier
    },
  },
]
