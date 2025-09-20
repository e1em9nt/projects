import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import security from 'eslint-plugin-security';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['**/*.html', '**/*.scss', '**/.DS_Store'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    rules: { 'json/no-empty-keys': 'off' },
  },

  // JS/MJS/CJS з OWASP-плагінами
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      security,
      'no-unsanitized': noUnsanitized,
    },
    extends: ['js/recommended', security.configs.recommended, noUnsanitized.configs.recommended],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // Правила з eslint-plugin-no-unsanitized
      'no-unsanitized/method': 'error',
      'no-unsanitized/property': 'warn',

      // Правила з eslint-plugin-security
      'security/detect-object-injection': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-unsafe-regex': 'warn',
      'security/detect-child-process': 'warn',
      'security/detect-buffer-noassert': 'warn',
      'security/detect-disable-mustache-escape': 'warn',
      'security/detect-possible-timing-attacks': 'warn',
    },
  },
]);
