'use strict';

module.exports = {
    root: true,
    extends: [
        'homeoffice/rules/possible-errors',
        'homeoffice/rules/best-practices',
        'homeoffice/rules/strict-mode',
        'homeoffice/rules/variables',
        'homeoffice/rules/node-js',
        'homeoffice/rules/stylistic-issues.js',
        'homeoffice/rules/ecmascript',
        'homeoffice/rules/legacy',
        'homeoffice/rules/plugins'
    ],
    env: {
        node: true
    },
    plugins: [
        'filenames',
        'one-variable-per-var',
        'mocha'
    ]
};
