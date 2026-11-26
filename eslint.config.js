import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.cjs'],
        languageOptions: {
            sourceType: 'commonjs',
        },
    },
    {
        rules: {
            'no-console': 'warn',
        },
    },
    eslintConfigPrettier,
];
