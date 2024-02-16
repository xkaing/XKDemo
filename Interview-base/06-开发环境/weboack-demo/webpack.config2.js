module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {                   //添加这个选项，可以省去新建.babelrc文件，并添加相应配置 
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx',{pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {                    
        minimize: false
    }
}