var webpack = require('webpack');
var path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './',
        host: '0.0.0.0',
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './main.jsx'),
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/, 
                loader: 'babel-loader?presets[]=es2015&presets[]=react' 
            },{
                test: /\.css$/, 
                loader: 'style-loader!css-loader?root=.' 
            },{
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            },{
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    externals: {
        'data': 'data'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};