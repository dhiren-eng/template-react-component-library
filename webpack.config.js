const path = require("path")
module.exports = {
    entry: "./src/Button.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
        globalObject: 'this',
        library: {
            name: 'template-react-component-library',
            type: 'umd'
        }
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        }
    },
    module: {
        rules: [
            { test: /\.(jsx|js|tsx|ts)$/, exclude: /node_modules/, use: {loader: "babel-loader", options: {presets: ["@babel/preset-env"]}} },
            { test: /\.(tsx|ts)$/, exclude: /node_modules/, use: ["ts-loader"] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
}