import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const resolvePath = (...pathParts) => path.resolve(__dirname, ...pathParts);

module.exports = {
    entry: resolvePath('src/main.js'),
    output: {
        filename: 'app.js',
        path: resolvePath('www')
    },
    resolve: {
        symlinks: false // https://github.com/webpack/webpack/issues/811#issuecomment-309797397
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: { url: false } },
                        {
                            loader: 'less-loader',
                            options: {
                                // Configure OTRL branding
                                modifyVars: {
                                    brand: JSON.stringify('southern'),
                                    brandOverrides: JSON.stringify(''),
                                    fontUrl: JSON.stringify('fonts/')
                                },
                                relativeUrls: false
                            }
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CopyPlugin([
            {
                from: resolvePath('node_modules/otrl-search-widgets/dist/fonts'),
                to: resolvePath('www/fonts')
            }
        ]),
        new CopyPlugin([
            {
                context: resolvePath('node_modules/otrl-search-widgets/dist'),
                from: resolvePath('node_modules/otrl-search-widgets/dist/widgets.js*'),
                to: resolvePath('www/node_modules')
            }
        ])
    ],
    devtool: 'source-map',
    devServer: {
        port: 8081,
        contentBase: resolvePath('www')
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        crypto: 'empty'
    }
};
