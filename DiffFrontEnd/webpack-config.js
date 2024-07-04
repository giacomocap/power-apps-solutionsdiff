const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
const filePath = "../../DiffToolFramework/Content/libs/";

module.exports = (env) => {
    const isProduction = env && env.production;
    //console.log(path.resolve(filePath));
    return {
        context: __dirname,
        devtool: isProduction ? false : "source-map",
        entry: "./app.tsx",
        mode: isProduction ? "production" : "development",
        output: {
            filename: filePath + "[name].[contenthash].js",
            //path: path.resolve(filePath),
            clean: true,
        },
        resolve: {
            extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                minRemainingSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    reactVendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router)[\\/]/,
                        name: "reactvendor"
                    },
                    xlsxVendor: {
                        test: /[\\/]node_modules[\\/](xlsx)[\\/]/,
                        name: "xlsxvendor"
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/](!xlsx)[\\/]/,
                        name: "vendor"
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
            usedExports: true,
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    test: /\.js(\?.*)?$/i,
                    parallel: true,
                    terserOptions: {
                        compress: {
                            //if enabled, it removes all console.log's
                            pure_funcs: ['console.log'],
                            //drop_debugger: false,
                        },
                    },
                })
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            // !isProduction && new BundleAnalyzerPlugin(),
            new HtmlWebpackPlugin({
                filename: '../../DiffToolFramework/Views/Home/Index.cshtml',
                template: './index.ejs',
                inject: false,
            })
        ]
    };
}