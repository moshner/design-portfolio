/* global __dirname, module */
/* eslint-disable import/no-commonjs */

module.exports = {
    'root': true,
    'env': {
        browser: true,
        es2020: true,
        jest: true,
    },
    'extends': [
        '@chimericdream',
        '@chimericdream/import',
        '@chimericdream/jest',
        '@chimericdream/jsx-a11y',
        '@chimericdream/react',
        '@chimericdream/react-hooks',
        '@chimericdream/typescript',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        extraFileExtensions: ['.cjs'],
        project: `${__dirname}/tsconfig.eslint.json`,
    },
    'settings': {
        'import/resolver': {
            typescript: {
                project: `${__dirname}/tsconfig.eslint.json`,
            },
        },
        'react': {
            version: 'detect',
        },
    },
    'rules': {
        // These aren't needed with React 17
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
