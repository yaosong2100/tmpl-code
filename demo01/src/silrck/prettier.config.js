module.exports = {
    printWidth: 120,
    // parser: 'babel',
    tabWidth: 4,
    singleQuote: true,
    semi: true,
    endOfLine: 'lf',
    jsxSingleQuote: true,
    overrides: [
        {
            files: ['*.js'],
            options: {
                parser: 'babel'
            }
        },
        {
            files: ['*.json', '.eslintrc', '.prettierrc', '.stylelintrc'],
            options: {
                parser: 'json'
            }
        },
        {
            files: '*.{css,wxss,sass,scss,less,styl,stylus}',
            options: {
                parser: 'scss'
            }
        },
        {
            files: '*.{vue}',
            options: {
                parser: 'vue'
            }
        },
        {
            files: '*.{html}',
            options: {
                parser: 'html'
            }
        },
        {
            files: '*.{md}',
            options: {
                parser: 'markdown'
            }
        }
    ]
};
