const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const PnpWebpackPlugin = require("pnp-webpack-plugin");


module.exports = {
    mode: process.env.MODE ?? "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
        fallback: {
            "assert": require.resolve("assert")
        }
    },

    devServer: {
        host: "0.0.0.0",
        allowedHosts: [".localhost", "localhost"],
        port: "5000",
        hot: true,
        historyApiFallback: true,
    },

    output: {
        publicPath: "/hyp.so",
        path: path.resolve(__dirname, "docs"),
    },

    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: PnpWebpackPlugin.tsLoaderOptions(),
                }]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.

            process.env.MODE === "production" ? {} :
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /.svg$/i,
                use: [
                    "@svgr/webpack",
                ]
            }
        ]
    },

    externals:
        process.env.MODE === "production"
            ? {
                "react": "React",
                "react-dom": "ReactDOM",
            }
            : {},

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            templateParameters: {
                mode: process.env.MODE ?? "development",
            }
        }),
        new DefinePlugin({
            "process.env": JSON.stringify({
                MODE: process.env.MODE ?? "development",
                TRUST: process.env.TRUST ?? "0"
            }),
        })
    ],
};