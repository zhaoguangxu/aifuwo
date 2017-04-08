var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
    entry:'./src/app.js',
    output:{
        path:'./dist',
        filename:'js/[name]-[chunkhash].js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/ ,
                // exclude:'./node_modules',
                // include:'./src/',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel'
            },
            {
                test: /\.html$/ ,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/ ,
                loader: 'ejs-loader'
            },
            {
                test: /\.css$/ ,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test: /\.less$/ ,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.(png|jpg|gif|svg)$/i ,
                loaders: [
                    'url-loader?limit=1000&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack'
                ]
                // query: {
                //     limit:20000,
                //     name: 'assets/[name]-[hash:5].[ext]'
                // }
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body',
            title:'fuwo',
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ]
}

//htmlWebpackPlugin chunks