module.exports = {
    // Other configurations...
    module: {
        rules: [{
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
                enforce: 'pre', // To apply before source-map-loader
            },
            {
                test: /\.css$/,
                use: ['source-map-loader'],
                enforce: 'pre',
                exclude: /node_modules/, // Exclude node_modules from source map processing
            },
        ],
    },
};
