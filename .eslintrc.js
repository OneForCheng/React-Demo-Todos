module.exports = {
    root: true,    
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true,
    },
    rules: {
        // "indent": ["error", 2]
    },
    plugins:["react"]
}
