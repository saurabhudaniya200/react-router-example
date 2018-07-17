module.exports = {
    "parser": 'babel-eslint',
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "env": { "browser": true, "amd": true, "node": true },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-trailing-spaces": [2, { "skipBlankLines": true }],
        "indent": [
            "error",
            2
        ],
        "eol-last": ["error", "always"],
        "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
        "react/prop-types": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};