const path = require("path")
const HTML = require("html-webpack-plugin")

const entry = "./src/run/index.jsx"

const output = {
    path: path.join(__dirname, "build"),
    filename: "react.main.js"
}

const devServer = {
    port: 3000
}

const resolve = {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
}

const plugins = [
    new HTML({
        template: path.join(__dirname, "public", "index.html")
    })
]

const ruleCSS = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
}

const ruleReact = {
    test: /\.jsx|.js/,
    exclude: /node_modules/,
    use: ["babel-loader"]
}

const moduleConfig = {
    rules: [ruleCSS, ruleReact]
}

module.exports = {
    entry: entry,
    output: output,
    devServer: devServer,
    module: moduleConfig,
    resolve: resolve,
    plugins: plugins
}