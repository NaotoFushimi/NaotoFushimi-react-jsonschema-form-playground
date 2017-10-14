const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const uglifySaveLicense = require("uglify-save-license");
const nodeExternals = require('webpack-node-externals');

const fs = require("fs")

const env = process.env.NODE_ENV
const isProduction = env === "production";
const isTest = env === "test";

const webpackPlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new WebpackNotifierPlugin({alwaysNotify: true}),
];

if (isProduction){
    //圧縮
    webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            drop_console: true,
        },
        output: { comments: uglifySaveLicense }   // リリースビルドのみ uglify する
    }));
}

function createTestEntryPoint(srcpath , destPrefix) {
    const files = {}
    fs.readdirSync(srcpath).filter((file)=> {
        const destFileName = destPrefix + file.replace(/\.ts$/ , ".js");
        files[destFileName] = [ /*"babel-polyfill" ,*/ srcpath + "/" + file];
    });
    return files;
}

const testPaths = createTestEntryPoint("./test/spec" , "test/build/")

module.exports = {
    entry: isTest ? testPaths :{
        bundle : './src/ts/App.ts'
    },
    output: isTest ? {
            filename: '[name]',
        }:{
        path : __dirname + "/../htdocs",
        filename: 'js/[name].js',
    },
    // Turn on sourcemaps
    devtool: isProduction ? false : 'source-map' ,
    cache:true,
    resolve: {
        extensions: [ '.webpack.js', '.web.js', '.css', '.ts', '.js' , '.tsx' , 'png' , 'jpg' , 'jpeg' , 'gif', 'svg'],
        alias: {
            //'react': 'react-lite',
            //'react-dom': 'react-lite',
        },
        modules : ['node_modules'] /*  追加 */
    },
    // Add minification
    plugins: webpackPlugins,
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader : "babel-loader",
                        options: {
                            presets: ["env"],
                            "plugins": [
                                //"dynamic-import-webpack",
                                //"transform-decorators-legacy",
                                //"transform-class-properties",
                                //"transform-runtime",
                                //"transform-object-rest-spread"
                            ]
                        }
                    },
                    {
                        loader : "ts-loader",
                        options : {
                            compiler: 'typescript',
                            compilerOptions: {
                                sourceMap: !isProduction
                            }
                        }
                    }
                ],
                exclude: /node_modules/,
            },

            {
                test: /\.(css|pcss)$/,
                use : [
                    {loader:"style-loader"},
                    {
                        //loader:"css-loader?modules&localIdentName=[local]---[hash:base64:10]&sourceMap&importLoaders=1"},
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]---[hash:base64:10]",
                            sourceMap: true,
                            importLoaders: 1,
                            url : false
                        }
                    },
                    {
                        loader:"postcss-loader",
                        options : {
                            ident: 'postcss',
                            plugins: () => [
                                require("postcss-import"),
                                require('postcss-cssnext'),
                                require('postcss-flexbugs-fixes'),
                            ]
                        }
                    }
                ]
            },
        ]
    },
    externals: isTest ? [nodeExternals()] : {
        //CDNで読み込むやつはここで除外しとくと良い

        //'react': 'React',
        //'react-dom': 'ReactDOM',
        ////'react-router': 'ReactRouter',
        //'react-addons-transition-group': 'React.addons.TransitionGroup',
        //'react-addons-pure-render-mixin': 'React.addons.PureRenderMixin',
        //'react-addons-create-fragment': 'React.addons.createFragment',
        //'react-addons-update': 'React.addons.update',
    },
    performance: {
        hints: false
    }
}
