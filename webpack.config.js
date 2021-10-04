const path = require('path');

module.exports = {
    entry: [path.resolve(__dirname, "./src/index.tsx")],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    // ローダーの設定 下から実行
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    //sassとか追加
                ]
            }
        ]
    },

    // 名前解決するための設定
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // webpack-dev-serverが参照するフォルダ
        historyApiFallback: true,
        open: true
    },
}